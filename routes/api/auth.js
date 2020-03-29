const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/auth');

const HelpUser = require('../../models/Help_User');

// @route GET api/Help_Users
// @desc Test route
router.get('/',auth, async (req, res) => {
    try {
        console.log("bazinga 1 : " + req.user.id);
        const user = await HelpUser.findById(req.user.id).select('-password');
        console.log("bazinga 2");
        console.log(user);
        res.json(user);
    } catch(err) {
        console.error(err.message);
        return res.status(500).json({msg: 'server error'});
    }
    
})

module.exports = router;