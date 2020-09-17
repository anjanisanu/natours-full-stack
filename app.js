const express = require('express');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res) => {
	res.status(404).json({
		status: 'fail',
		message: `Cannot find ${req.originalUrl} on this server.`
	});
});
module.exports = app;
