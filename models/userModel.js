const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [ true, 'Please tell us your name' ]
	},
	email: {
		type: String,
		required: [ true, 'Please provide your email' ],
		unique: [ true, 'Email must be unique' ],
		lowercase: true,
		validate: [ validator.isEmail, 'Please enter a valid email' ]
	},
	photo: String,
	password: {
		type: String,
		required: [ true, 'Please provide a password' ],
		minlength: 8,
		select: false
	},
	passwordConfirm: {
		type: String,
		required: [ true, 'Please confirm your password' ],
		validate: {
			validator: function(el) {
				return el === this.password;
			},
			message: 'Both passwords does not match.'
		}
	}
});

userSchema.pre('save', async function(next) {
	if (!this.isModified('password')) return next();

	this.password = await bcrypt.hash(this.password, 12);
	this.passwordConfirm = undefined;

	next();
});

module.exports = mongoose.model('User', userSchema);
