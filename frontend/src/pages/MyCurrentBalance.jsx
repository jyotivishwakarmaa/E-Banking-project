import React, { useEffect, useState } from 'react'
import URL from '../config'
import axios from 'axios'
import { FaRupeeSign } from "react-icons/fa";


const MyCurrentBalance = () => {

    const[show,setShow]=useState([])

    const id=localStorage.getItem("userId")
     async function getAmount() {
         
    let api=`${URL}/totalAmnt/?id=${id}`

    await axios.get(api).then((res)=>{
         console.log(res.data)
         setShow(res.data)
    })
         
     }

    useEffect(()=>{
        getAmount()
    },[id]) 
      
    let depoAmount=0
    let withdrawAmount=0
    let total=0

    let res=show.map((e)=>{
          
          if(e.status=='credit'){
              depoAmount+=e.Amount
          }
          if(e.status=='debit'){
             withdrawAmount+=e.Amount
          }
    })
  
      total=depoAmount-withdrawAmount
      
    
  return (
    <>
    <div className='curr'>
      <h3>Avaliable Balance <h1 style={{color:'green'}}><FaRupeeSign />{total}</h1></h3>
    </div>
    </>
  )
}

export default MyCurrentBalance
