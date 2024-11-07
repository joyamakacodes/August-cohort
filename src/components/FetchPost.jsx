import { useState } from "react";
function FetchPost() {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')


  const payload= {
    title: name,     //}payloads
    desc: comment,
  }
  
  const APIURL = 'https://jsonplaceholder.typicode.com/comments'

const HandleSubmit = (e)=>{
  e.preventDefault()
  fetch(APIURL, {
    method: 'POST',
    headers:  {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
     },
     body: JSON.stringify(payload) 
  })
}
  return (
    <div>
      FetchPost
      <form onSubmit={HandleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
      <br/>
      <label htmlFor="comment">Comment</label>
      <input type="text" name="comment" value={comment} onChange={(e)=> setComment(e.target.value)}/>
      
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FetchPost;
