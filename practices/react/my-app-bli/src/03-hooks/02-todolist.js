import React,{useState} from 'react'

export default function App() {
  const [text,setText] = useState("")
  const [list,setList] = useState(["aaa","bbb","ccc"])

  const handleChange=(evt)=>{
    console.log('handleChange',evt.target.value)
    setText(evt.target.value)

  }
  const handleAdd=()=>{
    console.log(text)
    setList([...list,text])
    setText("") // 清空输入框没有效果 原因：input的value没有添加上
  }
  const handleDel=(index)=>{
    console.log(index)
    var newList=[...list]
    newList.splice(index,1)
    setList(newList)
  }
  return (
    <div>
      <input onChange={handleChange} value={text}></input>
      <button onClick={handleAdd}>add</button>
      <ul>
        {
          list.map((item,index)=>
            <li key={item}>
              {item}
              <button onClick={()=>handleDel(index)}>del</button>
            </li>
          )
        }
        {!list.length && <div>暂无待办事项</div>}
      </ul>
    </div>
  )
}
