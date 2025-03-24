import React, { useState } from 'react'
import { GrCircleInformation } from "react-icons/gr";
import img from '../imges/loginpg.jpg'
import { Link } from 'react-router-dom';
import URL from '../config';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { Toaster,toast } from 'react-hot-toast'
import Loader from './Loader';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Login = () => {
 
  const nav=useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

       const[email,setemail]=useState('')
       const[password,setPassword]=useState('')
       const [loading, setLoading] = useState(false);

       const logIn=async()=>{
        setLoading(true); // Show loader
           let api=`${URL}/login`
    try {
      await axios.post(api,{email:email,password:password}).then((res)=>{
        console.log(res.data)
    

      
        if(res.data.user && res.data.user._id){
          localStorage.setItem("userId",res.data.user._id)
          localStorage.setItem("userName",res.data.user.name)
          localStorage.setItem("userPhone",res.data.user.phone)
          localStorage.setItem("userEmail",res.data.user.email)
          localStorage.setItem("userAddress",res.data.user.address)
          localStorage.setItem("userAccnumber",res.data.user.accountNumber)
          localStorage.setItem('token',res.data.token)
          toast.success('Successfully Login!')
         nav('/home')
       
        }else{
          toast.error('Email or Password is incorrect')
        }
    
    })
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Hide loader
  }

  }
  if (loading) {
    return <Loader />;
}

 function showPassw(){
     setShow(!show)
 }
         
  return (
    <>
      <div className='loginpage'>
       <div className='login'>
        
        <h1>Login using</h1>

         <div className='form'>
            <label htmlFor="">Login ID / Customer ID <GrCircleInformation /> <br />
            <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            <p> <span onClick={handleShow}>Forgot customer ID</span></p>

            </label> <br />
           

            <label htmlFor="">Password  <br />
            <input type={show?'text':'password'} value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <p> <span onClick={handleShow}> Forgot password</span></p>
            <button onClick={showPassw} className='psw' > {show?<FaEye/>:<FaEyeSlash />
            }</button>
            </label>
           

            <button onClick={logIn}>Log in</button><br />
            <p>First time user <Link to='regis'> <span id='regis'>REGISTER HERE </span> </Link></p>
           
         </div>
         
       </div>
       <div className='img'><img src={img} style={{width:'550px',height:'450px', marginTop: '40px'}} /></div>
      </div>

    

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Welcome to Axis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Enter Your Mobile Number:<input type='number'/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Send OTP
          </Button>
        </Modal.Footer>
      </Modal> */}
   
<Toaster/>
    </>
  )
}

export default Login
