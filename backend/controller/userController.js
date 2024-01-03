const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const registerUser = async (req, res)=>{
    const {name, email, password , picture} = req.body
    if(!name || !email || !password){
        res.json('Please provide credentials')
    }

    const userExists = await User.findOne({email})
    if(userExists){
        res.json('The email already exists')
    }
    const user = await User.create({
        name,
        email,
        password,
        picture
    })
    if(user){
        res.status(201).json('USer created')
    }
    else{
        res.status(400).json('User not created')

    }

}


const  loginUser = (req, res)=>{
    res.json('logi nuser')
}


module.exports = registerUser, loginUser