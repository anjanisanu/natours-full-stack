const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//Global Middlewares

// Set Security HTTP Headers
app.use(helmet());

// Limit requests from same IP
const limiter = rateLimit({
	max: 100,
	windowMs: 60 * 60 * 1000,
	message: 'Too many requests from this IP. Please try again after an hour'
});

app.use('/api', limiter);

// Body Parser, reading data from req.body
app.use(express.json({ limit: '10kb' }));

// Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
	next(new AppError(`Cannot find ${req.originalUrl} on this server.`));
});

app.use(globalErrorHandler);

module.exports = app;
