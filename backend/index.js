const express=require('express')

const app=express()
const route=require('./router/router')
const depoRoute=require('./router/depositRouter')

require('dotenv').config()

const cors=require('cors')
const mongoose=require('mongoose')

const bodyParser=require('body-parser')

app.use(express.static('public'))

app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))
app.use('/upload', express.static('upload'))


mongoose.connect(process.env.MONGODB).then(()=>{
    console.log('DB CONNECTED SUCCESsFULLY')
})





app.use('/bank',route)
app.use('/bank',depoRoute)


const port=process.env.PORT || 8000
app.listen(port,()=>{
    console.log('server is Rocking on')
})