
const depositModal=require('../modal/deposit')



const deposit=async(req,res)=>{
     
     const{custID,Amount,status}=req.body
     console.log(req.body)

    try {

         const user=new depositModal({
            custID,Amount,status
         })

         await user.save()
         res.status(200).send({
            success:true,
            message:'deposit success',
            user
         })
        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"error"
        })
    }
     
}
const withdraw = async (req, res) => {
    const { custID, Amount } = req.body; // Removed 'status' since it's not used in this context
    console.log(req.body);

    try {
        // Find the user by custID (assuming you have a User model)
        const user = await depositModal.findOne({ custID }); // Replace userModel with your actual user model
           console.log(user)
        // Check if user exists
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User  not found"
            });
        }
        if (user.balance <= 0) {
            return res.status(400).send({
                success: false,
                message: "Insufficient funds. Your balance is zero."
            });
        }

        // Check if the user's balance is sufficient
        if (user.balance < Amount) { // Assuming 'balance' is the field that stores the user's current balance
            return res.status(400).send({
                success: false,
                message: "Insufficient funds for withdrawal"
            });
        }

        // Proceed with the withdrawal
        const withdrawal = new depositModal({
            custID,
            Amount,
            status: 'debit' // You can set the status to 'withdrawal' or any other value you need
        });

        // Save the withdrawal record
        await withdrawal.save();

        // Update the user's balance
        user.balance -= Amount; // Deduct the withdrawal amount from the user's balance
        await user.save(); // Save the updated user

        res.status(200).send({
            success: true,
            message: 'Withdrawal successful',
            user
        });

    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send({
            success: false,
            message: "An error occurred"
        });
    }
};

// const withdraw=async(req,res)=>{
     
//     const{custID,Amount,status}=req.body
//     console.log(req.body)

//    try {

//         const user=new depositModal({
//            custID,Amount,status
//         })

//         await user.save()
//         res.status(200).send({
//            success:true,
//            message:'deposit success',
//            user
//         })
       
//    } catch (error) {
//        res.status(500).send({
//            success:false,
//            message:"error"
//        })
//    }
    
// }


const currentBalance=async(req,res)=>{
     

    const{id}=req.query
    console.log(req.query)
    
    const data = await depositModal.find({custID:id});

            // Format the date

     res.send(data)
}

 const stat=async(req,res)=>{
  
     const{id}=req.body
     console.log(req.body)
     const data=await depositModal.find({custID:id})
     res.send(data)
 }

 const mini=async(req,res)=>{
      
       const{id,startDate,endDate}=req.body
       console.log(req.body)
       try {
        // Convert the dates from strings to Date objects
        const start = new Date(startDate + 'T00:00:00Z');  // 2025-03-22T00:00:00Z
        const end = new Date(endDate + 'T23:59:59.999Z'); 
      

        console.log("Start date:", start);
        console.log("End date:", end);

        // Query to find deposits between the two dates
        const deposits = await depositModal.find({
            // custID:id,
            createdAt: {
                $gte: start, // Greater than or equal to start date
                $lt: end // Less than end date
            }
        });
     
        res.send(deposits); // Send the found deposits as the response
    } catch (error) {
        console.error('Error fetching deposits:', error);
        res.status(500).send({ message: 'Server error' });
    }
 }

 


module.exports={
   
    deposit,
    withdraw,
    currentBalance,
    stat,
    mini
}