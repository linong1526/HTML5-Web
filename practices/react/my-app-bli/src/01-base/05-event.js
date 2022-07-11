import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        05-event
        <input />
        {/* on + 事件类型（注意要写驼峰） */}
        <button onMouseEnter={()=>{
          console.log('onMouseEnter')
        }}>onMouseEnter</button>
        <button onMouseOver={()=>{
          console.log('onMouseEnter')
        }}>onMouseOver</button>

        {/* 无过多逻辑 推荐用法 */}
        <button onClick={()=>{
          console.log('click1')
        }}>add1</button>

        {/* 可以定义在外边  不要加() 画蛇添足 <button onClick={this.handleClick()}></button>*/}
        <button onClick={this.handleClick2}>dd2</button>
        <button onClick={this.handleClick3}>add3</button> 
        {/*组合  逻辑过多 推荐写法*/}
        <button onClick={()=>{
          this.handleClick4()
        }}>add4</button>     
        </div>
    )
  }
  handleClick2(){
    console.log('click2')
  }
  handleClick3=()=>{
    console.log('click3')
  }
  handleClick4=()=>{
    console.log('click3')
  }
}
