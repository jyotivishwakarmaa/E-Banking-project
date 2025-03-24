import React, { useState } from 'react';
import URL from '../config';
import axios from 'axios';
import { Toaster,toast } from 'react-hot-toast'

const Resetpass = () => {
    const [newPassword, setNewPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const id = localStorage.getItem('userId');

    // const resetPass = async () => {
    //     let api = `${URL}/reset`;
    //     try {
    //         const res = await axios.post(api, { id: id });
    //         console.log(res.data.password);
    //         setCurrentPassword(res.data.password);
    //         toast.success('Password Fetched Successfully.', {
    //             style: {
    //               border: '1px solid #713200',
    //               padding: '16px',
    //               color: '#713200',
    //             },
    //             iconTheme: {
    //               primary: '#713200',
    //               secondary: '#FFFAEE',
    //             },
    //           });
    //     } catch (error) {
    //         console.error('Error fetching current password:', error);
    //         alert('Failed to fetch current password');
    //     }
    // };

    const updatePassword = async () => {
        let api = `${URL}/update`; // Ensure this is the correct endpoint for updating the password
        try {
            const response = await axios.post(api, { id: id,oldpassword:oldPassword, newpassword: newPassword });
            console.log(response.data);
            toast.success('Password Updated Successfully.', {
                style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: '#713200',
                },
                iconTheme: {
                  primary: '#713200',
                  secondary: '#FFFAEE',
                },
              });
        } catch (error) {
            console.error('Error updating password:', error);
            alert('Failed to update password');
        }
    };

    return (
        <>
        <div className='curr'>
            {/* <h1>Reset your password</h1>
            <button onClick={resetPass}>Fetch Current Password</button>
            
            <h4>{`Current password: ${currentPassword}`}</h4> */}
        
         
        <label>
                old Password:
                <input
                    type='password'
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                />
            </label>


            <label>
                New Password:
                <input
                    type='password'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </label>
            <button onClick={updatePassword} style={{padding: '25px'}}>Update Password</button>
             <Toaster/>
        </div>
        </>
    );
};

export default Resetpass;




// import React, { useState } from 'react'
// import URL from '../config'
// import axios from 'axios'
// import { FaEdit } from "react-icons/fa";


// const Resetpass = () => {

//     const[password,setPassword]=useState('')
   

//      let id=localStorage.getItem('userId')

//       const resetPass=async()=>{
//          let api=`${URL}/reset`
         
//          await axios.post(api,{id:id}).then((res)=>{
//             console.log(res.data.password)
//             setPassword(res.data.password)
//          })
//         alert('done')
//       }
     

    
       

//   return (
//     <div>
//       <h1>reset your password:{id}</h1>
//       <button onClick={resetPass}>Proceed</button>

     
       
//             {`password :${password}`}

//  New Password<input type='password' />           
       
       
       
//     </div>
//   )
// }

// export default Resetpass
