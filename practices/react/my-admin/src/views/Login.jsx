import { Button, Checkbox, Form, Input, message, Space } from 'antd';
import React, {useState} from 'react';
import {loginRequest} from '../request'
import {useNavigate} from 'react-router-dom'
import store from '../store'

const App = () => {
  const navigate = useNavigate()
  const [uname, setUname] = useState(localStorage.getItem('uname') ? localStorage.getItem('uname') : '')

  // sessionStorage.setItem('isLogin', true)
  // sessionStorage.setItem('uname', 'asdf')
  // sessionStorage.setItem('token', 'asdfasdfasdf')
  // sessionStorage.setItem('username', 'asdf')

  const onFinish = (values) => {
    console.log('Success:', values);
    // 判断是否记住 - 记住用户名
    if(values.remember) {
      localStorage.setItem('uname', values.adminname)
      setUname(state => {
        return values.adminname
      })
    }
    let data = JSON.parse(JSON.stringify(values))
    loginRequest(data).then(res => {
        let {message: msg, code} = res
        if(code === '200') {
            message.success(msg, 1.5, () => {
              // 登录成功，先修改登录状态数据
              store.dispatch({
                type: 'isLogin'
              })
              // 将登录状态存储到本地存储
              sessionStorage.setItem('isLogin', true)
              // 将登录后的用户存下来 - 存到本地存储
              sessionStorage.setItem('username', res.data.adminname)
              // 存token
              sessionStorage.setItem('token', res.data.token)
              // console.log(res);
              navigate('/')
            });
        } else {
            message.error(msg, 3);
        }
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="adminname"
        initialValue={uname}
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;