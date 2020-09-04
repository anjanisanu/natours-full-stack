const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = express();

app.get('/', (req, res) => {
	res.send('HOME PAGE');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`App is running on PORT ${PORT}`);
});
