import React, { Component } from 'react'

export default class App extends Component {
  state={
    myname:"Iekika"
  }
  render() {
    console.log("render")
    return (
      <div>
        15 shouldComponentUpdate
        <button onClick={()=>{
          this.setState({
            myname:"cuihua"
          })
        }}>click</button>
        {this.state.myname}
      </div>
    )
  }
  // scu 快捷键 性能优化函数
  shouldComponentUpdate(nextProps, nextState) { 
    // return true; // 应该更新
    // return false; // 阻止更新
    // this.state 老的状态
    // nextState 新的状态
    if(JSON.stringify(this.state) !== JSON.stringify(nextState)){
      return true
    }
    return false
  }
  UNSAFE_componentWillUpdate(){
    console.log("UNSAFE_componentWillUpdate")
  }
  componentDidUpdate(){
    console.log("componentDidUpdate")
}
}
