const express = require('express');

const authController = require('./../controllers/authController');
const {
	getAllUsers,
	createUser,
	getUser,
	updateUser,
	updateMe,
	deleteUser
} = require('./../controllers/userController');

const router = express.Router();

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);
router.route('/forgotPassword').post(authController.forgotPassword);
router.route('/resetPassword/:token').patch(authController.resetPassword);

router.route('/updatePassword').patch(authController.protect, authController.updatePassword);
router.patch('/updateMe', authController.protect, updateMe);

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
