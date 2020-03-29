const mongoose = require('mongoose');

const VolProfileSchema = new mongoose.Schema({

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

module.exports = VolUserProfile = mongoose.model('VolUserProfile', VolProfileSchema);