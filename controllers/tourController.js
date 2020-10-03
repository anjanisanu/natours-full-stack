const Tour = require('./../models/tourModel');
const { getAll, getOne, createOne, updateOne, deleteOne } = require('./handleFactory');

exports.aliasTopTours = (req, res, next) => {
	req.query.limit = '3';
	req.query.sort = '-ratingsAverage, price';
	req.query.fields = 'name,duration,summary,difficulty,startLocation,startDates,locations,maxGroupSize';

	next();
};

exports.getAllTours = getAll(Tour);
exports.getTour = getOne(Tour, { path: 'reviews' });
exports.createTour = createOne(Tour);
exports.updateTour = updateOne(Tour);
exports.deleteTour = deleteOne(Tour);
