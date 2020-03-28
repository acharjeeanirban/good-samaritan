const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const Help_User = require('../../models/Help_Profile');

// @route GET api/Help_Users
// @desc Test route
router.get('/', (req, res) => {
    res.send('help profiles route');
})

module.exports = router;