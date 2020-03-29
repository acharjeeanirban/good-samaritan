const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/auth');

const HelpUser = require('../../models/Help_User');
const HelpUserProfile = require('../../models/Help_Profile');

// @route GET api/help_profile/me
// @desc    Get current user's profile
// @access  Private
router.get('/me', auth, async (req, res) => {

    try {
        const profile = await HelpUserProfile.findOne({user : req.user.id}).populate('HelpUser',
        ['name']);

        if (!profile) {
            return res.status(400).json({msg: 'There is no profile for this user'});
        }

        res.json(profile);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
    res.send('help profiles route');
})

// @route POST api/help_profile/
// @desc    Post User profile
// @access  Public
router.post('/', [auth,
    check('bio', 'bio is required').not().isEmpty()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);

    
});


module.exports = router;