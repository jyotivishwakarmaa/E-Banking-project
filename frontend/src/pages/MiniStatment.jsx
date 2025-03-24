import React, { useState } from 'react'
import URL from '../config'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { CSVLink } from 'react-csv';  


const MiniStatment = () => {

     const[from,setFrom]=useState('')
     const[to,setTo]=useState('')
     const[show,setShow]=useState([])

    const id=localStorage.getItem("userId")
     async function srchData() {
         
        let api=`${URL}/mini`

        await axios.post(api,{custID:id,startDate:from,endDate:to}).then((res)=>{
            console.log(res.data)
            setShow(res.data)
        })

         console.log(from,to)
     }
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
  let sn=0
     let res=show.map((e)=>{
      sn++
         return(
          <>
          <tr key={e._id}>
            <td>{sn}</td>
            <td>{e.Amount}</td>
            <td> {e.status}</td>
            <td>{formatDate(e.createdAt)}</td>
          </tr>
          
         
          </>
         )
     })

     // Prepare data for CSV download
  const csvData = show.map((e, index) => ({
    sn: index + 1,
    Amount: e.Amount,
    Status: e.status,
    CreatedAt: formatDate(e.createdAt),
  }));
  const csvHeaders = [
    { label: 'SN.O', key: 'sn' },
    { label: 'Amount', key: 'Amount' },
    { label: 'Status', key: 'Status' },
    { label: 'Created At', key: 'CreatedAt' },
  ];
  return (
    <>
    <div className='mini'>
      <h4 style={{color:"#97144d"}}>MINI  STATEMENT</h4>

      <h4 style={{color:'#97144d'}}>From</h4><input type='date' value={from} onChange={(e)=>{setFrom(e.target.value)}} /> 
      <br />
      <h4 style={{color:'#97144d'}}>To</h4><input type='date'  value={to} onChange={(e)=>{setTo(e.target.value)}} /> 
      <br />

      <button onClick={srchData}>Search</button>

      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>SN.O</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
     
      <tbody>
      {res}
      </tbody>
    </Table>
     {/* Download CSV Button */}
     {show.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <CSVLink
              data={csvData}
              headers={csvHeaders}
              filename="mini_statement.csv"
              style={{
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Download CSV
            </CSVLink>
          </div>
        )}
     
    </div>
    </>
  )
}

export default MiniStatment
