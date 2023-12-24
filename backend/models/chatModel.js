const mongoose  = require('mongoose')

const chatSchema = new mongoose.Schema({
    chatName:{type:String, trim:true},
    groupChat:{default:false,type:Boolean},
    user:[{ref:'user', type:mongoose.Schema.Types.ObjectId}],
    latestMessage:[{type:mongoose.Schema.type.ObjectId, ref:'message'}],
    groupAdmin:[{ref:'user', type:mongoose.Schema.type.ObjectId}]
    
})

const Chat = mongoose.model('Chat', chatSchema)
module.exports = Chat
