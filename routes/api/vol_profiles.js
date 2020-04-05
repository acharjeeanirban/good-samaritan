const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/auth');
const VolUserProfile = require('../../models/Vol_Profile');
const HelpeeUserProfile = require('../../models/Help_Profile');
const VolUser = require('../../models/Vol_User');

// @route GET /api/vol_profiles/me
// @desc    Get current vol's profile
// @access  Private
router.get('/me', auth, async (req, res) => {

    try {
        console.log("TADA bazinga 1, in vol register : id " + req.user.id);
        // const profile = await HelpUserProfile.findOne({user : req.user.id}).populate('HelpUser',
        // ['name']);

        const profile = await VolUserProfile.findOne({
            user: req.user.id
            //user: '5e800de72903633889fb3589'
        });

        // const profile_user = await VolUser.findOne({
        //     _id: req.user.id
        //     //user: '5e800de72903633889fb3589'
        // });

        console.log("TADA bazinga 2");
        console.log(profile);
        //console.log(profile_user);
        //res.json(profile.populate('HelpUser', ['name']));

        ///

        // profile.city = profile_user['city'];

        // console.log('TTTTT bazinga');
        // console.log(profile);
        // console.log('TTTTT bazinga');

        ///

        // TODO: [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
        // needs fix
        if (!profile) {
            console.log("TADA bazinga 2.5");
            //TODO: see what you want to return, related to above error
            //return res.status(400).json({msg: 'There is no profile for this user'});
            return res.status(400).send('BAZINGA');
        }

        //////////// BAZINGA

        let helpee_id = null;
        let helpee_profiles = [];
        let helpee_profile = null;
        /// get list of vols for helpee
        if (profile.helping_user && profile.helping_user.length > 0) {

            for(i = 0; i < profile.helping_user.length; i++) {
                let prof = profile.helping_user[i];
                helpee_id =  prof.helpee_id;
                console.log('***************************** ' + helpee_id);
                helpee_profile = await HelpeeUserProfile.findOne({
                    _id: helpee_id
                    //user: '5e800de72903633889fb3589'
                });
                console.log('***************************** bazinga' );
                console.log(helpee_profile);

                helpee_profiles.push(helpee_profile)
            }

        }

        console.log('*****************************');
        console.log(helpee_profile);
        console.log('*****************************');
        
        const combined = {
            vol_profile: profile,
            helpee_profiles: helpee_profiles
        };

        ///

        return res.json(combined);

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
    check('bio', 'bio is required').not().isEmpty(),
    check('country', 'Country is required').not().isEmpty(),
    check('province', 'province is required').not().isEmpty(),
    check('city', 'city is required').not().isEmpty(),
    check('zipcode', 'zipcode is required').not().isEmpty()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    

    const {
        bio,
        age,
        phone,
        country,
        province,
        city,
        zipcode
    } = req.body;

    const profileFields = {
        user: req.user.id,
        age,
        bio,
        phone,
        country,
        province,
        city,
        zipcode,
        is_active: true
    };

    try {

        let vol_user = await VolUser.findOne({_id: req.user.id});
        if (vol_user) {
            console.log('TTTTTT : bazinga ');
            console.log(vol_user);
            profileFields.name = vol_user.name;
            profileFields.email = vol_user.email;
            console.log(profileFields);
        }
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