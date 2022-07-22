// 导入Link，OutLet组件
import {Route,Routes,NavLink,Outlet,useParams} from 'react-router-dom'
export default function App(){
    return (
      <Routes>
      {/* 页面默认导航到 Home 组件(渲染 Home 组件, 页面显示 Home Compontent 链接) */}
      {/* Nested Routes*/}
      <Route path='/' element={<Home />}>
          <Route path='about' element={<About />} />
          <Route path='setting' element={<Setting />} />
          {/* 默认子路由 如果导航栏地址为 http://localhost:3000 , 此时子路由渲染位置(Outlet)为空白，增加一下配置，子路由渲染位置(Outlet)渲染 */}
          {/*Index Routes*/}
          <Route path='list' element={<List />} >
            <Route path=':id' element={<Item />} />
          </Route>
          <Route path='*' element={<NotFount />} />
      </Route>
    </Routes>
    )
}
const Home=(props)=>{
    return (
      <>
      <div>
          {/* <Link to='/about'>About Link</Link> | {' '}
          <Link to='/setting'>Setting Link</Link> */}
          {/* <NavLink /> 接收一个style 或者 className 属性
          属性值为一个回调函数，可以通过 isActive 的值判断
          链接是否处于活动状态，从而实现给活动链接节点添加样式的效果
          示例效果：点击哪个链接，目标链接字体变红
       */}
      <NavLink
        style={({ isActive }) => navColor(isActive)} to='/about'>
        About Link
      </NavLink> | {" "}
      <NavLink
        style={({isActive}) => navColor(isActive)}
        to='/setting'
      >
        Setting Link
      </NavLink>
      <NavLink
        style={({ isActive }) => navColor(isActive)}
        to='/list'
      >
        List Link
      </NavLink>
      </div>
      <div style={{padding:'20px',margin:'10px',borderTop:'1px solid'}}>
          {/*Outlet 为嵌套子路由的出口，比如：点击About Link链接，
          浏览器地址变为 http://loalhost:3000/about 
          在此渲染路由地址 /about 的组件(在此显示：About Component)
          */}
          <Outlet />
      </div>
      
      </>
    )
}
const About = (props) => {
  return <div>
    About Compontent
  </div>;
}

const Setting = (props) => {
  return <div>
    Setting Compontent
  </div>;
}
const Item = (props) => {
  // 从 URL 获取参数：:id
  const params = useParams();
  return <h2>Item: {params.id}</h2>;
}
const List = (props) => {
  const list = [
    {
      name: "赵云",
      no: 100
    },
    {
      name: "马超",
      no: 101
    }
  ]
  return <div>
    {list.map((item) => {
      return (<NavLink
        style={({isActive}) => navColor(isActive)}
        to={`/list/${item.no}`}
        key={item.no}
      >
        {item.name}
      </NavLink>)
    })}
    <div className='content'>
      {/* 指定子路由 /list/? 的渲染位置 */}
      <Outlet />
    </div>
  </div>;
}
const NotFount = (props) => {
  return <div>
    NotFount
  </div>;
}
const navColor = (isActive) => {
  return {color: isActive ? 'red' : "",marginRight: '10px'}
}