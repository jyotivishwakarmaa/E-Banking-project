const mongoose=require('mongoose')

const depositSchema=new mongoose.Schema({

    custID:{
        type:String,
    },
    Amount: {
        type:Number,
    },
    status:{
        type:String
    },
    // balance: {
    //     type: Number,
    //     default: 0 // Initial balance can be set to 0 or any other value
    // }
},{timestamps:true})

module.exports=mongoose.model('deposit',depositSchema)
