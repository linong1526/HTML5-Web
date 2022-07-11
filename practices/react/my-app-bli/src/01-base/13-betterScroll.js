import React, { Component } from 'react'
import BetterScroll from 'better-scroll'
export default class betterScroll extends Component {
  state={
    list:[]
  }
  render() {
    return (
      <div>
        {/* 13-betterScroll */}
        <button onClick={()=>this.getData()}>click</button>
        <div className="wrapper" style={{height:'200px',background:'yellow',overflow:'hidden'}}>
          <ul className='content'>
            {
              this.state.list.map(item=>
                <li key={item}>{item}</li>
              )
            }
          </ul>

        </div>
      </div>
    )
  }
  getData(){
    // 定义假数据，仅为演示
    const oplist=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    // this.setState({
    //   list:oplist
    // })
    // let wrapper = document.querySelector('.wrapper')
    // new BetterScroll(wrapper)
    // new BetterScroll('.wrapper')

    // this.setState({
    //   list:oplist
    // },()=>{
    //   console.log(this.state.list)
    //   console.log(document.querySelectorAll('.warpper'))
    //   new BetterScroll('.wrapper')
    // })

    setTimeout(()=>{
      // setState异步，需要设置同步DOM上数
      this.setState({
        list:oplist
      })
      new BetterScroll('.wrapper')
    })
  }
}
