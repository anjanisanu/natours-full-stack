const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

const filterObj = (obj, ...allowedFields) => {
	const newObj = {};
	Object.keys(obj).forEach((el) => {
		if (allowedFields.includes(el)) newObj[el] = obj[el];
	});
	return newObj;
};

exports.getAllUsers = catchAsync(async (req, res) => {
	const users = await User.find();

	res.status(200).json({
		status: 'success',
		results: users.length,
		data: {
			users
		}
	});
});

exports.getUser = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			users: 'Displays single user details'
		}
	});
};

exports.createUser = (req, res) => {
	res.status(201).json({
		status: 'success',
		data: {
			users: 'Create user'
		}
	});
};

exports.updateUser = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			users: 'Update user'
		}
	});
};

exports.updateMe = catchAsync(async (req, res, next) => {
	// Create error if user post password data
	if (req.body.password || req.body.passwordConfirm)
		return next(new AppError('This route is not for updating password', 400));

	// update user document
	const filteredBody = filterObj(req.body, 'name', 'email');
	const updatedData = await User.findByIdAndUpdate(req.user.id, filteredBody, { new: true, runValidators: true });

	res.status(200).json({
		status: 'success',
		data: {
			user: updatedData
		}
	});
});

exports.deleteUser = (req, res) => {
	res.status(204).json({
		status: 'success',
		data: {
			users: 'Delete user'
		}
	});
};
