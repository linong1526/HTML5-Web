import React, { Component } from 'react'

export default class App extends Component {
  state ={
    myname:"Iekika"
  }
  // componentWillMount(){ // 16.2 版本已废弃
  //   console.log("第一次will mount",this.state.myname,document.getElementById("myname"))
  //   // 第一次上树前的最后一次修改状态机会
  //   this.setState({
  //     myname:"Iekikakakak"
  //   })
  //   // 初始化数据的作用
  // }
  UNSAFE_componentWillMount(){
    console.log("加上前缀才不会报错")
  }
  componentDidMount(){
    console.log("第一次 did mount",document.getElementById("myname"))
    // 数据请求
    // 订阅函数调用
    // setInterval
    // 基于创建完的dom 进行初始化
  }
  render() {
    console.log("render")
    return (
      <div>12-Lifecycle
        <span id="myname"></span>
      </div>
    )
  }
}
