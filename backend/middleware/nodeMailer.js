const nodemailer = require("nodemailer");

 const nodeMailer=async(dox,password,accNum)=>{


 
    
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use 'gmail' as the service/ true for port 465, false for other ports
      auth: {
        user: "vishwakarmajyoti65@gmail.com",
        //pass: "vzrf ylps cxkw xupc",
        pass: "iqfv lads rwtp emmg"
      },
    });
      
      // Set up email data
      const mailOptions = {
        from: '"vishwakarmajyoti65@gmail.com>', // Sender address
        to: dox, // dList of recipients
        subject: "Hello from Jyoti", // Subject line
        text: `Jyoti Vishwakarma `, // Plain text body
        html: `Your password is: ${password} and your Account number is;${accNum}`, // HTML body
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error occurred: ' + error.message);
        }
        console.log('Email sent: ' + info.response);
    });
      
}

module.exports=nodeMailer
