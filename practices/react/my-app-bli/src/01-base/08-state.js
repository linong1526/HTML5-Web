import React, { Component } from 'react'

export default class App extends Component {
  // state={
  //   mytext:"收藏",
  //   myShow:true
  // }
  // 还可以这样定义state
  constructor(){
    super()
    this.state={
      mytext:"收藏",
      myShow:true,
      myname:'Iekika'
    }
  }
  render() {
    return (
      <div>
        App
        <button onClick={()=>{
          // this.state.mytext = "取消" // 不可以直接修改 state状态
          // 需要这样修改 间接修改
          this.setState({
            mytext:"取消收藏",
            // setState 可以合并修改的状态
            myname:'kkkkk'
          })
        }}>{this.state.mytext}</button>
        {/* 项目中更推荐这种写法 */}
        <button onClick={()=>{
          this.setState({
            myShow:!this.state.myShow
          })
          // 需要对接接口时
          if(this.state.myShow){
            console.log('收藏的逻辑')
          }else{
            console.log("取消收藏的逻辑")
          }
        }}>{this.state.mytext ? "收藏": "取消收藏"}</button>
      </div>
    )
  }
}
