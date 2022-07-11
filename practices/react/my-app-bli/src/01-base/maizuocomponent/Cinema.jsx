import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class Cinema extends Component {
  constructor(){
    super()
    this.state={
      cinemaList:[],
      backcinemaList:[]
    }

    // 1. 生命周期里请求数据--后面了解
    // 2.axios 第三方库 ，专门用于数据请求
    // axios.get("https://m.maizuo.com/gateway?cityId=440100&ticketFlag=1&k=6427887").then(res=>{
    //   console.log(res)
    // }).catch(err=>{
    //   console.log(err)
    // })

    axios({
      url:"https://m.maizuo.com/gateway?cityId=440100&ticketFlag=1&k=4475775",
      method:"get",
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16556881321698500651778049","bc":"440100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res=>{
      // 有两条数据主要是开了严格模式
      console.log(res.data)
      this.setState({
        // 关掉严格模式
        cinemaList:res.data.data.cinemas,
        backcinemaList:res.data.data.cinemas
      })
      new BetterScroll('.wrapper') // 需要在回调函数中使用，这里的与演示不一样，这里就是异步更新数据
    })
  
  }
  render() {
    return (
      <div>
        {/* Cinema列表 */}
        <input onInput={this.handleInput}></input>
          {/* {
            this.state.cinemaList.map(item=>
            <dl key={item.cinemaId}>
              <dt>{item.name}</dt>
              <dd>{item.address}</dd>
            </dl>
              )
            } */}

            {/* 加上better-scroll优化 */}
            <div className="wrapper" style={{height:'540px',background:'yellow',overflow:'hidden'}}>
              <div className='content'>
                {
                this.state.cinemaList.map(item=>
                <dl key={item.cinemaId}>
                  <dt>{item.name}</dt>
                  <dd>{item.address}</dd>
                </dl>
                  )
                }
              </div>        
            </div>
      </div>
    )
  }
  handleInput=(evt)=>{
    console.log('input',evt.target.value)
    const newlist = this.state.backcinemaList.filter(item=>item.name.toUpperCase().includes(evt.target.value.toUpperCase()) || item.address.toUpperCase().includes(evt.target.value))
    console.log(newlist)
    // cinemaList 每次都会被覆盖 所以需要哪一个备份数据操作
    this.setState({
      cinemaList:newlist
    })
    console.log(this.state.cinemaList) // 这里拿到的是异步的代码
  }
}
/**
 * filter
 */
// var arr =["aaa","abc","bcc"]
// var newArr = arr.filter(item=>item.includes("a"))
// console.log(newArr)
