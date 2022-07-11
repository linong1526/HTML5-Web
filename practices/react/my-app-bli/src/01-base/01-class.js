// // ES6写法
// class Test{
//   constructor(){
//     this.a = 1
//   }
//   testa(){
//     console.log("testa")
//   } 
// }
// class ChildTest extends Test{
//   testb(){
//     console.log("testb")
//   }
// }
// // var obj = new Test()
// // obj.testa() // 执行方法 输出testa
// // console.log(obj.a) // 打印属性  1

// var obj = new ChildTest()
// obj.testa() // 执行方法 输出 testa
// console.log(obj.a) // 输出 1


// ES7 
// import React from 'react';
// class App extends React.Component{
//   render(){
//     return (
//       <div>1111</div>
//     )
//   }
// } 

// import React, { Component } from 'react'
// class App extends Component{
// render(){
//   // renturn () 用括号括起来，表示式回车下的属于一部分的内容
//   return (
//     <div></div>
//   )
// }
// } 
// export default App


// 快捷键 crr 
// 复用组件
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>01-class</div>
    )
  }
}
