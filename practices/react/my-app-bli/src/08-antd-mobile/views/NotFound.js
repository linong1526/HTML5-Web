// import React from 'react'

// export default function NotFound() {
//   return (
//     <div>NotFound</div>
//   )
// }



// react-redux 原理的使用
import React,{useEffect} from 'react'

function NotFound(props) {
  useEffect(() => {
      console.log(props)
  }, [props])
  return (
      <div>
          404 not found,UvU 呜呜呜┭┮﹏┭┮ 迷路啦
      </div>
  )
}

function Iekikaconnenct(cb,obj){
  var value = cb()
  return (MyComponent)=>{
      return (props)=>{
          // console.log()
          return <div style={{color:"red"}}>
              <MyComponent {...value} {...props} {...obj}/>
          </div>
      }
  }
}

export default Iekikaconnenct(()=>{
  return {
      a:1,
      b:2
  }
},{
  aa(){},
  bb(){}
})(NotFound)