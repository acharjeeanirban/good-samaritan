const mongoose = require('mongoose');

const VolProfileSchema = new mongoose.Schema({

    bio: {
        type: String
    },
    age: {
        type: Number
    },
    phone: {
        type: String
    },
    helping_user: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'HelpUserProfile'
    },
    is_active: {
        type: Boolean
    }

});

module.exports = VolUserProfile = mongoose.model('VolUserProfile', VolProfileSchema);