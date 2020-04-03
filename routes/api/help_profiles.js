const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/auth');

const HelpUser = require('../../models/Help_User');
const HelpUserProfile = require('../../models/Help_Profile');
const VolUserProfile = require('../../models/Vol_Profile');

// @route GET /api/help_profiles/me
// @desc    Get current user's profile
// @access  Private
router.get('/me', auth, async (req, res) => {

    try {
        console.log("TADA bazinga 1");
        // const profile = await HelpUserProfile.findOne({user : req.user.id}).populate('HelpUser',
        // ['name']);

        const profile = await HelpUserProfile.findOne({
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
});

// @route GET /api/help_profiles/me
// @desc    Get current user's profile
// @access  Private
router.get('/list', auth, async (req, res) => {

    try {
        console.log("TADA list  bazinga 1");
        // const profile = await HelpUserProfile.findOne({user : req.user.id}).populate('HelpUser',
        // ['name']);

        const vol_profile = await VolUserProfile.findOne({
            user: req.user.id
            //user: '5e800de72903633889fb3589'
        });

        console.log('cityyyyyyy : banzing : ' + vol_profile.city);

        const user_profiles = await HelpUserProfile.find({
            city: vol_profile.city,
            current_status: 'NOT_ASSIGNED'
            //user: '5e800de72903633889fb3589'
        });
        
        console.log("TADA list  bazinga 2");
        console.log(vol_profile);
        console.log(user_profiles);
        //res.json(profile.populate('HelpUser', ['name']));

        // TODO: [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
        // needs fix
        if (!vol_profile) {
            console.log("TADA list  bazinga 2.5");
            //TODO: see what you want to return, related to above error
            //return res.status(400).json({msg: 'There is no profile for this user'});
            return res.status(400).send('BAZINGA');
        }

        const combined = {
            vol_profile: vol_profile,
            user_profiles: user_profiles
        };

        console.log("TADA list bazinga 3");
        console.log(combined);

        return res.json(combined);

    } catch(err) {
        console.log("TADA bazinga 4");
        console.error(err.message);
        res.status(500).send('Server error');
    }
    //res.send('help profiles route');
});

// @route POST /api/help_profiles
// @desc    Post User profile
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

    console.log(req.body);

    const {
        bio,
        age,
        phone,
        country,
        province,
        city,
        zipcode,
        emergency_contact,
        emergency_contact_num,
        help_needed_with
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
        emergency_contact,
        emergency_contact_num,
        help_needed_with,
        is_active: true,
        current_status: 'NOT_ASSIGNED'

    };

    try {
        let profile = await HelpUserProfile.findOne({user: req.user.id});

        let help_user = await HelpUser.findOne({_id: req.user.id});
        if (help_user) {
            console.log('TTTTTT : bazinga ');
            console.log(help_user);
            profileFields.name = help_user.name;
            profileFields.email = help_user.email;
            console.log(profileFields);
        }

        //update
        if (profile) {
            profile = await HelpUserProfile.findOneAndUpdate(
                {user: req.user.id},
                {$set: profileFields},
                {new: true}
            );

            return res.json(profile);
        }

        //create
        profile = new HelpUserProfile(profileFields);
        await profile.save();
        return res.json(profile);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

// @route GET /api/help_profiles/list/:help_id
// @desc    Get current user's profile
// @access  Private
router.get('/list/:helpee_id', auth, async (req, res) => {

    try {
        
        console.log("TADA list/:help_id  bazinga 1 : " + req.params.helpee_id);
        // const profile = await HelpUserProfile.findOne({user : req.user.id}).populate('HelpUser',
        // ['name']);

        // update the Vol_profile table with the accepted helpees
        let vol_profile = await VolUserProfile.findOne({
            user: req.user.id
            //user: '5e800de72903633889fb3589'
        });

        const helpee = {
            helpee_id: req.params.helpee_id,
            status: 'ASSIGNED'
        };
        if (vol_profile.helping_user) {
            vol_profile.helping_user.push(helpee);
        } else {
            vol_profile.helping_user = [];
            vol_profile.helping_user.push(helpee);
        }

        console.log(vol_profile);

        //update
        //update
        if (vol_profile) {
            vol_profile = await VolUserProfile.findOneAndUpdate(
                {user: req.user.id},
                {$set: vol_profile},
                {new: true}
            );
        }

        /////////////

        //// update the Help_profiles table with the accepted vols

        let helpee_profile = await HelpUserProfile.findOne({
            _id: req.params.helpee_id
        });

        console.log('BAZINGA Q1');

        const volunteered_by = {
            helper_id: vol_profile._id,
            status: 'ASSIGNED'
        };

        console.log('BAZINGA Q2');

        helpee_profile.current_status = 'ASSIGNED';

        if (helpee_profile.helped_by_volunteers) {
            helpee_profile.helped_by_volunteers.push(volunteered_by);
        } else {
            helpee_profile.helped_by_volunteers = [];
            helpee_profile.helped_by_volunteers.push(volunteered_by);
        }

        console.log(helpee_profile);

        if (helpee_profile) {
            helpee_profile = await HelpUserProfile.findOneAndUpdate(
                {_id: req.params.helpee_id},
                {$set: helpee_profile},
                {new: true}
            );
        }

        // combine and send back

        const combined = {
            vol_profiles: vol_profile,
            user_profiles: helpee_profile
        };

        console.log("TADA list bazinga 3, in accept");
        console.log(combined);

        return res.json(combined);

    } catch(err) {
        console.log("TADA bazinga 4, error in accept");
        console.error(err.message);
        res.status(500).send('Server error');
    }
    //res.send('help profiles route');
});

module.exports = router;