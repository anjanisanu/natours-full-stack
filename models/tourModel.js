const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
	name: {
		type: String,
		trim: true,
		unique: [ true, 'A tour name must be unique' ],
		required: [ true, 'A tour must have a name' ]
	},
	duration: {
		type: Number,
		required: [ true, 'A tour must have a duration' ]
	},
	maxGroupSize: {
		type: Number,
		required: [ true, 'A tour must have group size' ]
	},
	difficulty: {
		type: String,
		required: [ true, 'A tour must have a difficulty' ],
		enum: {
			values: [ 'easy', 'medium', 'difficult' ],
			message: 'Difficulty must be either easy, medium, or difficult'
		}
	},
	ratingsAverage: {
		type: Number,
		default: 4.5
	},
	ratingsQuantity: {
		type: Number,
		default: 0
	},
	price: {
		type: Number,
		required: [ true, 'A tour must have a price' ]
	},
	priceDiscount: {
		type: Number
	},
	summary: {
		type: String,
		trim: true,
		required: [ true, 'A tour must have a summary' ]
	},
	description: {
		type: String,
		trim: true
	},
	imageCover: {
		type: String,
		required: [ true, 'A tour must have a cover image' ]
	},
	images: [ String ],
	createdAt: {
		type: Date,
		default: Date.now(),
		select: false
	},
	startDates: [ Date ]
});

module.exports = mongoose.model('Tour', tourSchema);
