import React, { Component } from 'react'

export default class App extends Component {
  state={
    mytext:'11111'
  }
  render() {
    return (
      <div>App
        <button onClick={()=>{
          this.setState({
            mytext:"2222"
          })
        }}>click</button>
        {this.state.mytext}
      </div>
    )
  }
  // componentWillUpdate(){
  //   console.log('componentWillUpdate')
  // }
  componentDidUpdate(prevProps, prevState,value) { 
    console.log('componentDidUpdate',value)
  } 
  // 配合 componentDidUpdate使用 返回一个值
  getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate')
    return 100
  }
}
