exports.checkBody = (req, res, next) => {
	if (!req.body.name || !req.body.price)
		res.status(400).json({
			status: 'fail',
			message: 'Every tour must have a name & price'
		});

	next();
};

exports.getAllTours = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			tours: 'Get All tours'
		}
	});
};

exports.getTour = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			tours: 'Get a tour details'
		}
	});
};

exports.createTour = (req, res) => {
	res.status(201).json({
		status: 'success',
		data: {
			tours: 'Create a tour'
		}
	});
};

exports.updateTour = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			tours: 'Update a tour'
		}
	});
};

exports.deleteTour = (req, res) => {
	res.status(204).json({
		status: 'success',
		data: {
			tours: 'Delete Tour'
		}
	});
};
