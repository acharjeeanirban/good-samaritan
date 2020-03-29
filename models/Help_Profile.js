const mongoose = require('mongoose');
//const HelpUser = require('../models/Help_User');
//const VolUserProfile = require('../models/Vol_Profile');

const HelpProfileSchema = new mongoose.Schema({

    bio: {
        type: String
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
        type: [String]
    },
    helped_by_volunteers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'VolUserProfile'
    },
    is_active: {
        type: Boolean
    }

});

module.exports = HelpUserProfile = mongoose.model('HelpUserProfile', HelpProfileSchema);