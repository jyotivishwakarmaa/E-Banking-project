import React from 'react'
import { Toaster,toast } from 'react-hot-toast'


const MyAccount = () => {
      
  toast('Welcome to Profile!',
    {
      icon:'🙏',
      style: {
        borderRadius: '10px',
        background: 'orange',
        color: '#fff',
      },
    }
  );
  
  
  return (
    <div className='back'>
      {/* <h1 className='my'>My Account details</h1> */}
      <div className='sidebar'>
        <div className='info'>
       <h3>Account Holder Name:</h3> <h4> {localStorage.getItem('userName')}</h4 >
       <h3>Email:</h3>   <h4>{localStorage.getItem('userEmail')}</h4>
       <h3>Phone:</h3>  <h4>{localStorage.getItem('userPhone')}</h4>
       <h3>AccNumber:</h3>   <h4>{localStorage.getItem('userAccnumber')}</h4>
       <h3>Address:</h3>   <h4>{localStorage.getItem('userAddress')}</h4> 
        </div>
          
      </div>
        <Toaster/>
    </div>
  )
}

export default MyAccount
