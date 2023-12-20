const express = require('express')
const app = express()
const chats = require('./data/data')
const dotenv = require('dotenv')

dotenv.config()
express.json()

app.get('/api/chat',(req, res)=>{
    res.send(chats)
})

app.get('/api/chat/:id',(req,res)=>{

    const singleChat = chats.find((i)=>i._id === req.params.id)
    console.log(singleChat)

})

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`The server is listening to port ${port}...`)
})