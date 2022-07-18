 //1. 引入redux, 
 //2. createStore( reducer )
 // 3. V5 版本已废弃
 import {createStore} from 'redux'

 const reducer = (prevState={
    show:true,
   //  ...
 },action)=>{
    console.log(action)
    let newState = {...prevState}
    switch(action.type){
       case "kerwinhide-tabbar":
         newState.show = false
         return newState
       case "kerwinshow-tabbar":
         newState.show = true
         return newState
       default:
          return prevState
    }
 }
 const store = createStore(reducer);

 export default store