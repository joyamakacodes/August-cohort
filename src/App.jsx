import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CardDetails from "./pages/CardDetails";
import MaterialUI from "./pages/MaterialUI";
import Practice from "./components/Practice";
import RoutingTest from "./components/RoutingTest";
import { CountProvider } from "./context/countContext";
import ContextTest from "./components/ContextTest";
import ContextShow from "./pages/ContextShow";
import Fetch from "./components/Fetch";
import FetchPost from "./components/FetchPost";
import CountSuscribe from "./components/CountSuscribe";
import TodoSubscribe from "./components/TodoSubscribe";

function App() {
  return (
    <>

<CountProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cardDetails/:actual" element={<CardDetails />} />
          <Route path="/material" element={<MaterialUI />} />
          <Route path="#" element={<>Page not found</>} />
          <Route path="/p" element={<Practice/>}/> 
          <Route path="/context" element={<ContextTest/>}/> 
          <Route path="/show" element={<ContextShow/>}/> 
          <Route path="/test" element={<RoutingTest/>}/>
          <Route path="/fetch" element={<Fetch/>}/>
          <Route path="/fetchpost" element={<FetchPost/>}/>
          <Route path="/count" element={<CountSuscribe/>}/>
          <Route path="/todo" element={<TodoSubscribe/>}/>


        </Routes>
      </Router>
      </CountProvider> 

    </>
  );
}

export default App;
