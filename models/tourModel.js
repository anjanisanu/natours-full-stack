const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
	name: {
		type: String,
		unique: [ true, 'A tour name must be unique' ],
		required: [ true, 'A tour must have a name' ]
	},
	price: {
		type: Number,
		required: [ true, 'A tour must have a price' ]
	},
	rating: {
		type: Number,
		default: 4.5
	}
});

module.exports = mongoose.model('Tour', tourSchema);
