const mongoose = require('mongoose');
const slugify = require('slugify');

const tourSchema = mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			unique: [ true, 'A tour name must be unique' ],
			required: [ true, 'A tour must have a name' ],
			maxlength: [ 40, 'A tour name must be less than or equal to 40 characters' ],
			minlength: [ 10, 'A tour name must be more than or equal to 10 characters' ]
		},
		slug: String,
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
			default: 4.5,
			min: [ 1, 'Rating must be above 1.0' ],
			max: [ 5, 'Rating must be below 5.0' ]
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
			type: Number,
			validate: {
				validator: function(val) {
					return val < this.price;
				}
			},
			message: 'Discount Price ({VALUE}) should be less than original price'
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
		startDates: [ Date ],
		secretTour: {
			type: Boolean,
			default: false
		},
		startLocation: {
			type: {
				type: String,
				default: 'Point',
				enum: [ 'Point' ]
			},
			coordinates: [ Number ],
			address: String,
			description: String
		},
		locations: [
			{
				type: {
					type: String,
					default: 'Point',
					enum: [ 'Point' ]
				},
				coordinates: [ Number ],
				address: String,
				description: String,
				day: Number
			}
		],
		guides: [
			{
				type: mongoose.Schema.ObjectId,
				ref: 'User'
			}
		]
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true }
	}
);

tourSchema.virtual('reviews', {
	ref: 'Review',
	foreignField: 'tour',
	localField: '_id'
});

tourSchema.pre('save', function(next) {
	this.slug = slugify(this.name, { lower: true });

	next();
});

tourSchema.pre(/^find/, function(next) {
	this.find({ secretTour: { $ne: true } });
	next();
});

tourSchema.pre(/^find/, function(next) {
	this.populate({
		path: 'guides',
		select: '-__v -passwordChangedAt -email'
	});

	next();
});

tourSchema.pre('aggregate', function(next) {
	this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
	next();
});

module.exports = mongoose.model('Tour', tourSchema);
