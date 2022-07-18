import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsoon'
export default class Films extends Component {
    render() {
        return (
          // 嵌套路由
          <div>
            <div style={{height:"200px",background:"yellow"}}>大轮播</div>

            <div>导航栏</div>
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
