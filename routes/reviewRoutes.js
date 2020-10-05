const express = require('express');
const authController = require('./../controllers/authController');
const reviewController = require('./../controllers/reviewController');

const router = express.Router({ mergeParams: true });

router.get('/', reviewController.getAllReviews);

router.use(authController.protect);

router.post('/', authController.restrictTo('user'), reviewController.setTourUserIds, reviewController.createReview);
router
	.route('/:id')
	.get(reviewController.getReview)
	.patch(authController.restrictTo('user', 'admin'), reviewController.updateReview)
	.delete(authController.restrictTo('user', 'admin'), reviewController.deleteReview);

module.exports = router;
