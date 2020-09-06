const express = require('express');
const dotenv = require('dotenv');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

dotenv.config({ path: './config.env' });

const app = express();
app.use(express.json());

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`App is running on PORT ${PORT}`);
});
