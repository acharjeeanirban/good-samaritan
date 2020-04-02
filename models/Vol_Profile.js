const mongoose = require('mongoose');

const VolProfileSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VolUser'
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
    country: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    helping_user: [{
        helpee_id: {type: mongoose.Schema.Types.ObjectId, ref: 'HelpUserProfile'},
        status: {type: String}
    }],
    is_active: {
        type: Boolean
    }

});

module.exports = VolUserProfile = mongoose.model('VolUserProfile', VolProfileSchema);