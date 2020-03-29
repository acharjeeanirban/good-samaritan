const mongoose = require('mongoose');

const VolProfileSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VolUser'
    },
    bio: {
        type: String
    },
    age: {
        type: Number
    },
    phone: {
        type: String
    },
    helping_user: [{
        helpee_id: {type: mongoose.Schema.Types.ObjectId, ref: 'HelpUserProfile'},
        status: {type: String, required: true}
    }],
    is_active: {
        type: Boolean
    }

});

module.exports = VolUserProfile = mongoose.model('VolUserProfile', VolProfileSchema);