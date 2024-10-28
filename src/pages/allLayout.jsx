import Layout from "./Layout";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
const allLayout = () => {
  return (
    <Layout>
      <Home/>
      <Contact/>
      <About/>
      <Services/>
    </Layout>
  );
}

export default allLayout;
