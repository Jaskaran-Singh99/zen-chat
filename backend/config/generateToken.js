const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()
const secret = process.env.JWT_SECRET
const generateToken = (id)=>{
    return jwt.sign({id}, secret, {expiresIn:'30d'})
}

module.exports = generateToken