import React, { Component } from 'react'

// 一个简单的Antd 的Filed组件原理
class Filed extends Component{
  render(){
    return (
      // 受控组件
      <div style={{background:"yellow"}}>
        <lable>{this.props.label}</lable>
        <input type={this.props.type} onChange={(evt)=>{
          console.log(evt.target.value)
          // 调用父组件的方法
          this.props.onChangeEvent(evt.target.value)
        }} value={this.props.value}/>
      </div>
    )
  }
}
export default class App extends Component {
  state ={
    // localStorage.setItem('username','Iekika'),
    username:localStorage.getItem('username'),
    password:""
  }
  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <Filed label="用户名" type="text" onChangeEvent={(value)=>{
          this.setState({
            username:value
          })
        }} value={this.state.username}></Filed>
        <Filed label="密码" type="password"  onChangeEvent={(value)=>{
          this.setState({
            password:value
          })
        }} value={this.state.password}></Filed>
        <button onClick={()=>{
          console.log(this.state.username,this.state.password)
        }}>登录</button>
        <button onClick={()=>{
          this.setState({
            username:"",
            password:""
          })
        }}>取消保存</button>
      </div>
    )
  }
}
