import React,{useState} from 'react'

export default function App() {
  const [name,setName] = useState("Iekika")
  const [age,setAge] = useState(100)
  return (
    <div>
      <button onClick={()=>{
        setName("xiaoming")
        setAge(18)
      }}>click</button>
      <span>app-{name}-{age}</span>
    </div>
  )
}

