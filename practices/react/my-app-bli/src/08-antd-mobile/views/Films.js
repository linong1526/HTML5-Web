import React, { Component } from 'react'
import { Route, Routes,NavLink,Navigate,useNavigate } from 'react-router-dom';
import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsoon'
import style from './css/Film.module.css'
import { Swiper,Tabs } from 'antd-mobile'
import axios from 'axios'

// 由于是react-router-dom V6的原因，官方已经把history.push 去除，因此需要高阶组价，拿到hook
export const withNavigation = (Component) => {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}

// const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
// const items = colors.map((color, index) => (
//   <Swiper.Item key={index}>
//     <div
//       className={style.content}
//       style={{ background: color }}
//       onClick={() => {
//         // Toast.show(`你点击了卡片 ${index + 1}`)
//         console.log('click')
//       }}
//     >
//       {index + 1}
//     </div>
//   </Swiper.Item>
// ))

class Films extends Component {

    state = {
    looplist:[],
    path:'/films/nowplaying'
    }
componentDidMount() {
    axios({
        url:`https://m.maizuo.com/gateway/?cinemaId=1950&k=942767`,
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16556881321698500651778049"}',
          'X-Host': 'mall.film-ticket.film.cinema-show-film'
        }
    }).then(res=>{
        console.log(res.data)
        this.setState({
            looplist:res.data.data.films
        })
      })
}

    render() {
        return (
          // 嵌套路由
          <div className={style.film + 'aaaa'}>
            {/* <div style={{height:"200px",background:"yellow"}}>大轮播</div> */}
            <Swiper autoplay>
              {/* {items} */}
              <Swiper.Item>1111</Swiper.Item>
              {
                this.state.looplist.map(item => (
                  // console.log('Swiper.Item',item)
                  <Swiper.Item key={item.filmId}>
                    <img  className={style.content} alt={item.category} src={item.poster} style={{width:"100%"}}></img>
                  </Swiper.Item>
                ))
              }
            </Swiper>

            {/* <div>导航栏</div> */}
            {/* <ul>
                <li>
                    <NavLink to="/films/nowplaying" className="active">正在热映</NavLink>
                    <NavLink to="/films/nowplaying" className={style.active}>正在热映</NavLink>
                </li>
                <li>
                    <NavLink to="/films/comingsoon" className="active">即将上映</NavLink>
                </li>
            </ul> */}
            <div style={{position:"sticky",top:0,background:"white"}}>
              <Tabs onChange={(val)=>{
                  console.log('拿到高阶组价的props',this.props)
                // navigate(path)
                this.setState({
                  path:val
                })
                this.props.navigate(val)
              }} activeKey={this.state.path}>
                <Navigate to={this.state.path} replace='true' />
                <Tabs.Tab title='正在热映' key='/films/nowplaying'></Tabs.Tab>
                <Tabs.Tab title='即将上映' key='/films/comingsoon'></Tabs.Tab>
              </Tabs>
            </div>

            {/**
             * https://reactrouter.com/docs/en/v6/getting-started/faq
             * In v6 it's almost the same:
              Note the * in the ancestor routes to get it to match deeper URLs even though it has no direct children
              You no longer need to know the entire child route path, you can use a relative route now */}
            <Routes>
              <Route index path='nowplaying' element={<Nowplaying />} />
              <Route path='comingsoon' element={<Comingsoon />} />
            </Routes>
            {/**V5 版本路由 */}
            {/* <Switch>
                <Route path="/films/nowplaying" component={Nowplaying}/>
                <Route path="/films/comingsoon" component={Comingsoon}/>
                <Redirect from="/films" to="/films/nowplaying"/> 
            </Switch> */}
        </div>
        )
    }
}

export default withNavigation(Films)