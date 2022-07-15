import React,{useState} from 'react'

export default function App() {
  const [count,setCount] = useState(0)
  var mycount = 0
  return (
    <div>App
      <button onClick={()=>{
        setCount(count+1)
        mycount++
      }}>add</button>
      count-{count}
      mycount-{mycount}
    </div>
  )
}
