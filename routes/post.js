const express = require('express');
const router = express.Router();
const { createPost, getAllPost, editPost, deletePost } = require('../controllers/post');
const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });

router.post('/', auth, createPost)
router.get('/', auth, getAllPost)
router.put('/', auth, editPost)
router.delete('/', auth, deletePost)


module.exports = router;