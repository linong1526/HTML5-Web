import {Fragment, useRef, useState} from 'react'
import {Input,Button} from 'antd'


const Edit = () => {
    const [state, setState] = useState({
        imgPath: ''
    })
    const altRef = useRef()
    const linkRef = useRef()
    const selectImg = () => {

    }
    const submit = () => {

    }
    return (
        <Fragment>
            <h2 style={{textAlign: 'center', margin: '0 0 20px'}}>轮播图修改</h2>
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
        </Fragment>
    )
}

export default Edit