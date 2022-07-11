import React, { Component } from 'react'

export default class App extends Component {
  render() {
    var myname = 'Iekaki'
    // 此样式写仅为演示，项目中不推荐这样使用
    var obj ={
      background:'red', // 需要加入引号
      backgroundColor:'green', // 单一属性需要 写成驼峰写法
      fontSize:'10px'
    }
    return (
      <div>
        {/* 模板语法 */}
        {10+20}
        {/* 变量 */}
        {10+20}- {myname}
        {/* 三目运算 ，加减乘除 ，字符串*/}
        {10>20?'aaa':'bbb'}
        {/* style={} 需要放入一个对象 */}
        <div style={{background:"red"}}>111111</div>
        <div style={obj}>111111</div>
        {/* 属性需要驼峰写法 css样式 需要引入外部css文件*/}
        {/* 另外 class ,for是react的关键字 不可以使用 
        <div class='active'>111111</div>
        <label for='username'>用户名:</label>
        */}
        <div className='active'>111111</div>
        <div id='active'>111111</div>
        <label htmlFor=''>用户名:</label>
        <label htmlFor='username'>用户名:</label>
          <input type="text" id='username'></input>
        
      </div>
    )
  }
}
