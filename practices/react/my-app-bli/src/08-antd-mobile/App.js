// import React, { Component } from 'react'
// import MRouter from './router/IndexRouter'
// import Tabbar from './component/Tabbar'
// import './views/css/App.css'
// import store from './redux/store'
// export default class App extends Component {
//   state={
//     isShow:store.getState()
//   }
//   componentDidMount() { 
//     store.subscribe(()=>{
//       console.log("app 订阅",store.getState())
//       this.setState({
//         // isShow:store.getState().show
//         isShow:store.getState().TabbarReducer.show
//       })
//     })
//   }
//    // store.subsribe 订阅
//     render() {
//         return (
//           <>
//                 {/* 其他的内容  V5 不再支持子组件*/}
//                 <MRouter>
//                   {this.state.isShow && <Tabbar></Tabbar>}
//                 </MRouter>
//           </>
//         )
//     }
// }

/*
  /films ===>Films
  /cinemas ===>Cinemas
  /center ===> Center
*/


// 使用react-redux
import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './component/Tabbar'
import './views/css/App.css'

import {connect} from 'react-redux'
// import store from './redux/store'
class App extends Component {
    componentDidMount() {
        // console.log(this.props)
    }
    // store.subsribe 订阅
    render() {
        return (
          <div>
                {/* 其他的内容 */}
                <MRouter>
                    {this.props.isShow && <Tabbar></Tabbar>}
                </MRouter>
          </div>
        )
    }
}
const mapStateToProps = (state)=>{
    // console.log(state)
    return {
        a:1,
        b:2,
        isShow:state.TabbarReducer.show
    }
}
export default  connect(mapStateToProps)(App)
// export default connect(()=>{
//   a:1,
//   b:2
// })(App)