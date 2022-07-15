import React,{useState,useContext, useEffect} from 'react'
import axios from 'axios'
import './css/index.css'

const GlobalContext = React.createContext() // 创建 context对象

export default function App() {
  const [filmlist,setFilmlist] = useState([])
  const [info,setInfo] = useState("")

  useEffect(()=>{
    axios.get(`/test.json`).then(res=>{
      setFilmlist(res?.data?.data?.films)
    },[])
    // console.log(filmlist)
  })
  return (
    <GlobalContext.Provider value={{
      call:"打电话",
      sms:"短信",
      info:info,
      changeInfo:(value)=>{
          setInfo(value)
      }
    }}>
      <div>
        {
          filmlist.map(item=>
            <FilmItem key={item.filmId} {...item}></FilmItem>
          )
        }
        <FilmDetail></FilmDetail>
      </div>
    </GlobalContext.Provider>
  )
}

function FilmItem(props){
  let {name,poster,grade,synopsis} = props
  const value = useContext(GlobalContext) //不用套一层   <GlobalContext.Consumer>
  return <div className="filmitem" onClick={()=>{
    console.log(synopsis)
    // console.log(value)
    value.changeInfo(synopsis) // 可以从 useContext的返回值中取出调用
}}>
    <img src={poster} alt={name}/>
    <h4>{name}</h4>
    <div>观众评分：{grade}</div>
</div> 
}
function FilmDetail(){
  const value = useContext(GlobalContext)
  return <div className="filmdetail">
      detail-{value.info}
  </div>
}



// 以前的写法 context ,需要套一层 <GlobalContext.Consumer>
// class FilmItem extends Component {
//   render () {
//     console.log('FilmList', this.props)
//     const { name, poster,grade,synopsis } = this.props
//     return (  
//       <GlobalContext.Consumer>
//     {
//       (value)=>{
//         console.log(value)
//         return <div className='filmitem' onClick={()=>{
//           console.log(synopsis)
//           value.changeInfo(synopsis)
//           }}>
//           <img src={poster} alt={name}></img>
//           <h4>{name}</h4>
//           <div>观众评分：{grade}</div>
//         </div>
//       }
//     }
//     </GlobalContext.Consumer>
//     )
//   }
// }

// class FilmDetail extends Component {
//   render(){
//     return (
//       <GlobalContext.Consumer>
//       {
//         // (value)=>{
//         //    return <div className='filmdetail'>
//         //     {value.info}
//         //   </div>
//         // }
//         (value)=><div className='filmdetail'>
//           {value.info}
//         </div>
//         }
//       </GlobalContext.Consumer>
//     )
//   }
// }