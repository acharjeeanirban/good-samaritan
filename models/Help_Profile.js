const mongoose = require('mongoose');
//const HelpUser = require('../models/Help_User');
//const VolUserProfile = require('../models/Vol_Profile');

const HelpProfileSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HelpUser'
    },
    bio: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    phone: {
        type: String
    },
    emergency_contact: {
        type: String
    },
    emergency_contact_num: {
        type: String
    },
    help_needed_with: {
        type: String
    },
    helped_by_volunteers: [{
        helper_id: {type: mongoose.Schema.Types.ObjectId, ref: 'VolUserProfile'},
        //status: {type: String, required: true}
        status: {type: String}
    }],
    is_active: {
        type: Boolean
    },
    notes: {
        type: String
    },
    current_status: {
        type: String
    }

});

module.exports = HelpUserProfile = mongoose.model('HelpUserProfile', HelpProfileSchema);