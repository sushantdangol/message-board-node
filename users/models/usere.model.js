const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },

    lastname: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },

    username: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 20
    },

    password: {
        type: String,
        minlength: 8,
        maxlength: 255
    }
},

{
    timestamp: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
