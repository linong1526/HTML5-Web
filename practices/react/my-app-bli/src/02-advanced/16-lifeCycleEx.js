import React, { Component } from 'react'

class Box extends Component{
  // 加上优化性能
  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.current === this.props.index || nextProps.current===nextProps.index){
      return true
    }
    return false // 返回false 阻止render调用
  }
  render(){
    // return <div style={{width:"100px",height:"100px",border:"1px solid gray",margin:"10px",float:"left"}}></div>
    return <div style={{width:"100px",height:"100px",border:this.props.current === this.props.index?"1px solid #64de64":"1px solid gray",margin:"10px",float:"left"}}></div>
  }
}
export default class App extends Component {
  state={
    list:["00","01","02","03","04","05","06","07","08","09"],
    current:0
  }
  render() {
    return (
      <div>
        <input type="number" onChange={(evt)=>{
          this.setState({
            current:Number(evt.target.value)
          })
        }} value={this.state.current}></input>
        <div style={{overflow:"hidden"}}>
          {
            this.state.list.map((item,index)=>
              <Box key={item} current={this.state.current} index={index}></Box>
              )
          }

        </div>
        <Box></Box>
      </div>
    )
  }
}
