const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxLength: 50
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confPassword: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
    },
    phoneNo: {
        type: String,
    },
    country: {
        type: String,
    },
    address: {
        type: String,
    },
    // profilePic: {
    //     type: String,
    // },
    securityQue: {
        type: String,
    },
    securityAns: {
        type: String,
    },
    tnc: {
        type: Boolean,
        required: true,
    },
    registeredAt:
    {
        type:Date,
        require:true,
        default:Date.now()
    },
    updatedAt:
    {
        type:Date,
        require:true,
        default:Date.now()
    }
});

module.exports = mongoose.model("UserData", userSchema);
