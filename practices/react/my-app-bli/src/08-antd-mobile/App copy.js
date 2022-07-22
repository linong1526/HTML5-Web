import React, { Component } from 'react'
// import MRouter from './router/IndexRouter'
import {Link,Outlet} from 'react-router-dom'
export default class App extends Component {
    render() {
        return (
           <div>
                {/* 其他的内容 */}
                {/* <MRouter></MRouter> */}
                <h1>Bookkeeper</h1>
                <nav  style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                  }}>
                  <Link to="/invoices">Invoices</Link> |{" "}
                  <Link to="/expenses">Expenses</Link>
                  </nav>
                  <Outlet />
          </div>
        )
    }
}

/*
 /films ===>Films
 /cinemas ===>Cinemas
 /center ===> Center


 
*/