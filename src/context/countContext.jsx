/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const Counting= createContext()

export const CountProvider = ({children}) => {
    const [count,setCount]= useState(0)
    const [boy, setBoy]= useState('')
    const [firstName, setFirstName] = useState('')
  return (
  <Counting.Provider value={{
    count, setCount,
    boy, setBoy,
    firstName, setFirstName

  }}>
{children}
  </Counting.Provider>
  )
}

export const UseCounting = ()=> useContext(Counting)


