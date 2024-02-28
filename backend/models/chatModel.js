const mongoose  = require('mongoose')

const chatSchema = new mongoose.Schema({
    chatName:{type:String, trim:true},
    groupChat:{default:false,type:Boolean},
    users:[{ref:'User', type:mongoose.Schema.Types.ObjectId}],
    latestMessage:[{type:mongoose.Schema.Types.ObjectId, ref:'message'}],
    groupAdmin:[{ref:'User', type:mongoose.Schema.Types.ObjectId}]
    
})

const Chat = mongoose.model('Chat', chatSchema)
module.exports = Chat
