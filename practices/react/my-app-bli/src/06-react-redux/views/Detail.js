// import React,{useEffect} from 'react'
// import { show,hide } from '../redux/actionCreator/TabbarActionCreator'
// import store from '../redux/store'

// export default function Detail(props) {
//   // v6 写法 需要在借助useParams
//     console.log('props',props)
//   // let id = props.id;
//   // console.log('Detail-id',id)
//   // V5 写法
//   // console.log(props.match.params.myid)
//    // console.log(props.location.query.myid,"利用id去后端拿数据。")
//     // console.log(props.location.state.myid,"利用id去后端拿数据。")
//     useEffect(()=>{
//       console.log('create')
//       // store.dispatch 通知
//       store.dispatch(hide())
//       return()=>{
//         console.log("destroy")
//         store.dispatch(show())
//       }
//     },[])
//     return (
//     <div>Detail</div>
//   )
// }


// 使用react-redux
import React,{useEffect} from 'react'
import { show,hide } from '../redux/actionCreator/TabbarActionCreator'
import {connect} from 'react-redux'

function Detail(props) {
  // v6 写法 需要在借助useParams
    console.log('props',props)
    const {show,hide,id} = props
    useEffect(()=>{
      console.log('create')
      // store.dispatch(hide())
      hide()
      return()=>{
        console.log("destroy")
        // store.dispatch(show())
        show()
      }
    },[show,hide,id])
    return (
    <div>Detail</div>
  )
}

// connect(将来给孩子传的属性，将来给孩子传的回调函数)
const mapDispatchToProps={
  show,
  hide
}
export default connect(null,mapDispatchToProps)(Detail)
