const mongoose = require('mongoose');
const HelpUser = require('../models/Help_User');
const VolUserProfile = require('../models/Vol_Profile');

const HelpProfileSchema = new mongoose.Schema({

    user: {
        type: String,
        required: true
    }
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'VolUser'
    // }
    // ,
    // vol_profs: {
    //     type: [VolUser],
    //     ref: 'VolUser'
    // }

});

module.exports = HelpUserProfile = mongoose.model('HelpUserProfile', HelpProfileSchema);