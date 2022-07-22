import {Component, Fragment} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './home/Index'
import Login from './views/Login'
import NoneAuth from './views/NoneAuth'
import NotFound from './views/NotFound'
import UserAdd from './views/user/Add.jsx'
import UserEdit from './views/user/Edit'
import UserList from './views/user/List'
import GoodsAdd from './views/goods/Add'
import GoodsEdit from './views/goods/Edit'
import HomeRight from './home/HomeRight'
import BannerList from './views/banner/List'
import BannerAdd from './views/banner/Add'
import BannerEdit from './views/banner/Edit'
import store from './store'
import Fuwenben from './views/Fuwenben'

class Root extends Component {
    constructor(props) {
        super(props)
        // 将redux中的数据放在这个组件中
        this.state = store.getState()
        // 订阅
        store.subscribe(() => {
            this.setState(state => {
                return store.getState()
            })
        })
    }
    render() {
        return (
            <Fragment>
                {/* 配置路由 */}
                <Routes>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/' element={this.state.isLogin ? <Home /> : <Login />}>
                        <Route path='/' element={<HomeRight />}></Route>
                        <Route path='/noneauth' element={<NoneAuth />}></Route>
                        <Route path='/user'>
                            <Route path='list' element={<UserList />}></Route>
                            <Route path='add' element={<UserAdd />}></Route>
                            <Route path='edit' element={<UserEdit />}></Route>
                        </Route>
                        <Route path='/goods'>
                            <Route path='add' element={<GoodsAdd />}></Route>
                            <Route path='edit' element={<GoodsEdit />}></Route>
                        </Route>
                        <Route path='/banner'>
                            <Route path='list' element={<BannerList />}></Route>
                            <Route path='add' element={<BannerAdd />}></Route>
                            <Route path='edit' element={<BannerEdit />}></Route>
                        </Route>
                        <Route path='/fuwenben' element={<Fuwenben />}></Route>
                        {/* 配置404路由 */}
                        <Route path='*' element={<NotFound />}></Route>
                    </Route>
                </Routes>
            </Fragment>
        )
    }
}

export default Root