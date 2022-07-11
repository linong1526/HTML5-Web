import React, { Component } from 'react'

class Child extends Component{
  render(){
    return (
      <div>Child Component</div>
    )
  }
}

class Navbar extends Component {
  render(){
    return (
    <div>
      Navbar
      <Child></Child>
    </div>
    )
  }
}
function Swiper(){
  return <div>Swiper</div>
}
// const Tabbar =()=><div>Tabbar</div>
const Tabbar =()=>{
  return <div>Tabbar</div>
}

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 想要在 Navbar 里嵌套子组件， 需要 在Navbar组件放入一个子组件Child，在子组件里写内容 ，而不是在放在<Navbar>标签中*/}
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}
