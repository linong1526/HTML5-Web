import { Input, Button, message } from 'antd';
import { useState, useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import {addBanner} from '../../request'

const Add = () => {
    const navigate = useNavigate()
    const [state, setState] = useState({
        imgPath: 'https://img1.baidu.com/it/u=771228819,1097625411&fm=253&fmt=auto&app=138&f=JPEG?w=230&h=404',
        alt: '',
        link: ''
    })
    const selectImg = e => {
        // 文件信息
        console.dir(e.target.files[0]);
        // 从这个文件信息中，将图片的src数据读取出来，修改imgPath
        // 实例化FileReader
        const reader = new FileReader()
        // 读取数据
        reader.readAsDataURL(e.target.files[0])
        // 给reader绑定，当文件读取结束的时候执行
        reader.onload = function() {
            // 接收数据
            let imgData = reader.result
            // console.log(imgData);
            setState(state => {
                return {
                    ...state,
                    imgPath: imgData
                }
            })
        }
    }

    // 让函数组件也能有ref，方便的获取表单元素中输入的内容
    const altRef = useRef()
    const linkRef = useRef()

    // 定义提交的事件函数
    const submit = () => {
        // 获取内容
        // console.log(altRef.current.input.value)
        // console.log(linkRef.current.input.value)
        addBanner({
            alt: altRef.current.input.value,
            link: linkRef.current.input.value,
            img: state.imgPath
        }).then(res => {
            // 判断是否成功 - 跳转到列表页查看
            if(res.code === '200') {
                message.success('添加轮播图成功', 1.5, () => {
                    navigate('/banner/list')
                })
            }
        })
    }
    return (
        <div>
            <h2 style={{textAlign: 'center', margin: '0 0 20px'}}>轮播图添加</h2>
            <p style={{lineHeight: '30px', margin: '10px 0 0'}}>alt</p>
            <Input ref={altRef} placeholder="请输入alt" />
            <p style={{lineHeight: '30px', margin: '10px 0 0'}}>link</p>
            <Input ref={linkRef} placeholder="请输入link" />
            <p style={{lineHeight: '30px', margin: '10px 0 0'}}>图片</p>
            <label htmlFor="upload" style={{padding: '5px', border: '1px solid #ccc', borderRadius: '5px'}}>
                上传图片
            </label>
            <input onChange={selectImg} style={{display: 'none'}} type="file" id="upload" placeholder="请输入alt" />
            <br/>
            <br/>
            <br/>
            <img width="400" height="400" src={state.imgPath} alt=""/>
            <Button onClick={submit}>提交</Button>
        </div>
    )
}
export default Add