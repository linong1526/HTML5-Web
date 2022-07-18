
// 导入 Route, Routes 组件
import React, { Component } from 'react'
import { Route, Routes,Navigate, useParams } from 'react-router-dom';
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import Detail from '../views/Detail'
import Login from '../views/Login';
function isAuth(){
  // F12 控制台输入模仿接口 localStorage.setItem("token","12345")
  return localStorage.getItem("token")
}
export default class App extends Component {
  // return (
  //   <Routes>
  //     <Route path='/' element={<Home />} />
  //     <Route path='/about' element={<About />} />
  //     <Route path='*' element={<NotFound />} />
  //   </Routes>
  // );
  render() {
    return (
      <>
      {/**Tabbar 导航插槽占位 */}
      {this.props.children}
      <Routes>
        <Route path='/' element={<Navigate replace to="/films" />} />
        <Route path='/films/*' element={<Films />} /> 
        <Route path='/cinemas' element={<Cinemas />} />
        {/* <Route path='/center' element={<Center />} /> */}
        {/* <Route path='/center' element={()=>{
          return isAuth()?<Center />:<Navigate replace to="/login" />
        }} /> */}
        {/**V5 版本 传递history 太麻烦，所以有了 withRouter这个方法 */}
        {/* <Route path="/center" render={(props)=>{
              // console.log(props) {histtory:'',location:'',match:{path:'',url}}
              return isAuth()?<Center myname="kerwin" {...props}/>:<Redirect to="/login"/>
          }}/> */}
        <Route path="/center" element={ isAuth()?<Center myname="Iekika" {...this.props}/>:<Navigate replace to="/login"/>}/>
        <Route path="/login" element={<Login />} />
        {/* <Route path='/detail/:myid' element={<Detail/>}/> */}
        <Route path='/detail/:myid' element={<ValidateDetail/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
    );
  }
}
function ValidateDetail() {
  let params = useParams();
  // console.log(params) // {myid:''}
  let myId = params.myid.match(/\d+/);
  if (!myId) {
    return <NotFound />;
  }
  return <Detail id={params.myid} />;
}

// const Home = (props) => {
//   return <div>Home Compontent</div>;
// }

// const About = (props) => {
//   return <div>About Compontent</div>;
// }
const NotFound=(props)=>{
  return <div>迷路了，呜呜呜UvU</div>
}


// V5 源码
// class Route extends Component{
  // 这里的this.props支持可以拿到 {histtory:'',location:'',match:{path:'',url}}
//     ...

//     render(){
//         var MyComponent = this.props.component
//     return <div>
//             <MyComponent history={} match={}.../>
//         </div>
//     }
// }