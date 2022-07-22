import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DownOutlined
  } from '@ant-design/icons';
import { Layout, Menu, Dropdown, Space, message, Popconfirm } from 'antd';
import React, { useState } from 'react';
import store from '../store'
import {useNavigate} from 'react-router-dom'

const { Header } = Layout;

const App = () => {
  const navigate = useNavigate()
  const [state, setState] = useState(store.getState());
  const showOrHide = () => {
      store.dispatch({type: 'collapsed'})
  }
  store.subscribe(() => {
      setState(() => {
          return store.getState()
      }) 
  })

  // 退出登录函数
  // const logout = () => {
  //   // 将本地存储数据清空即可
  //   sessionStorage.clear()
  //   // 跳转到登录页
  //   // navigate('/login')
  // }

  // 定义询问框的内容
  const text = '你确定要退出吗?';
  // 点击确认按钮后的内容
  const confirm = () => {
    // 将本地存储数据清空即可
    sessionStorage.clear()
    message.info('退出成功', 1.5, () => {
      // 跳转到登录页
      navigate('/login')
    });
  };
  // 下拉菜单内容
  const menu = (<Menu
    items={[  
      {
        key: '1',
        label: '设置'
      },
      {
        key: '2',
        danger: true,
        label: (
          <Popconfirm placement="bottom" title={text} onConfirm={confirm} okText="确认" cancelText="取消">
            <span>退出</span>
          </Popconfirm>
          
        ),
      },
    ]}
  />)
  
  return (
    <Header
        className="site-layout-background"
        style={{
          padding: 0,
        }}
      >
        {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: showOrHide,
        })}


        {/* 用户名显示下拉菜单 */}
        <Dropdown overlay={menu}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {sessionStorage.getItem('username')}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      </Header>
  );
};
  
  export default App;

