import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './component/Tabbar'
import './views/css/App.css'
import store from './redux/store'
export default class App extends Component {
  state={
    isShow:store.getState()
  }
  componentDidMount() { 
    store.subscribe(()=>{
      console.log("app 订阅",store.getState())
      this.setState({
        // isShow:store.getState().show
        isShow:store.getState().TabbarReducer.show
      })
    })
  }
   // store.subsribe 订阅
    render() {
        return (
          <>
                {/* 其他的内容  V5 不再支持子组件*/}
                <MRouter>
                  {this.state.isShow && <Tabbar></Tabbar>}
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
