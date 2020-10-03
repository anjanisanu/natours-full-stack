const express = require('express');

const authController = require('./../controllers/authController');
const {
	getAllUsers,
	getUser,
	getMe,
	updateUser,
	updateMe,
	deleteMe,
	deleteUser
} = require('./../controllers/userController');

const router = express.Router();

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);
router.route('/forgotPassword').post(authController.forgotPassword);
router.route('/resetPassword/:token').patch(authController.resetPassword);

router.route('/updatePassword').patch(authController.protect, authController.updatePassword);
router.get('/me', authController.protect, getMe, getUser);
router.patch('/updateMe', authController.protect, updateMe);
router.delete('/deleteMe', authController.protect, deleteMe);

router.route('/').get(getAllUsers);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
