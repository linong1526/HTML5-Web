import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import store from '../redux/store'

export default function City() {
  const [list] = useState(["北京","上海","深圳","广州"])
  const navigate = useNavigate()
  return (
    <div>
      City
      <ul>
        {
          list.map(item=>
            <li key={item} onClick={()=>{
              store.dispatch({
                type:'change-city',
                payload:item
              })
              // navigate('/cinemas')
              navigate(-1)
            }}>{item}</li>
            )
        }
      </ul>
    </div>
  )
}
