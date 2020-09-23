const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

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

exports.deleteUser = (req, res) => {
	res.status(204).json({
		status: 'success',
		data: {
			users: 'Delete user'
		}
	});
};
