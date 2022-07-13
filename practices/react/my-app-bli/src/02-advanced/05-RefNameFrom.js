import React, { Component } from 'react'

// 一个简单的Antd 的Filed组件原理
class Filed extends Component{
  state={
    value:""
  }
  clear(){
    this.setState({
      value:""
    })
  }
  setVlaue(val){
    this.setState({
      value:val
    })
  }
  render(){
    return (
      // 受控组件
      <div style={{background:"yellow"}}>
        <lable>{this.props.label}</lable>
        <input type={this.props.type} onChange={(evt)=>{
          this.setState({
            value:evt.target.value
          })
        }} value={this.state.value}/>
      </div>
    )
  }
}
export default class App extends Component {
  username = React.createRef()
  password = React.createRef() 
  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <Filed label="用户名" type="text" ref={this.username}></Filed>
        <Filed label="密码" type="password" ref={this.password}></Filed>
        <button onClick={()=>{
          console.log('拿到当前DOM/组件实例',this.username.current)
            console.log(this.username.current.state.value,this.password.current.state.value)
        }}>登录</button>
        <button onClick={()=>{
          this.username.current.clear()
          this.password.current.clear()
        }}>取消保存</button>
      </div>
    )
  }
}
