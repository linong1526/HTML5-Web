import React,{useEffect, useState} from 'react'
import axios from 'axios'
export default function App() {
  const [list,setList] = useState([])

  useEffect(()=>{ // 第二个参数没有写入依赖会一直请求数据，无法停止
    axios.get('./test.json').then(res=>{
      console.log(res.data)
      setList(res.data.data.films)
    },[])
  })
  useEffect(() => {
    // axios.get()
  }, [])

  return (
    <div>App
      {
        list.map(item=>
          <li key={item.filmId}>{item.name}</li>
          )
      }
    </div>
  )
}
