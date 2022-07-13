import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  state={
    type:1
  }
  render() {
    return (
      <div>
        <ul>
          <li onClick={()=>{
            this.setState({
              type:1
            })
          }}>正在热映</li>
          <li onClick={()=>{
            this.setState({
              type:2
            })
          }}>即将上映</li>
        </ul>
        {/* 要根据类型判断是哪一个tab */}
        <FilmList type={this.state.type}></FilmList>
      </div>
    )
  }
}

class FilmList extends Component{
  state={
    list:[]
  }
  // 初始化-执行一次 改变 正在热映/即将上映数据也不会重新渲染，不可用
  componentDidMount() {
    if(this.props.type === 1){
      // 请求卖座正在热映的数据
      console.log('请求卖座正在热映的数据');
      axios({
        url:'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=2804927',
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16556881321698500651778049"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res=>{
        console.log(res.data.data.films)
        this.setState({
          list:res.data.data.films
        })
      })
    }else{
      // 请求卖座即将上映的数据
      console.log('请求卖座即将上映的数据');
      axios({
        url:'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=5929906',
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16556881321698500651778049"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res=>{
        console.log(res.data.data.films)
        this.setState({
          list:res.data.data.films
        })
      })
    }
  }
  // UNSAFE_componentWillReceiveProps(nextProps) 老生命周期与新生命周期getDerivedStateFromProps不能共存
  static getDerivedStateFromProps(nextProps){
    return {
      type:nextProps.type
    }
  }
  // ；配合 componentDidUpdate 一起使用
  componentDidUpdate(prevProps, prevState) { 
    console.log('this.state.type',this.state.type)
    if(this.state.type === prevProps.type){
      return 
    }
    //如果直接判断 ajax会一直请求 无法中断，需要如上判断return
      if(prevProps.type === 1){
      // 请求卖座正在热映的数据
      console.log('请求卖座正在热映的数据');
      axios({
        url:'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=2804927',
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16556881321698500651778049"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res=>{
        console.log(res.data.data.films)
        this.setState({
          list:res.data.data.films
        })
      })
    }else{
      // 请求卖座即将上映的数据
      console.log('请求卖座即将上映的数据');
      axios({
        url:'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=5929906',
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16556881321698500651778049"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res=>{
        console.log(res.data.data.films)
        this.setState({
          list:res.data.data.films
        })
      })
    }
    
  } 

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if(nextProps.type === 1){
  //     // 请求卖座正在热映的数据
  //     console.log('请求卖座正在热映的数据');
  //     axios({
  //       url:'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=2804927',
  //       headers:{
  //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16556881321698500651778049"}',
  //         'X-Host': 'mall.film-ticket.film.list'
  //       }
  //     }).then(res=>{
  //       console.log(res.data.data.films)
  //       this.setState({
  //         list:res.data.data.films
  //       })
  //     })
  //   }else{
  //     // 请求卖座即将上映的数据
  //     console.log('请求卖座即将上映的数据');
  //     axios({
  //       url:'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=5929906',
  //       headers:{
  //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16556881321698500651778049"}',
  //         'X-Host': 'mall.film-ticket.film.list'
  //       }
  //     }).then(res=>{
  //       console.log(res.data.data.films)
  //       this.setState({
  //         list:res.data.data.films
  //       })
  //     })
  //   }
  // }
  
  render(){
    return <ul>
      {
      this.state.list.map(item=>
        <li key={item.filmId}>{item.name}</li>
        )
      }
    </ul>
  }
}
