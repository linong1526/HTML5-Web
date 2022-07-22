import axios from 'axios'
import React, { Component } from 'react'

export default class Comingsoon extends Component {
  // componentDidMount(){
  //   // 无法请求接口 同源策略 跨域了
  //   // axios.get("https://i.maoyan.com/ajax/comingList?ci=20&limit=10&movieIds=&token=&optimus_uuid=47CD5850067A11ED8B41D7E1DC66D493769B725C4CAA455ABC5A7B97F65B2EEE&optimus_risk_level=71&optimus_code=10").then(res=>{
  //     axios.get("/ajax/comingList?ci=20&limit=10&movieIds=&token=&optimus_uuid=47CD5850067A11ED8B41D7E1DC66D493769B725C4CAA455ABC5A7B97F65B2EEE&optimus_risk_level=71&optimus_code=10").then(res=>{
  //     console.log(res.coming)
  //   })
  // }
  componentDidMount() {
    axios.get("/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=0213411066DB11EC97E5B17F51643A714D3DCE91F9A042A0B8038AF6545D2CFB&optimus_risk_level=71&optimus_code=10").then(res=>{
        console.log(res)
    })
}
  render() {
    return (
      <div>Comingsoon</div>
    )
  }
}
