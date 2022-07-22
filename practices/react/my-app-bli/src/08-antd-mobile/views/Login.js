import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>登陆页面</h1>
      <input type="text" />
      <button onClick={()=>{
        localStorage.setItem("token","123")
        // navigate('/center')// push
        // 重定向
        console.log('navigate',navigate)
        navigate('/center', {replace: true});
      }}>登录</button>
    </div>
  )
}
