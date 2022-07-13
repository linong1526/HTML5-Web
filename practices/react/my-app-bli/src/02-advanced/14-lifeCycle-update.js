import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class App extends Component {
  state={
    myname:"ruhua",
    list:[]
  }
  componentDidMount(){
    axios.get('/test.json').then(res=>{
      console.log(res.data.data.films)
      this.setState({
        list:res.data.data.films
      })
    })
  }
  render() {
    console.log("render")
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            myname:"cuihua"
          })
        }}>click</button>
        <span id='myname'> {this.state.myname}</span>
        <div id="warpper" style={{height:'100px',overflow:'hidden',background:'yellow'}}>
          <ul>
            {
              this.state.list.map(item=>
                <li key={item.filmId}>{item.name}</li>
              )
            }
          </ul>

        </div>
      </div>
    )
  }
  // componentWillUpdate(){
  //   console.log('componentWillUpdate')
  // }
  UNSAFE_componentWillUpdate(){
    console.log('componentWillUpdate',document.getElementById("myname").innerHTML)
  }
  // componentDidUpdate(){
  //   console.log("componentDidUpdate",document.getElementById("myname").innerHTML)
  //   // 更新后，想要获取dom节点，更新
  // }
  componentDidUpdate(prevProps,prevState){
    console.log("componentDidUpdate",document.getElementById("myname").innerHTML)
    // 更新后，想要获取dom节点，更新
    console.log(prevState.list)
    if(prevState.list.length===0){
      new BetterScroll('#warpper')
    }
  }
}

// 输出
// render
// 点击 click
// componentWillUpdate---render---componentDidUpdate