// import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
// // import './Tabbar.css'
// import style from  './Tabbar.module.css'
// export default class Tabbar extends Component {
//   render() {
//     return (
//       <div className={style.tabbar}>
//         <ul>
//           <li>
//             {/* <a href="/films"></a> */}
//               {/* <NavLink 
//               to="/films/nowplaying"
//               className={({isActive})=>{
//                 return isActive ? "active" : ""
//               }}
//               >电影</NavLink>*/}
//                 <NavLink 
//               to="/films/nowplaying"
//               className={({isActive})=>{
//                 return isActive ? style.active : ""
//               }}
//               >电影</NavLink>   
//           </li>
//           <li>
//               {/* <NavLink 
//               to="/cinemas"
//               className={({isActive})=>{
//                 return isActive ? "active" : ""
//               }}
//               >影院</NavLink>*/}
//               <NavLink 
//               to="/cinemas"
//               className={({isActive})=>{
//                 return isActive ? style.active : ""
//               }}
//               >影院</NavLink>             
//           </li>
//           <li>
//               {/* <NavLink 
//               to="/center"
//               className={({isActive})=>{
//                 return isActive ? "active" : ""
//               }}
//               >我的</NavLink>              */}
//               <NavLink 
//               to="/center"
//               className={({isActive})=>{
//                 return isActive ? style.active : ""
//               }}
//               >我的</NavLink>             
//           </li>

//         </ul>
//       </div>
//     )
//   }
// }


import React,{Component} from 'react'
import { useNavigate } from 'react-router-dom';
import style from  './Tabbar.module.css'
import {TabBar } from 'antd-mobile'
import { connect } from 'react-redux';
import store from '../redux/store'
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline
} from 'antd-mobile-icons'

export const withNavigation = (Component) => {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}
class Tabbar extends Component {
  constructor(){
    super()
    this.state={
      path:'/films'
    }
  }
  tabs = [
    {
      key: '/films',
      title: '首页',
      icon: <AppOutline />
    },
    {
      key: '/cinemas',
      title: '影院',
      icon: <UnorderedListOutline />
    },
    {
      key: '/center',
      title: '我的',
      icon: <UserOutline />,
    },
  ]
  render(){
    return (
      <div className={style.tabbar}>
        {console.log("this.props",this.props)}
        <TabBar onChange={(value)=>{
          console.log('value',value)
          // this.props.changeTab(value)
          store.dispatch({
            type:"color-tabbar",
            payload:value
          })
          this.props.navigate(value)
        }} activeKey={this.props.path}>
          {this.tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    )
  }
}
//connect的唯一参数是 selector。此方法可以从 Redux store 接收到全局的 state，然后返回一个你的组件中需要的 props。
const mapStateToProps=(state)=>{
  console.log('state,store里的全部reducer',state)
  return {
    path:state.TabbarColorReducer.path
  }
}
const mapDispatchToProps={
  changeTab(item){
    return {
      type:"color-tabbar",
      payload:item
    }
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(withNavigation(Tabbar))
