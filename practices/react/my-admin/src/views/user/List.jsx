import {Fragment, useEffect, useState} from 'react'
import { Table, Tag, Button, Space } from 'antd'
import {getUsers} from '../../request'

const List = () => {
    // 函数组件中发请求获取数据 - 应该使用 useEffect + useState
    const [state, setState] = useState([])
    // 发请求
    useEffect(() => {
        async function getuser() {
            let res = await getUsers()
            console.log(res);
            setState(() => {
                return res.data
            })
        }
        getuser()
    }, [])
    const columns = [
        {
            title: '序号',
            render: (text, records, index) => (index + 1)
        },
        {
            title: '用户名',
            dataIndex: 'adminname',
        },
        {
            title: '角色',
            dataIndex: 'role',
            render: (text) => {
                return (
                    text === 1 ? <Tag color='purple'>超管</Tag> : text === 2 ? <Tag color="red">管理员</Tag> : <Tag color="blue">普通员工</Tag>
                )
            }
        },
        {
            title: '操作',
            render: (text, records, index) => {
                return (
                    <Space>
                        <Button>修改</Button>
                        <Button>删除</Button>
                    </Space>
                )
            }
        }
    ];
    return (
        <Fragment>
            <h2 style={{textAlign: 'center'}}>用户列表</h2>
            <Button href="/#/user/add">添加管理员</Button>
            <Table dataSource={state} rowKey={(text, records) => records.adminid} columns={columns} />;
        </Fragment>
    )
}

export default List