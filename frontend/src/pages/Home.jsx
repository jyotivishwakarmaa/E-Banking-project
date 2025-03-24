import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axis from '../imges/front.jpg'
import img from '../imges/bg.jpg'
import pic1 from '../imges/pic1.jpg'
import pic2 from '../imges/pic2.jpg'
import pic3 from '../imges/pic3.jpg'
import pic4 from '../imges/pic4.jpg'
import pic5 from '../imges/pic5.jpg'
import pic6 from '../imges/pic6.jpg'
import URL from '../config'
import axios from 'axios'

const Home = () => {
       
         const nav=useNavigate()
           const auth=async()=>{
            let token=localStorage.getItem('token')

             if(token){
               let api=`${URL}/auth`

               await axios.post(api,null,{headers:{'x-token':token}}).then((res)=>{
                console.log(res.data)

                nav('/dash')
               })
             }
           }

           useEffect(()=>{
          auth()
           },[])
  return (
    <div className="myimg">
      <img src={axis} alt="" />
      <div className="cards">
        <div className="card">
          <img src={pic1} alt="" />
        </div>
        <div className="card">
          <img src={pic2} alt="" />
        </div>
        <div className="card">
          <img src={pic3} alt="" />
        </div>
        <div className="card">
          <img src={pic4} alt="" />
        </div>
        <div className="card">
          <img src={pic5} alt="" />
        </div>
        <div className="card">
          <img src={pic6} alt="" />
        </div>
      </div>

      <div id='bg'>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Home
