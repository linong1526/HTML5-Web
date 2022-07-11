import React, { Component } from 'react'
import './css/04.css'
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
    // const list = this.state.listdata.map(item=><li key={item.id}>{item.text}</li>)
    return (
      <div>
        TodoList案例
        <hr></hr>
        <input ref={this.myref}></input>
        <button onClick={this.handleClick}>add</button> 
        {/* <ul> {list}</ul> */}
        <ul>
          {
            this.state.listdata.map((item,index)=>
              <li key={item.id}>
                {/*item.text*/}
                {/*富文本展示  dangerouslySetInnerHTML={{__html:内容}}*/} 
                <span dangerouslySetInnerHTML={{__html:item.text}}></span>
                {/* <button onClick={this.handleDelClick.bind(this,index)}>del</button> */}
                <button onClick={()=>this.handleDelClick(index)}>del</button>
              </li>
              )
          }
        </ul>
        {/* {this.state.listdata.length===0?<div>暂无数据</div>:null}  */}
        {/* {this.state.listdata.length===0&&<div>暂无数据</div>}  */}
        <div className={this.state.listdata.length===0?'':'hidden'}>暂无数据</div>
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
    // 清空输入框
    this.myref.current.value = ""
  }
  handleDelClick(index){
    console.log('del')
    // 不要直接修改状态，会造成不可预期的后果
    const list = this.state.listdata.concat()
    list.splice(index,1)
    this.setState({
      listdata:list
    })

  }
}
