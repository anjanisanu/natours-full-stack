const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const connectDb = require('./db');

const app = require('./app');

connectDb();

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`App is running on PORT ${PORT}`);
});
