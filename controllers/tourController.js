const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const Tour = require('./../models/tourModel');

exports.aliasTopTours = (req, res, next) => {
	req.query.limit = '3';
	req.query.sort = '-ratingsAverage, price';
	req.query.fields = 'name,duration,summary,difficulty,startLocation,startDates,locations,maxGroupSize';

	next();
};

exports.getAllTours = catchAsync(async (req, res, next) => {
	//EXECUTE QUERY
	const features = new APIFeatures(Tour.find(), req.query).filter().sort().limitFields().paginate();
	const tours = await features.query;

	//SEND RESPONSE
	res.status(200).json({
		status: 'success',
		results: tours.length,
		data: {
			tours
		}
	});
});

exports.getTour = catchAsync(async (req, res, next) => {
	const tour = await Tour.findById(req.params.id);

	if (!tour) throw new Error('No tour found with that ID');

	res.status(200).json({
		status: 'success',
		data: {
			tour
		}
	});
});

exports.createTour = catchAsync(async (req, res, next) => {
	const tour = await Tour.create(req.body);

	res.status(201).json({
		status: 'success',
		data: {
			tour
		}
	});
});

exports.updateTour = catchAsync(async (req, res, next) => {
	const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

	if (!tour) throw new Error('No tour found with that ID');

	res.status(200).json({
		status: 'success',
		data: {
			tour
		}
	});
});

exports.deleteTour = catchAsync(async (req, res, next) => {
	const tour = await Tour.findByIdAndRemove(req.params.id);

	if (!tour) throw new Error('No tour found with that ID');

	res.status(204).json({
		status: 'success'
	});
});
