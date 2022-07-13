import React, { Component } from 'react'
import axios from 'axios'
import './css/maizuo.css'

const GlobalContext = React.createContext() // 创建context上下文对象
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
      // GlobalContext.Provider 供应商组件
      <GlobalContext.Provider value={
        {
          call:"打电话",
          sms:"短信",
          info:this.state.info,
          changeInfo:(val)=>{
            this.setState({
              info:val
            })
          }
        }
      }>
        <div>
          {
            this.state.filmList.map(item =>
              <FilmItem key={item.filmId} {...item} ></FilmItem>
            )
          }
          <FilmDetail></FilmDetail>
        </div>
      </GlobalContext.Provider>
    )
  }
}

// 受控组件
class FilmItem extends Component {
  render () {
    console.log('FilmList', this.props)
    const { name, poster,grade,synopsis } = this.props
    return (  
      <GlobalContext.Consumer>
    {
      (value)=>{
        console.log(value)
        return <div className='filmitem' onClick={()=>{
          console.log(synopsis)
          value.changeInfo(synopsis)
          }}>
          <img src={poster} alt={name}></img>
          <h4>{name}</h4>
          <div>观众评分：{grade}</div>
        </div>
      }
    }
    </GlobalContext.Consumer>
    )
  }
}

class FilmDetail extends Component {
  render(){
    return (
      <GlobalContext.Consumer>
      {
        // (value)=>{
        //    return <div className='filmdetail'>
        //     {value.info}
        //   </div>
        // }
        (value)=><div className='filmdetail'>
          {value.info}
        </div>
        }
      </GlobalContext.Consumer>
    )
  }
}