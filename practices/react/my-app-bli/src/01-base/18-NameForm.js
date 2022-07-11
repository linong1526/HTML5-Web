// import React, { Component } from 'react'
// // 非受控组件
// export default class NameForm extends Component {
//   render() {
//     return (
//       <div>
//         18- NameForm
//         <h1>登录页</h1>
//         {/* 
//         在 React 渲染生命周期时，表单元素上的 value 将会覆盖 DOM 节点中的值，在非受控组件中，你经
//         常希望 React 能赋予组件一个初始值，但是不去控制后续的更新。 在这种情况下, 你可以指定一个
//         defaultValue 属性，而不是 value 。
//         <input type="text" value="1111"></input> */}
//         <input type="text" ref={this.myusername} defaultValue="1111"></input>
//         <button onClick={()=>{
//           console.log(this.myusername.current.value)
//         }}>登录</button>
//         <button onClick={()=>{
//           this.myusername.current.value = ''
//         }}>重置</button>

//         {/* 如果是传入一个子组件 状态改变 如何控制*/}
//         {/* <Child myvalue={this.myusername.current.value}></Child> */}
//       </div>
//     )
//   }
// }


// 受控组件
import React, { Component } from 'react'

export default class App extends Component {
    // myusername = React.createRef()

    state = {
        username:"kerwin"
    }
    render() {
        return (
            <div>
                <h1>登录页</h1>
                <input type="text" value={this.state.username} onChange={(evt)=>{
                    console.log("onChange",evt.target.value)

                    this.setState({
                        username:evt.target.value
                    })
                }}/>

                <button onClick={()=>{
                    console.log(this.state.username)
                }}>登录</button>
                <button onClick={()=>{

                    this.setState({
                        username:""
                    })
                }}>重置</button>


                {/* <Child myvalue={this.state.username}/> */}
            </div>
        )
    }
}
