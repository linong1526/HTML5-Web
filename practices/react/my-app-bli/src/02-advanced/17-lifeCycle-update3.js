import React, { Component } from 'react'
class Child extends Component {
  state={
    title:''
  }
  render() {
    return (
      <div>Child-{this.state.title}</div>
    )
  }
  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps",nextProps)
    // 最先获得父组件传来的属性，可以利用属性进行ajax或逻辑处理
    // 把属性转化成孩子自己的转态
    this.setState({
      title:nextProps.text+"Iekika"
    })
  }
}


export default class App extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            text:"222222"
          })
        }}>click</button>
        <Child text={this.state.text}></Child>
      </div>
    )
  }
}
