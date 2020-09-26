const express = require('express');
const {
	getAllTours,
	createTour,
	getTour,
	updateTour,
	deleteTour,
	aliasTopTours
} = require('./../controllers/tourController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.route('/top-3-tours').get(aliasTopTours, getAllTours);
router
	.route('/')
	.get(getAllTours)
	.post(authController.protect, authController.restrictTo('admin', 'lead-guide'), createTour);
router
	.route('/:id')
	.get(getTour)
	.patch(authController.protect, authController.restrictTo('admin', 'lead-guide'), updateTour)
	.delete(authController.protect, authController.restrictTo('admin'), deleteTour);

module.exports = router;
