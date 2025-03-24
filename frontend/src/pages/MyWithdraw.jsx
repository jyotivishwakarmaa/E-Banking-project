import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import URL from '../config'
import { Toaster,toast } from 'react-hot-toast'

const MyWithdraw = () => {

     const[withdraw,setWithdraw]=useState({Amount:''})
     const id=localStorage.getItem("userId")


     async function withdrwaAmount() {
         let api=`${URL}/withdraw`
try {
  await axios.post(api,{custID:id,Amount:withdraw,status:"debit",}).then((res)=>{
    console.log(res.data)
    toast.success('Successfully Withdrawl!')
 })
  console.log(withdraw)

} catch (error) {
  toast.error('insufficient fund!')
}
}
  return (
    <>
      <div className="curr">
        <h1 style={{ color: "#00569b" }}> Withdrawl</h1>
        <input
          type="number"
          value={withdraw}
          onChange={(e) => {
            setWithdraw(e.target.value);
          }}
        />
        <button onClick={withdrwaAmount}>Withdrawl</button>

        <Toaster />
      </div>
    </>
  );
}

export default MyWithdraw
