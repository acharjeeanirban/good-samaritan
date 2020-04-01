const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/auth');
const VolUserProfile = require('../../models/Vol_Profile');

// @route GET /api/vol_profiles/me
// @desc    Get current vol's profile
// @access  Private
router.get('/me', auth, async (req, res) => {

    try {
        console.log("TADA bazinga 1, in vol register");
        // const profile = await HelpUserProfile.findOne({user : req.user.id}).populate('HelpUser',
        // ['name']);

        const profile = await VolUserProfile.findOne({
            user: req.user.id
            //user: '5e800de72903633889fb3589'
        });
        console.log("TADA bazinga 2");
        console.log(profile);
        //res.json(profile.populate('HelpUser', ['name']));

        // TODO: [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
        // needs fix
        if (!profile) {
            console.log("TADA bazinga 2.5");
            //TODO: see what you want to return, related to above error
            //return res.status(400).json({msg: 'There is no profile for this user'});
            return res.status(400).send('BAZINGA');
        }

        console.log("TADA bazinga 3");

        return res.json(profile);

    } catch(err) {
        console.log("TADA bazinga 4");
        console.error(err.message);
        res.status(500).send('Server error');
    }
    //res.send('help profiles route');
})

// @route POST /api/vol_profiles
// @desc    Post Vol profile
// @access  Public
router.post('/', [
    auth,
    check('bio', 'bio is required').not().isEmpty()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);

    const {
        bio,
        age,
        phone
    } = req.body;

    const profileFields = {
        user: req.user.id,
        age,
        bio,
        phone,
        is_active: true
    };

    try {
        let profile = await VolUserProfile.findOne({user: req.user.id});

        //update
        if (profile) {
            profile = await VolUserProfile.findOneAndUpdate(
                {user: req.user.id},
                {$set: profileFields},
                {new: true}
            );

            return res.json(profile);
        }

        //create
        profile = new VolUserProfile(profileFields);
        await profile.save();
        return res.json(profile);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});


module.exports = router;