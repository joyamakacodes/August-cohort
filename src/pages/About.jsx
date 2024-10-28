import Layout from "./Layout";
import Input from "../components/Input";
import { useState } from "react";
const About = ()=>{
  const [television, setTelevision] = useState('')
  const [curtains, setCurtains] = useState('')
  const [sofa, setSofa] = useState('')
  const [portrait, setPortrait] = useState('')
  const [centerTable, setCenterTable] = useState('')
  const [sittingRoom, setSittingRoom]= useState({
    tv: '',
    curtain: '',
    Sofa: '',
    Portrait: '',
    Centre: '',

  })
  const HandleSubmit = (e)=>{
    e.preventDefault();
    setSittingRoom({
      ...sittingRoom,
      tv: television || ' ',
      curtain: curtains,
      Sofa: sofa,
      Portrait: portrait,
      Centre: centerTable
    })
  }
  return(
    <>
    <Layout>
    <p>About, This is about page</p>
    <p>About, This is about page</p>
    <form onSubmit={HandleSubmit}>
     <div className="flex flex-col md:flex-row  justify-center m-4 gap-4">
     <div>
     <label htmlFor="televsion">Television</label>
      <br />
      <Input inputType="text" inputValue={television} change={(e)=> setTelevision(e.target.value)} required/>
     </div>
      
    <div>
    <label htmlFor="portrait">Portrait</label>
      <br />
      <Input inputType="text" inputValue={portrait} change={(e)=> setPortrait(e.target.value)} required/>
    </div>
      <br />
     
     </div>
     <div className="flex flex-col md:flex-row  justify-center m-4 gap-4">
     <div>
     <label htmlFor="curtains">Curtain</label>
     <br />
      <Input inputType="text" inputValue={curtains} change={(e)=> setCurtains(e.target.value)} required/>
     </div>
      
    <div>
      <label htmlFor="sofa">Sofa</label>
      <br />
      <Input inputType="text" inputValue={sofa} change={(e)=> setSofa(e.target.value)} required/>
      <br />
    </div>
     
     </div>
     
     
      <label htmlFor="centreTable">Centre Table</label>
      <br />
      <Input inputType="text" inputValue={centerTable} change={(e)=> setCenterTable(e.target.value)} required/>
      <br />
      <button type="submit">Submit</button>
    </form>

  
    <div>
       <p>Television: {sittingRoom.tv}</p>
       <p>Curtain: {sittingRoom.curtain}</p>
       <p>Portrait: {sittingRoom.Portrait}</p>
       <p>centerTable: {sittingRoom.Centre}</p>
       <p>Sofa: {sittingRoom.Sofa}</p>
     </div>
   
    </Layout>
    </>
  )
}

export default About;