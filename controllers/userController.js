exports.getAllUsers = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			users: 'Displays all users'
		}
	});
};

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
