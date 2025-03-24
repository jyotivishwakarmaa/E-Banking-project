import React, { useEffect, useState } from 'react'
import axios from 'axios'
import URL from '../config'
import { Toaster,toast } from 'react-hot-toast'


const MyDeposit = () => {

   

   const[deposit,setDeposit]=useState({})
  const id=localStorage.getItem("userId")
    async function depositAmount(){
      
        let api=`${URL}/deposit`

        await axios.post(api,{custID:id,Amount:deposit,status:"credit",}).then((res)=>{
           console.log(res.data)
           toast.success('Successfully Deposit!')
           toast('Deposite Your Amount!',
            {
              icon:'✔',
              style: {
                borderRadius: '10px',
                background: 'green',
                color: '#fff',
              },
            }
          );
        })
         console.log(deposit)
    }
          
  return (
    <>
      <div className="img">
        <div className="curr">
          <h1 style={{ color: "#00569b" }}>MyDeposit</h1>
          <input
            type="number"
            value={deposit}
            onChange={(e) => {
              setDeposit(e.target.value);
            }}
          />
          <button onClick={depositAmount}>Deposit</button>
          <Toaster />
        </div>
      </div>
    </>
  );
}

export default MyDeposit
