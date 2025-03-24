const mongoose=require('mongoose')

const bankSchema=new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    ssn:{
        type:String,
        required:true,
        unique:true
    
    },
    address:{
        type:String,
        required:true,
        unique:true

    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    phone:{
        type:String,
        required:true,
        unique:true

    },
    accounttype:{
        type:String,
        required:true
    },
    deposit:{
        type:String,
        required:true
    },
    image:{
        type:[String],
        required:true
    },
    password:{
        type:String,
        required:true
    },
    accountNumber:{
        type:String,
        required:true
    },
    InsertAt: {
        type: Date,
        default: Date.now // Automatically set the date to now when a new document is created
    }

      
})

module.exports=mongoose.model('banking',bankSchema)