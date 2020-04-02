const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VolUserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        requred: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = VolUser = mongoose.model('VolUser', VolUserSchema);
