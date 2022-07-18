import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './component/Tabbar'
export default class App extends Component {
    render() {
        return (
          <>
                {/* 其他的内容  V5 不再支持子组件*/}
                <MRouter>
                  <Tabbar></Tabbar>
                </MRouter>
          </>
        )
    }
}

/*
  /films ===>Films
  /cinemas ===>Cinemas
  /center ===> Center
*/
