const express = require('express');
const dotenv = require('dotenv');

const tourRouter = require('./routes/tourRoutes');

dotenv.config({ path: './config.env' });

const app = express();
app.use(express.json());

app.use('/api/v1/tours', tourRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`App is running on PORT ${PORT}`);
});
