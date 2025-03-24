import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import logo from '../imges/mylogo.png'
import { FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
 
const Top    = () => {
  return (
    <div>
      <nav className='nav1'>
        <h1><img src={logo} alt="" style={{width: '160px', marginTop:'7px'}}/></h1>
        <ul>
            <li> <Link to='home'><FaHome className='icon' /> Home</Link></li>
            <li><Link to='login'><FaUserCircle className='icon' /> Login</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Top
