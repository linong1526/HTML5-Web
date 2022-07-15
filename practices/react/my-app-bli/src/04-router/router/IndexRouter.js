import React, { Component } from 'react'
import {Routes,Route} from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
export default class IndexRouter extends Component {
    render() {
        return (
              <Routes>
                {/* <Route path="/" element={<Films />} /> 这是react-router-dom@6的写法 
                <Route path="/films" component={Films} /> 这是react-router-dom@6的写法 
                <Route path="/cinemas" component={Cinemas} />
                <Route path="/center" component={Center} />
                <Redirect></Redirect> */}
                <Route path="/" element={<Films />} /> {/**这是react-router-dom@6的写法 */}
                <Route path="/films" element={<Films/>} /> {/**这是react-router-dom@6的写法 */}
                <Route path="/cinemas" element={<Cinemas/>} />
                <Route path="/center" element={<Center />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
        )
    }
}
