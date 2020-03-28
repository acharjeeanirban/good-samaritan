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
    passoword: {
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
    zipcode: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

module.exports = VolUser = mongoose.model('VolUser', VolUserSchema);
