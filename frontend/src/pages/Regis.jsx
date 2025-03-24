import React, { useEffect, useState } from 'react'
import bank from '../imges/bank.jpg'
import URL from '../config'
import axios from 'axios'
import { Toaster,toast } from 'react-hot-toast'

import { message } from 'antd';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

const Regis = () => {
    
     const nav=useNavigate()
     const[inp,setInp]=useState({})
     const[img,setImg]=useState([])
      const [loading, setLoading] = useState(false);

      const handleInp=(e)=>{
         let name=e.target.name
         let value=e.target.value

         setInp(values=>({...values,[name]:value}))
      }

      const handleFile=(e)=>{
          let value=e.target.files
          setImg([...value,...img])
          console.log(img)

      }

      const validForm=()=>{
              
        const{name,dob,ssn,address,email,phone,deposit}=inp

       if(!name || !dob || !ssn || !address || !email || !phone || deposit){
          
       alert('please fill the detail')
          
           return false;
       }
    
         return true;
    }
      async function submitData() {
          setLoading(true); // Show loader
            const api=`${URL}/regis`

            try {
              const formData= new FormData()
              formData.append('name',inp.name)
              formData.append('dob',inp.dob)
              formData.append('ssn',inp.ssn)
              formData.append('address',inp.address)
              formData.append('email',inp.email)
              formData.append('phone',inp.phone)
  
              for(let i=0;i<img.length;i++){
                      
                  formData.append('image',img[i])
              }
              
              formData.append('accounttype',inp.accounttype)
              formData.append('deposit',inp.deposit)
  
              await axios.post(api,formData).then((res)=>{
                  console.log(res.data)
              })
               
               console.log(formData)
               message.success('Registration successfull')
               toast.custom((t) => (
                <div
                  className={`${
                    t.visible ? 'animate-enter' : 'animate-leave'
                  } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                  <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 pt-0.5">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          <h1> {inp.name}</h1>
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          <h4>Welcome to Union Bank</h4>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex border-l border-gray-200">
                    <button
                      onClick={() => toast.dismiss(t.id)}
                      className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ))
               nav('/login')
            } catch (error) {
               console.log('error')
            } finally {
              setLoading(false); // Hide loader
          }
          
            
         }
   
         // form data validation

         if(loading){
          return<Loader/>
        }

  return (
    <>  
    <div className='regis'>
      <div className='form'>
      <h1 >Register Your Self</h1>
      <label for="full-name">Full Name:</label>
  <input type="text" id="full-name" name="name" required  onChange={handleInp} /><br/><br/>

  <label for="dob">Date of Birth:</label>
  <input type="date" id="dob" name="dob" required   onChange={handleInp} /><br/><br/>

  <label for="ssn">Social Security Number:</label>
  <input type="text" id="ssn" name="ssn" required onChange={handleInp} /><br/><br/>

  <label for="address">Address:</label>
  <input type="text" id="address" name="address" required  onChange={handleInp}/><br/><br/>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required  onChange={handleInp}/><br/><br/>

  <label for="phone">Phone Number:</label>
  <input type="tel" id="phone" name="phone" required  onChange={handleInp}/><br/><br/>

  <label for="id-upload">Upload Identification (Passport, Driver's License, etc.):</label>
  <input type="file" id="id-upload" name="id-upload" required  onChange={handleFile}/><br/><br/>

  <label for="proof-of-address">Upload Proof of Address (Utility Bill, Bank Statement, etc.):</label>
  <input type="file" id="proof-of-address" name="poa" required  onChange={handleFile}/><br/><br/>

  <label for="account-type">Account Type:</label>
  <select id="account-type" name="accounttype" required  onChange={handleInp}>
    <option value="checking">Current</option>
    <option value="savings">Savings</option>
    <option value="business">Business</option>
  </select><br/><br/>

  <label for="deposit">Initial Deposit:</label>
  <input type="number" id="deposit" name="deposit" required  onChange={handleInp}/><br/><br></br>

  <label for="terms">
    <input type="checkbox" id="box" name="terms" required onChange={handleInp}/> <br />
    <p>I agree all the <span> Terms </span> and <span> Condition </span> </p>
  </label><br/><br/>
  <button onClick={submitData}>Submit</button>
    </div>

    


    </div>
 <Toaster/>
   
    </>

  )
}

export default Regis
