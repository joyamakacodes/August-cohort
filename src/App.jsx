import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CardDetails from "./pages/CardDetails";
import MaterialUI from "./pages/MaterialUI";
function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cardDetails/:actual" element={<CardDetails />} />
          <Route path="/material" element={<MaterialUI />} />
          <Route path="#" element={<>Page not found</>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
