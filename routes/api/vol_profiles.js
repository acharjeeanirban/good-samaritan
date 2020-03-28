const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const Vol_Profile = require('../../models/Vol_Profile');

// @route GET api/Help_Users
// @desc Test route
router.get('/', (req, res) => {
    res.send('vol profile route');
})

module.exports = router;