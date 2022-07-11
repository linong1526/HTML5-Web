import React, { Component } from 'react'

export default class App extends Component {
  a = 1000
  render() {
    return (
      <div>
        05-event
        <input />
        {/* on + 事件类型（注意要写驼峰） */}
        <button onClick={()=>{
          console.log('click1',this.a)
        }}>add1</button>
        <button onClick={this.handleClick2}>add3</button> 
        <button onClick={this.handleClick.bind(this)}>add-bind不推荐这种写法</button> 
        <button onClick={this.handleClick3}>add3</button> 
        <button onClick={this.handleClick3evt}>SyntheticBaseEvent</button> 
        <button onClick={()=>{
          this.handleClick4()
        }}>add4</button>     
        </div>
    )
  } 
  handleClick2(){
    console.log('click2',this) // click2  undefined
  }
  handleClick(){
    console.log('click2',this.a) // click2  100  绑定 App 的实例
  }
  
  handleClick3=()=>{
    console.log('click3',this.a) // click3  100 箭头函数箭头函数`的this指向指向上下文，所以永久能拿到当前组件实例的this指向
  }
  handleClick3evt=(evt)=>{
    console.log('handleClick3evt',evt,evt.target) // click3  SyntheticBaseEvent  <button>SyntheticBaseEvent</button>
  }
  handleClick4=()=>{
    console.log('click4',this.a) // click4 100 箭头函数，还可以传参
  }
}
/**
 * React 并不会真正的绑定是啊金每一个具体 <> 的元素上，而是采用事件代理的模式:
 */


  // this 的指向 复习
  var obj1 ={
    name:'obj1',
    getName(){
      console.log('obj1')
    }
  }
  var obj2 ={
    name:'obj1',
    getName(){
      console.log('obj1')
    }
  }
  obj1.getName() // obj1
  obj2.getName() // obj2
  obj1.getName.call(obj2) // obj2
  obj1.getName.apply(obj2) // obj2
  obj1.getName.bind(obj2) // 没有打印内容
  obj1.getName.bind(obj2)()  // 自动执行 obj2
