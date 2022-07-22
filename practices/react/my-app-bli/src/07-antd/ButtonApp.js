import React, { Component } from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
export default class App extends Component {
  render() {
    return (
      <div>
         <Button type="primary" onClick={()=>{
          console.log('click')
         }}>Primary Button</Button>
      </div>
    )
  }
}
