import React, { useEffect, useState } from 'react'
import URL from '../config'
import axios from 'axios'
import { Toaster,toast } from 'react-hot-toast'

const MyStatement = () => {
 
    const[stat,setStat]=useState([])
     const [loading, setLoading] = useState(false);
     let id=localStorage.getItem("userId")
       const statment=async()=>{
        setLoading(true); 
       let api=`${URL}/stat`

       await axios.post(api,{id}).then((res)=>{
          console.log(res.data)
          setStat(res.data)
          toast.success('your all Transaction', {
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
         
       })
      
       }

       useEffect(()=>{
        statment()
       },[id])
      
     
    
       const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with leading zero
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const month = monthNames[date.getMonth()]; // Get month name
        const year = String(date.getFullYear()); // Get last two digits of the year
    
        return `${day}-${month}-${year}`; // Return formatted date
    };


    let ans= stat.map((e)=>{
        return(
            <tr>
                <td>{formatDate(e.createdAt)}</td>
              { e.status=="credit"? <td style={{color:"green"}} >+{e.Amount}</td>:<td style={{color:"red"}}>-{e.Amount}</td>}

            </tr>
        )
    })

  return (
    <div id='tbldata'>
      <h1>MY STATEMENT</h1>
      <table className='table'>
        <tr>
            <th>Date</th>
            <th>Amount</th>
        </tr>
        {ans} 
      </table>
   
<Toaster/>
    </div>
  )
}

export default MyStatement
