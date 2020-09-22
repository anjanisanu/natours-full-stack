const mongoose = require('mongoose');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

const connectDb = async () => {
	try {
		await mongoose.connect(DB, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('Database Connected');
	} catch (err) {
		console.log('Something went wrong while connecting to Database.');
		console.log(err.message);
	}
};

module.exports = connectDb;
