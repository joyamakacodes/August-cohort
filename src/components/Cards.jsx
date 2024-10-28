import { CarouselData } from "../data/CarouselData";
import { Link } from "react-router-dom";
import './cards.css'

const Cards = () => {
  return (
    <div className="container hover:bg-white">
      <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-4 " >
      {CarouselData.map(({id,image, title, desc})=>(
        <div key={id} style={{border: '2px solid gray', padding: '10px'}}>
         
          <img src={image} alt={title}className="h-3/4 md:h-[200px] w-full md:w-[300px]" />
          <h4>{title}</h4>
          <p >{desc.slice(0, 15)}  <Link to={`/cardDetails/${id}`} style={{color: 'gray'}}>Read more</Link></p>
        </div>
      ))}
      </div>
   
    </div>
  );
}

export default Cards;
