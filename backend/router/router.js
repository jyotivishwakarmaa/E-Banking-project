const express=require('express')


const controller=require('../controller/controller')
const multer=require('multer')
const route=express.Router()

const storage=  multer.diskStorage({
    destination: (req,file, cb)=>{
        console.log(file)
     cb(null, 'upload/'); // Save files to uploads directory
    },      
    filename:(req, file, cb)=>{
     cb(null, Date.now()+"-"+file.originalname); // Keep original file name
    }  
})

const upload = multer({ storage: storage });
  


 route.post('/regis',upload.array('image',5),controller.submit)

 route.post('/login',controller.login)



 route.post('/update',controller.updatePassword)

 route.post('/auth',controller.auth)



module.exports=route