import React, { Component } from 'react'

export default class Syncawait extends Component {
  state={
    count:0
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleAdd1}>add1</button>
        <button onClick={this.handleAdd2}>ad2</button>
      </div>
    )
  }
  handleAdd1=()=>{
    // 1.
    // this.setState({
    //   count:this.state.count + 1
    // })
    //   count:this.state.count + 1
    // this.setState({
    //   count:this.state.count+1
    // })
    //  count:this.state.count + 1
    // this.setState({
    //   count:this.state.count+1
    // })
    //   count:this.state.count + 1

    // 3.
    this.setState({
      count:this.state.count + 1
    },()=>{
      console.log(this.state.count)
    })
    this.setState({
      count:this.state.count+1
    },()=>{
      console.log(this.state.count)
    })
    this.setState({
      count:this.state.count+1
    },()=>{
      console.log(this.state.count)
      // 状态和真实dom已经更新完了
    })
  }
  handleAdd2=()=>{
    // 2
    setTimeout(()=>{
      this.setState({
        count:this.state.count + 1
      })
      this.setState({
        count:this.state.count+1
      })
      this.setState({
        count:this.state.count+1
      })
    })
  }
}
/**
 * setState 合并状态
 * 1.setState 处在同步的逻辑中，异步更新状态，更新真实dom
 * 2.setState 处在异步的逻辑中，同步更新状态，更新真实dom
 * 
 * 3.setState 接收第二个参数，第二个参数是回调函数，状态和dm更新完后就会触发
 */