const Tour = require('./../models/tourModel');

exports.getAllTours = async (req, res) => {
	try {
		//BUILD QUERY
		//1. Filtering
		const queryObj = { ...req.query };
		const exclidedFields = [ 'page', 'sort', 'limit', 'fields' ];

		exclidedFields.forEach((el) => delete queryObj[el]);

		const query = Tour.find(queryObj);

		//EXECUTE QUERY
		const tours = await query;

		//SEND RESPONSE
		res.status(200).json({
			status: 'success',
			results: tours.length,
			data: {
				tours
			}
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err
		});
	}
};

exports.getTour = async (req, res) => {
	try {
		const tour = await Tour.findById(req.params.id);

		if (!tour) throw new Error();

		res.status(200).json({
			status: 'success',
			data: {
				tour
			}
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: 'No tour found with that ID'
		});
	}
};

exports.createTour = async (req, res) => {
	try {
		const tour = await Tour.create(req.body);

		res.status(201).json({
			status: 'success',
			data: {
				tour
			}
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err.message
		});
	}
};

exports.updateTour = async (req, res) => {
	try {
		const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

		if (!tour) throw new Error();

		res.status(200).json({
			status: 'success',
			data: {
				tour
			}
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: 'No tour found with that ID'
		});
	}
};

exports.deleteTour = async (req, res) => {
	try {
		const tour = await Tour.findByIdAndRemove(req.params.id);

		if (!tour) throw new Error();

		res.status(204).json({
			status: 'success'
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: 'No tour found with that ID'
		});
	}
};
