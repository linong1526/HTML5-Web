import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Center() {
  const navigate = useNavigate()  
  return (
        <div>
            center
            <div onClick={()=>{
              navigate('/filmsoder')
            }}>电影订单</div>
        </div>
    )
}


// V5版本,需要获取 history，所以使用 withRouter 来获取
// import React from 'react'
// import {withRouter} from 'react-router-dom'

// function Center(props) {
//     return (
//         <div>
//             center

//             <div onClick={()=>{
//                 props.history.push(`/filmsorder`)

//                 // console.log(props)
//             }}>电影订单</div>
//         </div>
//     )
// }

// export default withRouter(Center)
