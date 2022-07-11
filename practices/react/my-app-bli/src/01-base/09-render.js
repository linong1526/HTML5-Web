import React, { Component } from 'react'

export default class App extends Component {
  state={
    // list:["1111","2222","3333"]
    listdata:[
      {id:1,text:"1111"},
      {id:2,text:"2222"},
      {id:3,text:"3333"}
    ] 
  }
  render() {
    // const newlist = this.state.list.map(item=><li>{item}</li>)
    const newlist = this.state.list.map(item=><li key={item.id}>{item.text}</li>)
    return (
      <div>
        App渲染列表
        <ul>
          {/* 
          这种写法是错误的
          {
            this.state.list.map(item=>
              <li>{item}</li>
              )
          } */}
          {newlist}
          
        </ul>
      </div>
    )
  }
}
