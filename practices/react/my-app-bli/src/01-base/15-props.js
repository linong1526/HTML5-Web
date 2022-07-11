import React, { Component } from 'react'
import Navbar from './src/Navbar'
export default class props extends Component {
  render() {
    var obj = {
      title:'列表',
      leftShow:false
    }
    return (
      <div>
        <div>
          <h2>首页</h2>
          {/* 
          leftShow 传入 props的是一个字符串
          <Navbar title="首页" leftShow="false"></Navbar> 
          */}
          <Navbar title="首页" leftShow={false}></Navbar>
        </div>
        <div>
          <h2>列表</h2>
          {/* <Navbar title="列表"></Navbar> */}
          <Navbar title={obj.title} leftShow={obj.leftShow}></Navbar>
          {/* 属性 可以展开来写 */}
          <Navbar {...obj}></Navbar>
        </div>
        <div>
          <h2>购物车</h2>
          <Navbar title="购物车"></Navbar>
        </div>
        
      </div>
    )
  }
}
