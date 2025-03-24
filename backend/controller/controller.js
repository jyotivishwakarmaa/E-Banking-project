const bankModal=require('../modal/modal')
const randomPassword=require('../utils/password')
const Email=require('../middleware/nodeMailer')
const accNumber=require('../utils/accountNumber')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const submit=async(req,res)=>{

    const imageUrls = req.files.map(file => file.path);
    console.log(imageUrls)
    
     const accNum=accNumber()
     console.log(accNum)
     req.body.accNum

    const password=randomPassword()
    console.log(password)
    req.body.password
 
 const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);

    const emailSend=Email(req.body.email,password,accNum)
    console.log(emailSend)
 

  const{ name,dob,ssn,address,email,phone,accounttype,deposit}=req.body
  console.log(req.body)

try {
    const data=await bankModal.create({

        name,
        dob,
        ssn,
        address,
        email,
        phone,
        accounttype,
        deposit,
        image:imageUrls,
        password:hash,
        accountNumber:accNum,
       
       })
        res.send('okk')
} catch (error) {
     res.send('error')
}
  
}

const login=async(req,res)=>{
     const{email,password}=req.body

     try {
        const bankUser=await bankModal.findOne({email:email});
 
        if(!bankUser){
           res.send('email is invalid')
        }
         const match = await bcrypt.compare(password, bankUser.password);

        if(!match){
          res.send('password is invalid')
        }

         const token= await jwt.sign({id:bankModal._id},process.env.JWT_KEY,{expiresIn:'7days'})

        console.log(token)
       
        res.send({
            token: token,
            user: bankUser 
        });
        

     } catch (error) {
        console.log('error in login')
     }
    
    
}



const updatePassword = async (req, res) => {
   const { id,   oldpassword, newpassword } = req.body;

   console.log(req.body)
   try {
    const user = await bankModal.findById(id);

    if (!user) {
        return res.status(404).send({
            success: false,
            message: "User  not found"
        });
    }
    const match = await bcrypt.compare(oldpassword, user.password);

    if (!match) {
        return res.status(401).send({
            success: false,
            message: "Old password is incorrect"
        });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newpassword , salt);

     user.password=hash

     await user.save()

     res.send({
        success: true,
        message: "Password updated successfully",
        user: {
            id: user._id,
            // You can include other user details if needed, but avoid sending the password
        }
    });

   } catch (error) {
     console.log(error)
     res.status(500).send({
         success:false,
            message:"something went wrong"
     })
   }
   
}

const auth=async(req,res)=>{

    const token=req.header('x-token')
    console.log(token)

    const verify= await jwt.verify(token, process.env.JWT_KEY);
    console.log(verify);
    const User= await  bankModal.findById(verify.id).select("-password");
    
    res.send(User);
}


module.exports={
    submit,
    login,
   
    updatePassword,
    auth
   
    
}