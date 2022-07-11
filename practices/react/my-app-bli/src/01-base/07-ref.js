import React, { Component } from 'react'

export default class App extends Component {
  myref= React.createRef() // 返回一个ref对象
  render() {
    return (
      <div>
        Ref的应用
        <input ref="mytext"></input>
        <input ref={this.myref}></input>
        <button onClick={()=>{
          // 获取Dom/组件 this.refs.xxx 即将被弃用 严格模式下会报错
          // console.log('click',this.refs.mytext,this.refs.mytext.value) // click <input /> 输入的内容

          // 使用 React.createRef()
          console.log("click",this.myref,this.myref.value) // this.myref----{current:input,[[Proptotype]]: Object} 
        }}>点击</button>
      </div>
    )
  }
}
