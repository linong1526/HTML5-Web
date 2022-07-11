// 函数式组件 rfc
import React from 'react'

export default function Sidebar(props) {
  // console.log(this)
  let { bg,position} = props
  var obj1 = {
    left:0
  }
  var obj2={
    right:0
  }
  var obj={
    background:bg,
    width:'200px',
    position:'fixed'
  }
  // 可以利用合并
  var styleobj = position === 'left' ? {...obj,...obj1} : {...obj,...obj2} 
  return (
    // <div style={{background:bg,width:'200px',position:position}}>
    <div style={styleobj}>
      <ul>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
      </ul>
    </div>
  )
}
