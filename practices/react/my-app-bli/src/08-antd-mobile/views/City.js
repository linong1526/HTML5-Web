// import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom'
// import store from '../redux/store'

// export default function City() {
//   const [list] = useState(["北京","上海","深圳","广州"])
//   const navigate = useNavigate()
//   return (
//     <div>
//       City
//       <ul>
//         {
//           list.map(item=>
//             <li key={item} onClick={()=>{
//               store.dispatch({
//                 type:'change-city',
//                 payload:item
//               })
//               // navigate('/cinemas')
//               navigate(-1)
//             }}>{item}</li>
//             )
//         }
//       </ul>
//     </div>
//   )
// }



// 使用react-redux
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {connect} from 'react-redux'

function City(props) {
  console.log('使用react-redux之后的props',props)
  const [list] = useState(["北京","上海","深圳","广州"])
  const navigate = useNavigate()
  return (
    <div>
      City
      <ul>
        {
          list.map(item=>
            <li key={item} onClick={()=>{
              // store.dispatch({
              //   type:'change-city',
              //   payload:item
              // })
              // navigate('/cinemas')
              props.change(item)
              navigate(-1)
            }}>{item}</li>
            )
        }
      </ul>
    </div>
  )
}

const mapDispatchToProps={
  change(item){
    return {
      type:'change-city',
      payload:item
    }
  }
}
export default connect(null,mapDispatchToProps)(City)