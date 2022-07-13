import React, { Component } from 'react'
import axios from 'axios'
import './css/maizuo.css'

// 调度中心
var bus ={
  list:[],
  //订阅
  subscribe(callback){
    this.list.push(callback)
  },
  // 发布
  publish(text){
    this.list.forEach(callback=>{
      callback && callback(text)
    })
  }
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      filmList: []
    }
    axios.get(`test.json`).then(res => {
      console.log(res.data.data.films)
      this.setState({
        filmList: res.data.data.films
      })
    })
  }
  render () {
    return (
      <div>
        {
          this.state.filmList.map(item =>
            <FilmItem key={item.filmId} {...item} ></FilmItem>
          )
        }
        <FilmDetail></FilmDetail>
      </div>
    )
  }
}

// 受控组件
class FilmItem extends Component {
  render () {
    console.log('FilmList', this.props)
    const { name, poster,grade,synopsis } = this.props
    return <div className='filmitem' onClick={()=>{
      console.log(synopsis)
      bus.publish(synopsis)
    }}>
      <img src={poster} alt={name}></img>
      <h4>{name}</h4>
      <div>观众评分：{grade}</div>
    </div>
  }
}

class FilmDetail extends Component {
  constructor(){
    super()
    this.state={
      info:''
    }
    bus.subscribe((info)=>{
      console.log("我再filmDetail中定义",info)
      this.setState({
        info:info
      })
    })
  }
  render(){
    return <div className='filmdetail'>
      {this.state.info}
    </div>
  }
}