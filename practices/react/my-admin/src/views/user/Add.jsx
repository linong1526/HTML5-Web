import { Input, Select, Tree, Button } from 'antd'
import {Fragment, useRef, useState} from 'react'
// import leftMenu from '../../config/leftMenu'
import {filterAuth} from '../../config/filterAuth'
import {addUser} from '../../request'

const { Option } = Select

const UserAdd = () => {
    // 为了获取表单元素数据，定义ref数据
    const userRef = useRef()
    const passRef = useRef()
    // 为了接收下拉框的数据，定义state
    let [Role, setRole] = useState('2')
    let [checkedKeys, setCheckedKeys] = useState(null)
    let treeData = filterAuth('*').map(item => {
        let newItem = {
            title: item.label,
            key: item.key
        }
        newItem.children = item.children.map(v => {
            return {
                title: v.label,
                key: v.key
            }
        })
        return newItem
    })
    
    const onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys);
        setCheckedKeys(() => {
            return checkedKeys.join(',')
        })
    };

    // 下拉框选项改变的事件函数
    const handleChange = (role) => {
        setRole(() => {
            return role
        })
    }
    // 点击提交的事件函数
    const submit = () => {
        // 获取数据 + 发送请求 + 判断结果 + 跳转到列表页
        // console.log(userRef.current.input.value);
        // console.log(passRef.current.input.value);
        addUser({
            adminname: userRef.current.input.value,
            password: passRef.current.input.value,
            role: Role,
            checkedKeys: checkedKeys
        }).then(res => {
            console.log(res);
        })
    }
    return (
        <Fragment>
            用户名：<Input ref={userRef} type="text" />
            密码：<Input ref={passRef} type="password" />
            角色：
            <Select
            defaultValue="2"
            style={{
                width: 120,
            }}
            onChange={handleChange}
            >
                <Option value="1">超管</Option>
                <Option value="2">管理员</Option>
                <Option value="3">员工</Option>
            </Select>
            <br/>
            权限：
            <Tree
                checkable
                defaultExpandedKeys={['0-0-0', '0-0-1']}
                defaultSelectedKeys={['0-0-0', '0-0-1']}
                defaultCheckedKeys={['0-0-0', '0-0-1']}
                onCheck={onCheck}
                treeData={treeData}
            />
            <Button onClick={submit}>提交</Button>
        </Fragment>
    )
}

export default UserAdd