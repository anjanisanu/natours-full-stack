const Tour = require('./../models/tourModel');

exports.getAllTours = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			tours: 'Get All tours'
		}
	});
};

exports.getTour = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			tours: 'Get a tour details'
		}
	});
};

exports.createTour = async (req, res) => {
	const tour = await Tour.create(req.body);

	res.status(201).json({
		status: 'success',
		data: {
			tour
		}
	});
};

exports.updateTour = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			tours: 'Update a tour'
		}
	});
};

exports.deleteTour = (req, res) => {
	res.status(204).json({
		status: 'success',
		data: {
			tours: 'Delete Tour'
		}
	});
};
