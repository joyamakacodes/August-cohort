import { useState, useEffect } from "react";

function Fetch() {
  const [data, setData] = useState([])
  const FETCHURL = 'https://jsonplaceholder.typicode.com/users'
  
  useEffect(()=>{
  try{
    fetch(FETCHURL)
  .then((res)=>res.json())
  .then((data)=>setData(data))
  }catch(e){
    console.log(e)
  }
  },[])



  

  return (
    <div>
    <table>
      <thead>
        <tr>
          <td>S/N</td>
          <td>Name</td>
          <td>Phone</td>
          <td>Address</td>
          <td>Company</td>
          <td>UserName</td>
          <td>Email</td>
       </tr>
      </thead>
    <tbody>
      {data.map((datum)=>(
        <tr key={datum.id}>
        <td>{datum.id}</td>
        <td>{datum.name}</td>
        <td>{datum.phone}</td>
        <td>{datum.address.street}</td>
        <td>{datum.company.name}</td>
        <td>{datum.username}</td>
        <td>{datum.email}</td>

        </tr>
      ))}
      </tbody>
      </table>

     
    </div>
  );
}

export default Fetch;
