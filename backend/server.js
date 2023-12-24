const express = require('express')
const app = express()
const chats = require('./data/data')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
express.json()
app.use(cors())


app.get('/api/chat',(req, res)=>{
    res.send(chats)
})

app.get('/api/chat/:id',(req,res)=>{

    const singleChat = chats.find((i)=>i._id === req.params.id)
    console.log(singleChat)

})

const PORT = process.env.PORT  || 4001
console.log(PORT)
app.listen(PORT,()=>{
    console.log(`The server is listening to port ${PORT}...`)
})