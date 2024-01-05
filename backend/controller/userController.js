const User = require('../models/userModel')
const generateToken = require('../config/generateToken')
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
        picture,
       
    })
    if(user){
        res.status(201).json({ token:generateToken(user._id)})
    }
   
    else{
        res.status(400).json('User not created')

    }
    console.log(generateToken(user._id))
}


const  loginUser = async (req, res)=>{
    const {email , password} = req.body
    const user = await User.findOne({email})
    
    if(!user){
        throw Error('Email not found')
    }
    if(user.matchPassword(password)){
        console.log(user)
    }
    else{
        console.log('wrong password')
    }

}


module.exports =  {loginUser, registerUser}