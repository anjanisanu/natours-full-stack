const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const sendEmail = require('./../utils/email');

const signToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};

const createSendToken = (user, statusCode, res) => {
	const token = signToken(user._id);
	const cookieOptions = {
		expiresIn: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
		httpOnly: true
	};

	if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
	res.cookie('jwt', cookieOptions);

	user.password = undefined;

	res.status(statusCode).json({
		status: 'success',
		token,
		data: {
			user
		}
	});
};

exports.signup = catchAsync(async (req, res, next) => {
	const { name, email, password, passwordConfirm } = req.body;
	const newUser = await User.create({ name, email, password, passwordConfirm });

	createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) return next(new AppError('Please provide email and password', 400));

	const user = await User.findOne({ email }).select('password');

	if (!user || !await user.correctPassword(password, user.password))
		return next(new AppError('Invaid User Credentials', 401));

	createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
	let token;
	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		token = req.headers.authorization.split(' ')[1];
	}

	if (!token) return next(new AppError('Access denied. Please login to get access', 401));

	const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
	// const decoded = await jwt.verify(token, process.env.JWT_SECRET);

	const freshUser = await User.findById(decoded.id);
	if (!freshUser) return next(new AppError('The user belonging to this token no longer exists', 401));

	if (freshUser.changedPasswordAfter(decoded.iat))
		return next(new AppError('You recently changed password. Please login again'));

	req.user = freshUser;
	next();
});

exports.restrictTo = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role))
			return next(new AppError('You do not have permission to perform this action', 403));

		next();
	};
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
	const user = await User.findOne({ email: req.body.email });
	if (!user) return next(new AppError('No user exists with this email', 404));

	const resetToken = user.createPasswordResetToken();

	await user.save({ validateBeforeSave: false });

	const resetURL = `${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}`;
	const message = `Forgot Password? Submit your new password using this URL\n${resetURL}\nIf this action is not initiated by you, please ignore this`;

	try {
		await sendEmail({
			email: user.email,
			subject: 'Your password Reset Token. Valid for only 10 minutes',
			message
		});

		res.status(200).json({
			status: 'success',
			message: 'Token sent to registered email'
		});
	} catch (err) {
		user.passwordResetToken = undefined;
		user.passwordResetExpires = undefined;

		await user.save({ validateBeforeSave: false });
		return next(
			new AppError(`There was an error while sending email to registered email. Please try again later`, 500)
		);
	}
});

exports.resetPassword = catchAsync(async (req, res, next) => {
	// Get user from token
	const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

	const user = await User.findOne({ passwordResetToken: hashedToken, passwordResetExpires: { $gt: Date.now() } });

	// If token has not expired and there is a user, change the password
	if (!user) return next(new AppError('Invalid or Expired Token', 400));

	user.password = req.body.password;
	user.passwordConfirm = req.body.passwordConfirm;
	user.passwordResetToken = undefined;
	user.passwordResetExpires = undefined;

	await user.save();

	// Update changedPasswordAt property

	// Log in the user, send JWT
	createSendToken(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
	// Get user from collection
	const user = await User.findById(req.user.id).select('password');

	// Check if posted password is correct
	if (!await user.correctPassword(req.body.passwordCurrent, user.password))
		return next(new AppError('Invalid Password', 401));

	// Update Password
	user.password = req.body.password;
	user.passwordCurrent = req.body.passwordConfirm;
	await user.save();

	// Login the user, send JWT
	createSendToken(user, 200, res);
});
