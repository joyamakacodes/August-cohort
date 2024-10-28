import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { CarouselData } from "../data/CarouselData";
const Contact = ()=>{
  const [carousel, setCarousel]= useState(0)
  useEffect(()=>{
const interval= setInterval(()=>{
  setCarousel(count=> (count+1) % CarouselData.length)

},2000)

return ()=> clearInterval(interval)
  },[])

  return (
    <>
    <Navbar/>
    <div>
      <img src={CarouselData[carousel].image} alt="carouselss" />
      <h1>{CarouselData[carousel].title}</h1>
      <p>{CarouselData[carousel].desc}</p>
    </div>
    <div>

      This is Contact Page
    </div>
    </>
  )
}

export default Contact;