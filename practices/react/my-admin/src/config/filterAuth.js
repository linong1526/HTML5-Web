import { SkinOutlined, UserOutlined } from '@ant-design/icons';
let menu = [
    {
        key: '0-0',
        label: '用户管理',
        icon: <UserOutlined />,
        children: [
            {
                key: '0-0-0',
                label: '用户列表',
                topath: '/user/list'
            },
            {
                key: '0-0-1',
                label: '用户添加',
                topath: '/user/add'
            }
        ]
    },
    {
        key: '0-1',
        label: '商品管理',
        icon: <SkinOutlined />,
        children: [
            {
                key: '0-1-0',
                label: '商品添加',
                topath: '/goods/add'
            },
            {
                key: '0-1-1',
                label: '商品修改',
                topath: '/goods/edit'
            }
        ]
    },
    {
        key: '0-2',
        label: '轮播图管理',
        icon: <SkinOutlined />,
        children: [
            {
                key: '0-2-0',
                label: '轮播图列表',
                topath: '/banner/list'
            },
            {
                key: '0-2-1',
                label: '轮播图添加',
                topath: '/banner/add'
            },
            {
                key: '0-2-2',
                label: '轮播图修改',
                topath: '/banner/edit'
            }
        ]
    },
    {
        key: '0-3',
        label: '富文本',
        children: [
            {
                key: '0-3-0',
                label: '富文本编辑器',
                topath: '/fuwenben'
            }
        ]
    }
]
export function filterAuth(quanxian) {
    if(quanxian === '*') {
        return menu
    }
    // 找出一级权限
    let yiji = []
    quanxian.forEach(item => {
        let index = item.indexOf('-')
        let index2 = item.indexOf('-', index + 1)
        if(index2 >= 0) {
            yiji.push(item.slice(0, index2))
        }
    })
    yiji = new Set(yiji)
    yiji = [...yiji]
    menu = menu.filter(item => yiji.findIndex(v => v === item.key) >= 0)
    // 此时的menu一级权限筛选成功
    // 定义所有二级权限组成的数组
    let erji = []
    quanxian.forEach(item => {
        let index = item.indexOf('-')
        let index2 = item.indexOf('-', index + 1)
        if(index2 >= 0) {
            erji.push(item)
        }
    })
    // 遍历menu中的每个children，从中找到所有在erji权限中的对象
    menu.forEach(item => {
        let brr = []
        item.children.forEach(v => {
            let index = erji.findIndex(vv => vv === v.key)
            if(index >= 0) {
                brr.push(v)
            }
        })
        item.children = brr
    })
    return menu
}