const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:   {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required:true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }

});
