import {createStore} from 'redux'

const state = {
    collapsed: false,
    // isLogin: false // 为了刷新也能保持登录状态，这里的数据就不是写死的，而是从本地存储中获取到的
    isLogin: sessionStorage.getItem('isLogin') === 'true' ? true : false
}

const reducer = (newState = state, action) => {
    let {type, data} = action
    switch(type) {
        case 'collapsed':
            newState = {
                ...newState,
                collapsed: !newState.collapsed
            }
        break
        case 'isLogin':
            newState = {
                ...newState,
                isLogin: !newState.isLogin
            }
            // 修改本地存储数据
            sessionStorage.setItem('isLogin', true)
        break
    }
    return newState
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store