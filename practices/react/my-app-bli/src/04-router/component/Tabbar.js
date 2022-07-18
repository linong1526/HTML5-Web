import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Tabbar.css'
export default class Tabbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            {/* <a href="/films"></a> */}
              <NavLink 
              to="/films/nowplaying"
              className={({isActive})=>{
                return isActive ? "active" : ""
              }}
              >电影</NavLink>             
          </li>
          <li>
              <NavLink 
              to="/cinemas"
              className={({isActive})=>{
                return isActive ? "active" : ""
              }}
              >影院</NavLink>             
          </li>
          <li>
              <NavLink 
              to="/center"
              className={({isActive})=>{
                return isActive ? "active" : ""
              }}
              >我的</NavLink>             
          </li>

        </ul>
      </div>
    )
  }
}
