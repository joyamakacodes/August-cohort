import Button from "../components/Button";
import Navbar from "../components/Navbar";
function Home() {
  const boy = "Fuad";
  const car = "toyota";

  return (
    <>
    <Navbar/>
      <h1 style={{ color: "blue", border: "3px dashed red", padding: "10px" }}>
        {boy}
      </h1>
      <p>{car}</p>
      <Button name={boy} />
      <Button name={car} />
    </>
  );
}

export default Home;
