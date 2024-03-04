const Chat = require('../models/chatModel')
const User = require('../models/userModel')
const Message = require('../models/messageModel')
const asyncHandler = require('express-async-handler')



const accessChat = asyncHandler(async (req, res) => {
    const { userId } = req.body;
  
    if (!userId) {
      console.log("UserId param not sent with request");
      return res.sendStatus(400);
    }

    var isChat = await Chat.find({
      isGroupChat: false,
      $and: [
        { users: { $elemMatch: { $eq: req.user._id } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    })
      .populate("users", "-password")
      .populate("latestMessage");
      
  
    isChat = await User.populate(isChat, {
      path: "latestMessage.sender",
      select: "name pic email",
    });
  
    if (isChat.length > 0) {
      res.send(isChat[0]);
    } else {
      var chatData = {
        chatName: "sender",
        isGroupChat: false,
        users: [req.user._id, userId],
      };
  
      try {
        const createdChat = await Chat.create(chatData);
        const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
          "users",
          "-password"
        );
        res.status(200).json(FullChat);
      } catch (error) {
        res.status(400);
        throw new Error(error.message);
      }
    }
    
  });


const fetchChats = asyncHandler(async (req, res)=>{
  try{
    Chat.find({users:{$eq:req.user._id}}).populate('users', '-password').
    populate('groupAdmin', '-password').populate('latestMessage').sort({updatedAt:-1}).then(async (results)=>{
      results = await User.populate(results, {
        path:'latestMessage.sender',
        select:'name pic email'
      })
      res.send(results)
    })
    // res.send(chat)
  }
  catch(err){
    res.send(err)
  }
})

const createGroupChat = asyncHandler(async (req, res)=>{
    try{
      if(!req.body.users || !req.body.name){
        return res.status(400).send({message:"Please Fill of the fields"})
      }

      var users = JSON.parse(req.body.users)
      console.log(users)

      if(users.length < 2){
        return res.status(400).send('Please provide more than 2 users')
      }

      users.push(req.user)

      const groupChat = await Chat.create({
        users:users,
        groupAdmin:req.user,
        groupChat:true,
        chatName:req.body.name
      })
      console.log(groupChat)

      const fullGroupChat = await Chat.findOne({_id:groupChat._id}).populate('users', '-password').populate('groupAdmin', '-password')

      res.status(200).json(fullGroupChat)

    }
    catch(err){
      console.log(err)
    }
  
})

module.exports = {fetchChats, createGroupChat, accessChat}
