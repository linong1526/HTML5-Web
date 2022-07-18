import React from 'react'

export default function Detail(props) {
  // v6 写法 需要在借助useParams
    console.log('props',props)
  // let id = props.id;
  // console.log('Detail-id',id)
  // V5 写法
  // console.log(props.match.params.myid)
   // console.log(props.location.query.myid,"利用id去后端拿数据。")
    // console.log(props.location.state.myid,"利用id去后端拿数据。")
  return (
    <div>Detail</div>
  )
}
