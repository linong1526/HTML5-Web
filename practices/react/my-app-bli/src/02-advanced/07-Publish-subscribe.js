import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>发布订阅 理解</div>
    )
  }
}
// 调度中心
var bus = {
  list:[],

  // 订阅
  subscribe(callback){
    this.list.push(callback)
  },

  // 发布
  publish(text){
    // 遍历所有的list，将回调函数执行
    // console.log(this.list)

    this.list.forEach(callback=>{
      callback && callback(text)
    })

  }

}

// 订阅者
bus.subscribe((value)=>{
  console.log("1111",value)
})

bus.subscribe((value)=>{
  console.log("22222",value)
})

// 发布者
setTimeout(()=>{
  bus.publish("我要买眼影")
},0)

setTimeout(()=>{
  bus.publish("我要买口红")
},1000)

setTimeout(()=>{
  bus.publish("我要买很多护肤霜")
})


