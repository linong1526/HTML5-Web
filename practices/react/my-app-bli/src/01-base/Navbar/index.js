import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Navbar extends Component {
  state={
    // 只能内部自己用的，外面无法改变
  }
  static propTypes={
    // title:'验证是不是字符串方法',
    // leftShow:'验证是不是Boolean'
    title:PropTypes.string,
    leftShow:PropTypes.bool
  }
  // 默认props
  static defaultProps={
    leftShow:true
  }
  // 属性是父组件传来的，this.props 使用
  render() {
    const {title,leftShow} = this.props
    return (
      <div>
        {leftShow && <button>返回</button>}
        Navbar-{title}
        <button>home</button>
        </div>
    )
  }
}

// 类属性
// Navbar.propTypes={
//   // title:'验证是不是字符串方法',
//   // leftShow:'验证是不是Boolean'
//   title:PropTypes.string,
//   leftShow:PropTypes.bool
// }

// 默认值
// Navbar.propTypes={
//   leftShow:true
// }

class Test{
  a = 1 // 对象属性
  static a = 100 // 类属性
}

// 可直接访问
// Test.a = 100
var obj = new Test()
console.log(Test.a,obj.a)
