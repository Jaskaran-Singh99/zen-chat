const jwt = require('jsonwebtoken')
require('dotenv').config()

const secret = process.env.JWT_SECRET || 'Thisissecret'
const generateToken = (id)=>{
    return jwt.sign({id}, secret, {expiresIn:'30d'})
}

module.exports = generateToken