require('dotenv').config()
const express = require('express')
const cors =require('cors')
const router =require('./Routes/routes')
require('./DB/connection')

const pfServer = express()

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))

const PORT = 3000

pfServer.listen(PORT,()=>{
    console.log(`project fair started running at port: ${PORT}`);
})
pfServer.get('/',(req,res)=>{
   res.status(200).send(`<h3>waiting for client request</h3>`)
})