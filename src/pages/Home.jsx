import Button from "../components/Button";
import Layout from "./Layout";
import { useState } from "react";
function Home() {

  const [boy, setBoy] = useState('Fuad')
  const [count, setCount]= useState(0)
  const [sittingroom, setSittingRoom]= useState({
    Television: '',
    Curtain: '',
    Sofa: '',
    Portrait: 0,
    centerTable: ''
  })
 
  const [showObject, setShowObject] = useState(false)
const [book, setBook]= useState(null)
const [Office, setOffice]= useState([])

  const car = "toyota";

 
  const HandleNull = ()=>{
    setBook(10)
  }
    const HandleChange= ()=>{
    setBoy('OluwaKorede')
  }
  const HandleCount= ()=>{
    setCount(count + 1)
  }
  const HandleObject = ()=>{
    setSittingRoom({
      ...sittingroom,
      Television: 'LG',
    Curtain: 'Brown',
    Sofa: 'White',
    Portrait: 7,
    centerTable: 'glass'
    })
    setShowObject(!showObject)
  }
  const   HandleArray = ()=>{
    setOffice(['Table', 'Chair', 'Laptop', 20, false])
  }
  return (
    <>
    <Layout>
      <h1 style={{ color: "blue", border: "3px dashed red", padding: "10px" }}>
        {boy}
      </h1>
      <p>{car}</p>
      <p>{count}</p>
      
      <button onClick={HandleChange}>Change</button>
      <button onClick={HandleCount}>Increment</button>

      <br />
      <h2>Sitting Room</h2>
     {showObject && (
       <div>
       <p>Television: {sittingroom.Television}</p>
       <p>Curtain: {sittingroom.Curtain}</p>
       <p>Portrait: {sittingroom.Portrait}</p>
       <p>centerTable: {sittingroom.centerTable}</p>
       <p>Sofa: {sittingroom.Sofa}</p>
     </div>
     )}
      <button onClick={HandleObject}>Click to see</button>
<br />
{book}
<button onClick={HandleNull}>Click to null</button>
<br />
     <Button>{boy}</Button>
      <Button>{car}</Button>
      <button onClick={HandleArray}>Get Array</button>

     <ul>
     {Office.map((item, index)=>(
        <li key={index}>
          <p>{item}</p>
          <p>{item.book}</p>
          <p>{item.bag}</p>

        </li>
      ))}
     </ul>
      </Layout>
    </>
  );
}

export default Home;
