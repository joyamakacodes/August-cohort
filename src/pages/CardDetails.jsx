import { CarouselData } from "../data/CarouselData";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const CardDetails = () => {
  const {actual}= useParams()
const [details, setDetails] = useState({})
  useEffect(()=>{
    const Render= CarouselData.find((data)=> data.id === parseInt(actual) )

  if(Render){
    setDetails(Render)
  }
  }, [actual])

  return (
    <div>
      <img src={details.image} alt="products" />
      <h4>{details.title}</h4>
      <p>{details.desc}</p>
    </div>
  );
}

export default CardDetails;
