import { Navdata } from "../data/NavData";
import { NavLink } from "react-router-dom";

const Navbar=()=>{
  return (
    <nav style={{display: 'flex', justifyContent: 'end' }}>
      {Navdata.map(({name,link}, index)=>(
        <NavLink key={index} to={link} style={{margin: '10px'}}>{name}</NavLink>
      ))}
    </nav>
  )
}
export default Navbar;