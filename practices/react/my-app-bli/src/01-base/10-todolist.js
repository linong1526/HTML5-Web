import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
      this.state = {
      listdata:[
        {id:1,text:"1111"},
        {id:2,text:"2222"},
        {id:3,text:"3333"}
      ] 
      }
  }
  myref= React.createRef() // 返回一个ref对象
  render() {
    const list = this.state.listdata.map(item=><li key={item.id}>{item.text}</li>)
    return (
      <div>
        TodoList案例
        <hr></hr>
        <input ref={this.myref}></input>
        <button onClick={this.handleClick}>add</button> 
        <ul> {list}</ul>
      </div>
    )
  }
  handleClick=()=>{
    console.log("click",this.myref.current.value)
    // 不要直接修改 this.state的状态
    // this.state.datalist.push(this.myref.current.value)
    // this.setState({
    //   listdata:this.state.datalist
    // })
    // 我们应该这样写：
    const newlist = [...this.state.listdata] // 深拷贝一份数据
    // newlist.push(this.myref.current.value)
    newlist.push({
      id:Math.random()*100000000,
      text:this.myref.current.value
    })
    this.setState({
      listdata:newlist
    })
    console.log("listdata",this.state.listdata)
  }
}
