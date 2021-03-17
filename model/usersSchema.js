const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

const User = mongoose.model('users', userSchema);
module.exports = User;