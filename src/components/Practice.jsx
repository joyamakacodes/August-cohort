/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CarouselData } from "../data/CarouselData";
import { UseCounting } from "../context/countContext";
import { Link } from "react-router-dom";
function Practice() {
  const {count, boy} = UseCounting()
  return (
    <div>
      <h1>Practice</h1>
      <p>{count}</p>
      <p>{boy}</p>

      
      <Link to={'/services'}>Go to</Link>
    {/* {CarouselData.map((({id, title})=>{
      <div key={id} >{title}</div>
    }))} */}
    {CarouselData.map(({id, image, title})=>(
      <div key={id}>
        <h1>{title}</h1>d
        <img src={image}/>
      </div>
    ))}
    </div>
  );
}

export default Practice;
