import React, { Component } from 'react'
import './css/11.css'
import Film from './maizuocomponent/Film'
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center'
import Tabbar from './maizuocomponent/Tabbar'
import Navbar from './maizuocomponent/Navbar'

export default class App extends Component {
  state={
    current:1
  }
  which(){
    switch(this.state.current){
      case 0:
        return <Film></Film>
      case 1:
        return <Cinema></Cinema>
      case 2:
        return <Center></Center>
      default:
        return null
    }
  }
  render() {
    return (
      <div>
        <Navbar myevent={()=>{
          console.log("navbar-center",'告诉tabbar去切换到center组件,高亮？')
          this.setState({
            current:2
          })
        }}></Navbar>
        {
          this.which()
        }
        <Tabbar  myevent={(index)=>{
          console.log("父组件定义事件")
          this.setState({
            current:index
          })
        }}></Tabbar>
      </div>
    )
  }
}
