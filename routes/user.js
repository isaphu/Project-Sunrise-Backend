const express = require('express');
const router = express.Router();
const { getAllUsers,getUsersById,createNewUsers,editUsersById,deleteUsersById } = require('../controllers/user');
const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });

router.get('/', userController.getAllUsers);
router.get('/', userController.getUsersById);
router.post('/', userController.createNewUsers);
router.put('/', userController.editUsersById);
router.delete('/', userController.deleteUsersById);


module.exports = router;