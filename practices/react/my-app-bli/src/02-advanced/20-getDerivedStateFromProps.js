import React, { Component } from 'react'

export default class App extends Component {
  state={
    myname:"Iekika",
    myage:100
  }

  // componentWillMount 初始化 的替代 ,返回一个对象
  static getDerivedStateFromProps(nextProps,nextState){
    console.log('getDerivedStateFromProps',nextState)
    //str.substring(indexStart[, indexEnd]) 如果任一参数小于 0 或为 NaN，则被当作 0
    return {
      myname:nextState.myname.substring(0,1).toUpperCase()+nextState.myname.substring(1)
    }
  }

  render() {
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            myname:"xiaoming"
          })
        }}>click</button>
        app-{this.state.myname}-{this.state.myage}
      </div>
    )
  }
}
