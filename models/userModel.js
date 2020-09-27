const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { resetPassword } = require('../controllers/authController');

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
	role: {
		type: String,
		enum: [ 'admin', 'user', 'guide', 'lead-guide' ],
		default: 'user'
	},
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
	},
	passwordChangedAt: {
		type: Date,
		default: Date.now()
	},
	passwordResetToken: String,
	passwordResetExpires: Date
});

userSchema.pre('save', async function(next) {
	if (!this.isModified('password')) return next();

	this.password = await bcrypt.hash(this.password, 12);
	this.passwordConfirm = undefined;

	next();
});

//Instance Method
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
	return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function(JWTTimeStamp) {
	const changedTimeStamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
	if (this.passwordChangedAt) {
		return JWTTimeStamp < changedTimeStamp;
	}

	return false;
};

userSchema.methods.createPasswordResetToken = function() {
	const resetToken = crypto.randomBytes(32).toString('hex');

	this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
	this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

	return resetToken;
};

module.exports = mongoose.model('User', userSchema);
