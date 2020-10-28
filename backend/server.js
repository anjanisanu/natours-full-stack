const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

process.on('uncaughtException', (err) => {
	console.log(err.name, err.message);
	console.log('Uncaught Exception. Shutting Down');
	process.exit(1);
});

const connectDb = require('./db');
const app = require('./app');

connectDb();

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
	console.log(`App is running on PORT ${PORT}`);
});

process.on('unhandledRejection', (err) => {
	console.log(err.name, err.message);
	console.log('Unhandled Rejection. Shutting Down');
	server.close(() => {
		process.exit(1);
	});
});
