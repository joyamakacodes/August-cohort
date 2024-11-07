import { Link } from "react-router-dom";
import { UseCounting } from "../context/countContext";
function RoutingTest() {
  const {count, setCount, boy, setBoy} = UseCounting()
const handleIncrement = ()=>{
  setCount(count + 1)
}
  return (
    <div>
    <p>{count}</p>
    <button onClick={handleIncrement} className="bg-green-200 hover:bg-green-600 text-white">Increment</button>
    <Link to={'/p'}>click here</Link>
    <form>
    <label>Name</label>
      <input className="border border-green-900 rounded-lg" type="text" value={boy} onChange={(e)=> setBoy(e.target.value) }/>
      <Link to={'/p'}>go here</Link>

    </form>
    </div>
  );
}

export default RoutingTest;
