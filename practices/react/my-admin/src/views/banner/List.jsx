import {getBanner,delBanner} from '../../request'
import {Table, Switch, Button, Space, message } from 'antd'
import {useEffect, useState, Fragment} from 'react'
import {useNavigate} from 'react-router-dom'

const List = () => {
    const navigate = useNavigate()
    // data中的每个对象在表格中都是一行数据
    const [state, setState] = useState([])
    useEffect(() => {
        getBanner().then(res => {
            console.log(res);
            setState(state => {
                return res.data
            })
        })
    }, [])

    const deleteOne = (id) => {
        delBanner(id).then(res => {
            console.log(res);
            if(res.code === '200') {
                message.success('删除成功', 1.5, () => {
                    window.location.reload()
                })
            }
        })
    }
    const columns = [
        {
            title: '序号',
            render: (text, record, index) => <span>{index + 1}</span>
        },
        {
            title: '轮播图图片',
            dataIndex: 'img',
            render: (text, record) => <img src={text} width='200' height="100" alt={record.alt} />
        },
        {
            title: '是否在前台展示',
            dataIndex: 'flag',
            render: (text, record) => <Switch checked={text} />
        },
        {
            title: '操作',
            render: (text, record) => {
                return (
                    <Space>
                        <Button href={'/#/banner/edit?id=' + record.bannerid}>修改</Button>
                        <Button onClick={() => deleteOne(record.bannerid)}>删除</Button>
                    </Space>
                )
            }
        }
    ];
    
    return (<div>
        <Button href="/#/banner/add" type="primary">添加轮播图</Button>
        <Table pagination={{
          position: ['bottomcenter'],
          pageSize: 3
        }} columns={columns} dataSource={state} rowKey={record => record.bannerid} />;
    </div>)
}

export default List