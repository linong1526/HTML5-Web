import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import './Tabbar.css'
import style from  './Tabbar.module.css'
export default class Tabbar extends Component {
  render() {
    return (
      <div className={style.tabbar}>
        <ul>
          <li>
            {/* <a href="/films"></a> */}
              {/* <NavLink 
              to="/films/nowplaying"
              className={({isActive})=>{
                return isActive ? "active" : ""
              }}
              >电影</NavLink>*/}
                <NavLink 
              to="/films/nowplaying"
              className={({isActive})=>{
                return isActive ? style.active : ""
              }}
              >电影</NavLink>   
          </li>
          <li>
              {/* <NavLink 
              to="/cinemas"
              className={({isActive})=>{
                return isActive ? "active" : ""
              }}
              >影院</NavLink>*/}
              <NavLink 
              to="/cinemas"
              className={({isActive})=>{
                return isActive ? style.active : ""
              }}
              >影院</NavLink>             
          </li>
          <li>
              {/* <NavLink 
              to="/center"
              className={({isActive})=>{
                return isActive ? "active" : ""
              }}
              >我的</NavLink>              */}
              <NavLink 
              to="/center"
              className={({isActive})=>{
                return isActive ? style.active : ""
              }}
              >我的</NavLink>             
          </li>

        </ul>
      </div>
    )
  }
}
