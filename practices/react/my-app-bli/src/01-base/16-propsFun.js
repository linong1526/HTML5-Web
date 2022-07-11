import React, { Component } from 'react'
import Navbar from './src/Navbar'
import Sidebar from './src/Sidebar'
export default class propsFun extends Component {
  render() {
    return (
      <div>
        <div>
          {/* 类组件 */}
          <Navbar title="购物车"></Navbar>
          {/* 函数组件 */}
          <Sidebar bg="green" position="left"></Sidebar>
        </div>
      </div>
    )
  }
}
