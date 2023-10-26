const User = require('../models/userModel');

const jwt = require('jsonwebtoken');

const catchAsync = require('../utils/catchAsync');

const signUp =  catchAsync(async(req, res, next)=>{

    
    console.log(req.body)
    // const {name, email, password, confirmPassword} = req.body;

    // const user = await User.create({
    //     name, email, password, confirmPassword
    // });


    // const token = jwt.sign({id: user._id});

    // res.status(200).json({

    //     status: success, 
    //     token, 
    //     data: {
    //         user
    //     }
    // })

    
});


module.exports = {signUp}