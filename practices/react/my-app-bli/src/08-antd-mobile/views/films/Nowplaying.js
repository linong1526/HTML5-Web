import React,{useEffect,useState,useRef} from 'react'
import axios from 'axios'
// import {useHistory,withRouter} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import { Image, List, InfiniteScroll } from 'antd-mobile'

export default function Nowplaying(props) {
  // V5 版本的props 从 component={Nowplaying} 可以拿到 {histtory:'',location:'',match:{path:'',url}}
  console.log('now',props)
    const [list, setlist] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const count = useRef(0)
    // useEffect(() => {
    //     axios({
    //         url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1886067",
    //         headers:{
    //             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
    //             'X-Host': 'mall.film-ticket.film.list'
    //         }
    //     }).then(res=>{
    //         console.log('Nowpalying',res.data.data.films)
    //         setlist(res.data.data.films)
    //     })
    // }, [])

    async function loadMore() {
      console.log("到底了")
      count.current++
          axios({
            url:`https://m.maizuo.com/gateway?cityId=110100&pageNum=${count.current}&pageSize=10&type=1&k=1886067`,
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
            console.log('Nowpalying',res.data.data.films)
            setlist([...list,...res.data.data.films])
            setHasMore(res.data.data.films.length>0)
        })
    }
    // v6 已经将 useNavigate 代替 useHistory
    // const history  = useHistory()
    // const navigate = useNavigate();

    // const handleChangePage = (id)=>{
       // V5 写法
        // console.log("click")
        // window.location.href="#/detail/"+id
        // console.log(props)
        // props.history.push(`/detail/${id}`)
        // this.props.history.push(`/detail/${id}`)
        //1 -动态路由传参
        // history.push(`/detail/${id}`) // v5写法
        // 2- query传参
        // history.push({ pathname : '/detail' ,query : { myid: id} })
        // 3- state传参
        // history.push({pathname:"/detail",state:{myid:id}})

        // V6写法
        // navigate(`/detail/${id}`);  // push
        // navigate('/home)
        // 重定向
        // navigate('/home', {replace: true});
    // }

    return (
        <div>
            {
                // list.map(item=>
                // <li key={item.filmId} onClick={()=>handleChangePage(item.filmId)}>
                //     {/* <NavLink to={'/detail/'+item.filmId}>{item.name}</NavLink> */}
                //     {item.name}
                // </li>    
                // )
                // 换成组件 
                // V5 版本需要 props.history传入FilmItem子组件
                // list.map(item=>
                //   <FilmItem key={item.filmId} {...item} {...props}></FilmItem>
                //   )
                // V5版本 没有props.history的组件 需要使用 withRouter包装子组件
                // list.map(item=>
                //   <FilmItem key={item.filmId} {...item}></FilmItem>
                //   )
                  // list.map(item=>
                  //   <FilmItem key={item.filmId} {...item}></FilmItem>
                  //   )


                  <List header=''>
                  {list.map(item => (
                    <List.Item
                      key={item.name}
                      prefix={
                        <Image
                          src={item.poster}
                          // style={{ borderRadius: 20 }}
                          // fit='cover'
                          width={80}
                          // height={40}
                        />
                      }
                      description={
                        <div>
                          {
                            item.grade ? <div>观众评分：{item.grade}</div>:<div style={{visibility:'hidden'}}>观众评分：{item.grade}</div>
                          }
                          {/* <div style={{visibility:'hidden'}}>观众评分：{item.grade}</div> */}
                          <div>主演：{item.director}</div>
                          <div>{item.nation} | {item.runtime} 分钟</div>
                          {/* <div>描述：{item.synopsis}</div> */}
                        </div>
                      }
                    >
                      {item.name}
                    </List.Item>
                  ))}
                </List>
            }
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </div>
    )
}
// function FilmItem(props){
//   // console.log('FilmItem',props)
//   const navigate = useNavigate();
//   let {name,filmId} = props
//   return  <li onClick={()=>
//     // V6 版本无需展开 {...item},只传入所需的name、FilmId即可，navigate很强大
//     navigate(`/detail/${filmId}`)
//   }>
//     {name}
//   </li>  
// }

// Nowplaying组件的孩子 FilmItem 能拿到history吗？设想一下不是从component中获取到props.history,这个组件的渲染而是从NavLink中跳转来的，没有props.history怎么办？
// V5 版本 无法从props中得到history这个属性，需要使用withRouter获取
// function FilmItem(props){
//   // console.log(props)
//   let {name,filmId} = props
//   return <li onClick={()=>{
//       // console.log(props)
//       props.history.push(`/detail/${filmId}`)
//   }}>
//       {/* <NavLink to={'/detail/'+item.filmId}>{item.name}</NavLink> */}

//       {/* <img src={poster}/> */}
//       {name}
//   </li>    
// }


// const WithFilmItem = withRouter(FilmItem)