const express = require('express');
const router = express.Router();
const passport = require('passport');
const { getVenue } = require('../controllers/4S_recommend');

router.get('/', get)


module.exports = router;