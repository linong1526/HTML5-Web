import React, { useState,useEffect } from 'react'

export default function App() {
  const [name,setName] = useState("Iekika")
  useEffect(()=>{
    setName(name.substring(0,1).toUpperCase()+name.substring(1))
  },[name])
  return (
    <div>App-{name}
    <button onClick={()=>{
      setName("xioaming1")
    }}>click</button>
    </div>
    
  )
}
