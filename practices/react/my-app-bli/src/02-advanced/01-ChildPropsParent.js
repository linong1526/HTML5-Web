import React, { Component } from 'react'

class Navbar extends Component{
  render(){
    return <div style={{background:"red"}}>
      <button onClick={()=>{
        console.log("子通知符，让父的isShow 取反",this.props.event)
        this.props.event() // 调用父组件的函数
      }}>click</button>
      <span>navbar</span>
    </div>
  }
}
class Sidebar extends Component{
  render(){
      return <div style={{background:"yellow",width:"200px"}}> 
          <ul>
              <li>11111</li>
              <li>11111</li>
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
  }
}
export default class App extends Component {
  state={
    isShow:false
  }
  handleEvent=()=>{
    this.setState({
      isShow:!this.state.isShow
    })
    console.log("父组件定义的event事件")
  }
  render() {
    return (
      <div>
        {/* <Navbar event={()=>{
          // this.setState({
          //   isShow:!this.state.isShow
          // })
          console.llog("父组件定义的event事件")
        }}></Navbar> */}
        <Navbar event={this.handleEvent} />
        {this.state.isShow && <Sidebar></Sidebar>}
      </div>
    )
  }
}
/**
 * 父传子 ： 属性
 * 子传父 ：回调函数callback
 */