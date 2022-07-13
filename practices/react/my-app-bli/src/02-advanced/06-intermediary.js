import React, { Component } from 'react'
import axios from 'axios'
import './css/maizuo.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      filmList: [],
      info:''
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
            <FilmItem key={item.filmId} {...item} onEvent={(value)=>{
              console.log("父组件接收value",value)
              this.setState({
                info:value 
              })
            }}></FilmItem>
          )
        }
        <FilmDetail info={this.state.info}></FilmDetail>
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
      this.props.onEvent(synopsis) // 调用父组件并传入数据
    }}>
      <img src={poster} alt={name}></img>
      <h4>{name}</h4>
      <div>观众评分：{grade}</div>
    </div>
  }
}

class FilmDetail extends Component {
  render(){
    return <div className='filmdetail'>
      {this.props.info}
    </div>
  }
}