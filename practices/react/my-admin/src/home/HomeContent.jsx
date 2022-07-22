import {Outlet, useNavigate} from 'react-router-dom'
import { Layout } from 'antd';
import {useEffect, useState} from 'react'
import {filterAuth} from '../config/filterAuth'
import {getUserInfo} from '../request'


const { Content } = Layout;

const HomeContent = () => {
    // 设置state数据，放入自己拥有的权限路径数组和当前地址栏中的地址
    const [state, setState] = useState({
        path: '',
        authPathArr: []
    })
    // 将跳转需要的navigate定义好
    const navigate = useNavigate()
    // 调用函数获取当前用户所拥有的所有左侧菜单
    getUserInfo().then(res => {
        let menuArr = filterAuth(res.data[0].checkedKeys[0].split(','))
        // 定义目标数组
        let authPathArr = []
        // 遍历左侧菜单获取所有路径组成的数组
        menuArr.forEach(item => {
            item.children.forEach(v => {
                authPathArr.push(v.topath)
            })
        })
        // 获取当前访问路径
        let path = window.location.hash.slice(1)
        // 存入state中
        setState(() => {
            return {
                path,
                authPathArr
            }
        })
    })
    // 在模拟的生命周期钩子函数中，判断当前路径是否在权限路径数组中
    useEffect(() => {
        console.log(state.authPathArr, state.path);
        // 判断 - 从数组中找当前路径
        let index = state.authPathArr.indexOf(state.path)
        // 如果没有找到
        if(index < 0) {
            // 是否去首页或登录页 - 继续
            if(state.path === '' || state.path === '/' || state.path === '/login') {
                
                navigate(state.path)
            } else {
                // 不是的就是没有权限 - 显示没有权限的组件
                navigate('/noneauth')
            }
        // 找到了就继续跳转
        } else {
            navigate(state.path)
        }
    }, [state.path])
    return (
        <Content
            className="site-layout-background"
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
            }}
        >
           <Outlet />
        </Content>
    )
}

export default HomeContent