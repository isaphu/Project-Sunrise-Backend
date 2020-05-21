const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

router.get('/', userController.getAllUsers);
router.get('/', userController.getUsersById);
router.post('/', userController.createNewUsers);
router.put('/', userController.editUsersById);
router.delete('/', userController.deleteUsersById);


module.exports = router;