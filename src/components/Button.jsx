/* eslint-disable react/prop-types */
import { useState } from "react"
const Button= ({children})=>{
  const [count, setCount]= useState(0)

  const handleClick=()=>{
    setCount(count+1)
    console.log(count)
  }
  return(
<>
<button style={{color: 'white', background: 'green'}}>{children} {count}
</button>
 <button onClick={handleClick}>Click Me</button>

</>
  
  
  )
}

export default Button;