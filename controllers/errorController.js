const AppError = require('./../utils/appError');

const handleDbCastError = (err) => {
	const message = `Invalid ${err.path}: ${err.value}`;
	return new AppError(message, 400);
};

const handleDbDuplicateError = (err) => {
	const message = `'${err.keyValue.name}' already exists`;
	return new AppError(message, 400);
};

const handleDbValidationError = (err) => {
	const errors = Object.values(err.errors).map((el) => el.message).join('. ');
	const message = `Invalid Data: ${errors}`;
	return new AppError(message, 400);
};

const sendErrDev = (err, res) => {
	res.status(err.statusCode).json({
		status: err.status,
		error: err,
		message: err.message,
		stack: err.stack
	});
};

const sendErrProd = (err, res) => {
	//Operational or trusted error: Send message to the client
	if (err.isOperational) {
		res.status(err.statusCode).json({
			status: err.status,
			message: err.message
		});

		//Programming or other error: Do not leak error details
	} else {
		// Log error to console
		console.error('Error😡', err);

		//Send Generic Message
		res.status(500).json({
			status: 'error',
			message: 'Something went wrong.'
		});
	}
};

module.exports = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'error';

	if (process.env.NODE_ENV === 'development') {
		sendErrDev(err, res);
	} else if (process.env.NODE_ENV === 'production') {
		let error = { ...err };

		if (err.name === 'CastError') error = handleDbCastError(error);
		if (error.code === 11000) error = handleDbDuplicateError(error);
		if (err.name === 'ValidationError') error = handleDbValidationError(error);

		sendErrProd(error, res);
	}

	next();
};
