const mongoose = require('mongoose')

const connectDb = ()=>{
    return mongoose.connect('mongodb+srv://jaskaranSingh:Jaskaran70870@cluster0.41sr1.mongodb.net')
}

module.exports = connectDb