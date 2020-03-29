const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HelpUserSchema = new Schema({
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
    }

});

module.exports = HelpUser = mongoose.model('HelpUser', HelpUserSchema);



