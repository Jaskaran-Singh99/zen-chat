const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    picture:{type:String, required:true, default:'https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_1280.png'}
},
{
    timestamps:true
}
)

const User = mongoose.model('User', userSchema)
module.exports = User