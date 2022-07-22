import { Fragment, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import logo from '../logo.png'
import store from '../store'
// import leftMenu from '../config/leftMenu'
import {getUserInfo} from '../request'
import {filterAuth} from '../config/filterAuth'
// 我们现在的情况是：不管哪个管理员登录进来，都展示所有的左侧菜单栏，这是 × 的
// 每个管理员都具备自己独有的权限，不具备权限的左侧菜单栏就不应该给展示
// 处理：每个管理员登录后，都应该先将自己所具备的所有权限获取到，根据自己拥有的权限加载自己的左侧菜单栏

const { Sider } = Layout;

const HomeSider = () => {
    // 调用hooks得到跳转的函数
    const navigate = useNavigate()
    // 解构redux的数据和操作方法
    const [state, setState] = useState(store.getState());

    // 定义state - 存储menu
    let [menu, setMenu] = useState([])
    const rootSubmenuKeys = menu.map(item => item.key + '');
    // 订阅 - redux数据更新让页面重新渲染
    store.subscribe(() => {
        setState(() => {
            return store.getState()
        })
    })

    // 让菜单刷新后也能显示展开
    const openMenu = localStorage.getItem('openMenu') ? localStorage.getItem('openMenu') : '0-0'
    // 开始搭建左侧菜单
    const [openKeys, setOpenKeys] = useState([openMenu]);
    // 一级菜单的展开收回执行的回调函数
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        console.log(latestOpenKey)
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
        localStorage.setItem('openMenu', latestOpenKey)
    };

    const toPath = ({ item, key, keyPath, domEvent }) => {
        // 将所有的children数组组成大数组
        let arr = []
        menu.forEach(v => {
            arr = arr.concat(v.children)
        })
        // 根据当前的key找到他对应的path
        let path = arr.find(v => v.key === key).topath
        // 跳转
        navigate(path)
    }

    
    // 在这里发送请求 - 请求需要用户名
    getUserInfo().then(res => {
        // console.log(res);
        // 在这里对menu修改 - 过滤
        let quanxian = res.data[0].checkedKeys[0]
        if(quanxian === undefined) {
            quanxian = '*'
        } else
        quanxian = quanxian.split(',')
        // 改state中的menu
        setMenu(() => {
            return filterAuth(quanxian, menu)
        })
    })

    return (
        <Fragment>
            <Sider trigger={null} collapsible collapsed={ state.collapsed }>
                <div className="logo">
                    {/* <img src={logo} alt="专业团队" style={ {width: '204px', height: '72px'} }/> */}
                </div>
                <Menu
                    mode="inline"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    items={menu}
                    onClick={toPath}
                />
            </Sider>
        </Fragment>
    )
}

export default HomeSider