 //1. 引入redux, 
 //2. createStore( reducer )
 // 3. V5 版本已废弃
// 4.开发者工具 redux ，需要配置，开发者模式才可以看到redux状态管理的数据
// https://github.com/zalmoxisus/redux-devtools-extension

// import {createStore} from 'redux'

// 很多个reducer 一起使用会很杂乱 需要分开管理 change-city 
// const reducer = (prevState={
//   show:true,
//   cityName:"北京"
//   //  ...
// },action)=>{
//   console.log(action)
//   let newState = {...prevState}
//   switch(action.type){
//       case "hide-tabbar":
//         newState.show = false
//         return newState
//       case "show-tabbar":
//         newState.show = true
//         return newState
//       case "change-city":
//         newState.cityName = action.payload
//         return newState
//       default:
//         return prevState
//   }
// }
// const store = createStore(reducer);
// export default store


// import {applyMiddleware, combineReducers, createStore,compose} from 'redux'
// import TabbarReducer from './reducers/TabbarReducer'
// import CityReducer from './reducers/CityReducers';
// import CinemaListReducer from './reducers/CinemaListReducer'
// import reduxThunk from 'redux-thunk'
// import reduxPromise from 'redux-promise'
// // 分开的reducer功能 需要合并
// const reducer = combineReducers({
//   CityReducer,
//   TabbarReducer,
//   CinemaListReducer
// })
// // const store = createStore(reducer);
// // 加入中间件
// // const store = createStore(reducer,applyMiddleware(reduxThunk,reduxPromise));
// // 配置 redux 环境
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
//   applyMiddleware(reduxThunk,reduxPromise)
// ))

// export default store


 /*
  store.dispatch
  store.subscrbe
  store.getState
  简单实现redux原理，如下
 */

//  function createKerwinStore(reducer){
//    var list = []
//    var state = reducer(undefined,{})
//    function subscribe(callback){
//       list.push(callback)
//    }

//    function dispatch(action){
//       state = reducer(state,action)
//       for(var i in  list){
//          list[i] && list[i]()
//       }
//    }

//    function getState(){
//       return state
//    }
//    return {
//       subscribe,
//       dispatch,
//       getState
//    }
//  }



// 数据持久化redux-persist，需要配合 react-redux 使用
import {applyMiddleware, combineReducers, createStore,compose} from 'redux'
import TabbarReducer from './reducers/TabbarReducer'
import CityReducer from './reducers/CityReducers';
import CinemaListReducer from './reducers/CinemaListReducer'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'Iekika', // localStorage的key值
  storage,
  // 白名单
  whitelist: ['CityReducer'] // only navigation will be persisted
}
// 分开的reducer功能 需要合并
const reducer = combineReducers({
  CityReducer,
  TabbarReducer,
  CinemaListReducer
})
const persistedReducer = persistReducer(persistConfig, reducer)

// 配置 redux 环境
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer,composeEnhancers(applyMiddleware(reduxThunk,reduxPromise)))
let persistor = persistStore(store)
export {store,persistor}
export default store


// https://pro.ant.design/zh-CN/docs/getting-started/