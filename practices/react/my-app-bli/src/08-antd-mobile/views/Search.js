import React,{useState,useEffect,useMemo} from 'react'
import store from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'

export default function Search() {
    const [cinemaList,setCinemaList] = useState(store.getState().CinemaListReducer.list)
    const [mytext, setmytext] = useState("")



    useEffect(() => {
        // if(store.getState)
        // console.log()
        if(store.getState().CinemaListReducer.list.length===0){
            //去后台取数据
            // actionCreator 里写异步
            store.dispatch(getCinemaListAction())
        }else{
            console.log("store 缓存")
        }
        //订阅
        var unsubscribe = store.subscribe(()=>{
            console.log("cinema 中订阅",store.getState().CinemaListReducer.list)
            setCinemaList(store.getState().CinemaListReducer.list)
        })
        return ()=>{
            //取消订阅？
            unsubscribe() 
        }
    }, [])

    const getCinemaList = useMemo(() => cinemaList.filter(item=>item.name.toUpperCase().includes(mytext.toUpperCase()) || 
    item.address.toUpperCase().includes(mytext.toUpperCase())
    ), [cinemaList,mytext])
    return (
        <div>
            <input value={mytext} onChange={(evt)=>{
                    setmytext(evt.target.value)
                }}/>
          {
                  getCinemaList.map(item=>
                    <dl key={item.cinemaId} style={{padding:"10px"}}>
                        <dt>{item.name}</dt>
                        <dd style={{fontSize:"12px",color:"gray"}}>{item.address}</dd>
                    </dl>    
                )
            }
        </div>
    )
}