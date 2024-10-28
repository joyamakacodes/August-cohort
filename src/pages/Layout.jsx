/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar"
const Layout = ({children})=>{

  return(
<>
<Navbar/>
{children}
</>
  )
}
export default Layout