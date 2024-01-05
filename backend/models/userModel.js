const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    picture:{type:String, required:true, default:'https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_1280.png'}
},
{
    timestamps:true
}
)

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcryptjs.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function(next){
    if(!this.isModified){
        next()
    }
    const salt = await bcryptjs.genSalt(10)
    console.log(`this is salt :${salt}`)
    console.log(`this is password before :${this.password}`)
    this.password = await bcryptjs.hash(this.password , salt)
    console.log(`this is password after :${this.password}`)
    // this.password = hashedPassword
})
const User = mongoose.model('User', userSchema)
module.exports = User