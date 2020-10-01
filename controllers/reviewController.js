const Review = require('./../models/reviewModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllReviews = catchAsync(async (req, res, next) => {
	const reviews = await Review.find();

	if (!reviews) return next(new AppError('No Review Found', 404));

	res.status(200).json({
		status: 'success',
		results: reviews.length,
		data: {
			reviews
		}
	});
});