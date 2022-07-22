import React,{useEffect, useState} from 'react'
import store from '../redux/store'
import {useNavigate} from 'react-router-dom'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'

export default function Cinemas(props) {
    const navigate = useNavigate()
    // const [cityName] = useState(store.getState().cityName)
    const [cityName] = useState(store.getState().CityReducer.cityName) // 北京
    const [cinemaList,setCinemaList] = useState(store.getState().CinemaListReducer.list) // 北京
    
    useEffect(()=>{
      // console.log('Cinemas',store.getState())
      if(store.getState().CinemaListReducer.list.length===0){
        // 去后台取数据
        // actionCreator里写异步
        store.dispatch(getCinemaListAction())
      }else{
        console.log("缓存")
      }
      // 订阅
      var unsubcribe = store.subscribe(()=>{
        console.log("cinemas 订阅",store.getState().CinemaListReducer.list)
        setCinemaList(store.getState().CinemaListReducer.list)
      })
      // 取消订阅
      return ()=>{
        unsubcribe()
      }
    },[])
    return (
        <div>
            {/* <div onClick={()=>{
                navigate('/city')
            }}>{cityName}</div> */}
            <div style={{overflow:"hidden"}}>
                <div onClick={()=>{
                    navigate('/city')
                }} style={{float:"left"}}>{cityName}</div>
                <div style={{float:"right"}} onClick={()=>{
                    navigate(`/cinemas/search`)
                }}>搜索</div>
            </div>
            cinemas
            {
              cinemaList.map(item=>
                <dl key={item.cinemaId} style={{padding:'10px'}}>
                  <dt>{item.name}</dt>
                  <dd style={{fontSize:"12px",color:"gray"}}>{item.address}</dd>
                </dl>
                )
            }
        </div>
    )
}

// import React,{useState} from 'react'
// import store from '../redux/store'
// import {useNavigate} from 'react-router-dom'
// export default function Cinemas(props) {

//     const [cityName] = useState(store.getState().CityReducer.cityName)
//     const navigate = useNavigate()
//     return (
//         <div>
//             <div onClick={()=>{
//                 // props.history.push(`/city`)
//                 navigate('/city')
//             }}>{cityName}</div>
//             cinemas
//         </div>
//     )
// }
