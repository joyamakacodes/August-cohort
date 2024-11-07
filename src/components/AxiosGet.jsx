import { useState, useEffect } from "react";
import axios from "axios";
function AxiosGet() {
const [users, setUsers] = useState([])
const URL = 'https://jsonplaceholder.typicode.com/users'
const POSTURL = 'https://jsonplaceholder.typicode.com/comments'

useEffect(()=>{
  const axiosFetch = async()=>{
try{
  const response = await axios.get(URL)
setUsers(response.data)
}  catch(e){
console.log(e)
}  

// Post API

  }
  axiosFetch()
}, [])

// ..................................................
// post
const [name, setName] = useState('')
const [body, setBody] = useState('')
const [email, setEmail] = useState('')

const payload= {
  name: name,
  body: body,
  email: email,
}
const HandleSubmit = (e)=>{
  e.preventDefault()
  try{
    const response = axios.post(POSTURL, payload)
    console.log(response)
  }catch(e){
    console.log(e)
  }
  
  }

  const HandleEdit = (id)=>{
  
    try{
      const response = axios.patch(`https://jsonplaceholder.typicode.com/comments/${id}`, payload)
      console.log(response)
    }catch(e){
      console.log(e)
    }
    
    }
    const HandleDelete = (id)=>{
  
      try{
        const response = axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
        console.log(response)
      }catch(e){
        console.log(e)
      }
      
      }

  return (
    <div>
      AxiosGet
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
          <td>Edit</td>
          <td>Delete</td>

       </tr>
      </thead>
    <tbody>
      {users.map((user)=>(
        <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.phone}</td>
        <td>{user.address.street}</td>
        <td>{user.company.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td><button  className="text-red-200" onClick={HandleEdit(user.id)}>Edit</button></td>
        <td><button  className="text-blue-200" onClick={HandleDelete(user.id)}>Delete</button></td>


        </tr>
      ))}
      </tbody>
      </table>

      <form onSubmit={HandleSubmit} className="my-10">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
      <br/>
      <label htmlFor="comment">Comment</label>
      <input type="text" name="comment" value={body} onChange={(e)=> setBody(e.target.value)}/>
      <br/>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AxiosGet;
