import React,{useEffect} from 'react'
import { show,hide } from '../redux/actionCreator/TabbarActionCreator'
import store from '../redux/store'

export default function Detail(props) {
  // v6 写法 需要在借助useParams
    console.log('props',props)
  // let id = props.id;
  // console.log('Detail-id',id)
  // V5 写法
  // console.log(props.match.params.myid)
   // console.log(props.location.query.myid,"利用id去后端拿数据。")
    // console.log(props.location.state.myid,"利用id去后端拿数据。")
    useEffect(()=>{
      console.log('create')
      // store.dispatch 通知
      store.dispatch(hide())
      return()=>{
        console.log("destroy")
        store.dispatch(show() )
      }
    })
    return (
    <div>Detail</div>
  )
}
