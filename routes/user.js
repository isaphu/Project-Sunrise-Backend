const express = require('express');
const router = express.Router();
const { getAllUsers,getUsersById,createNewUsers,editUsersById,deleteUsersById } = require('../controllers/user');
const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });

router.get('/', auth, getAllUsers);
router.get('/', auth, getUsersById);
router.post('/', createNewUsers);
router.put('/', editUsersById);
router.delete('/', deleteUsersById);


module.exports = router;