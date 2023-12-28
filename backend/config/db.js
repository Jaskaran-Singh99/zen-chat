const mongoose = require('mongoose')

const connectDb = ()=>{
    return mongoose.connect(process.env.MONGO_URI)
}

module.exports = connectDb