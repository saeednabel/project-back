const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require("validator");
// create schema which we define the fields of the user document on it 
const userSchema = new mongoose.Schema({

    name: {
        type: String, 
        required: [true, 'Please provide name'],
        trim : true, 
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        unique: true, 
        lowercase: true,
        validate: [validator.isEmail, 'Please provide valid email']
    }, 
    role: {
        type: String,
        enum: ['user', 'doctor' , 'admin'], 
        default: 'user'    
    }, 
    photo: String,
    password: {
        type: String, 
        required: [true, 'Please Provide password'], 
        minLength: [8, 'Password should be at least 8 character'],
        trim: true, 
        select: false
    },
    confirmPassword: {
        type: String, 
        required: [true, 'Please confirm the password and be the same'], 
        minLength: [8, 'Password should be at least 8 character'],
        trim: true, 
        validate: {
            validator: function (value){
                return value === this.password
            }, 
            message: 'ConfirmPassword should be the same as password'
        }
    }
});


userSchema.pre('save', async function (next) {

    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);

    this.confirmPassword = undefined;
})

const User = mongoose.model('User', userSchema);

module.exports = User;

