const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');

const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

const signToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};
exports.signup = catchAsync(async (req, res, next) => {
	const { name, email, password, passwordConfirm } = req.body;
	const newUser = await User.create({ name, email, password, passwordConfirm });

	const token = signToken(newUser._id);

	res.status(201).json({
		status: 'success',
		token,
		data: {
			user: newUser
		}
	});
});

exports.login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) return next(new AppError('Please provide email and password', 400));

	const user = await User.findOne({ email }).select('password');

	if (!user || !await user.correctPassword(password, user.password))
		return next(new AppError('Invaid User Credentials', 401));

	const token = signToken(user._id);

	res.status(200).json({
		status: 'success',
		token
	});
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
