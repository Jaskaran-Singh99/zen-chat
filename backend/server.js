const express = require('express')
const app = express()
const chats = require('./data/data')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDb = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
// const { notFound } = require('./middleware/errorHandler')


//Middelware
dotenv.config()

app.use(express.json())

app.use(cors())
app.use(express.json())


//Routes
app.get('/', (req, res)=>{
    res.json('The server is listening to port ' + PORT + "...")
})

app.use('/api/user', userRoutes)
// app.get('/api/user' ,userRoutes)

app.use('/api/chats', chatRoutes)


// app.get('/api/chats',(req, res)=>{
//     res.send(chats)
// })

app.get('/api/chat/:id',(req,res)=>{
    const singleChat = chats.find((i)=>i._id === req.params.id)
    console.log(singleChat)

})

const PORT = process.env.PORT  || 4001

const start = async ()=>{
    try{
        await connectDb()
        app.listen(PORT,()=>{
            console.log(`The server is listening to port ${PORT}...`)
    
        })
    }
    catch(err){
        console.log(err)
    }
}
start()
