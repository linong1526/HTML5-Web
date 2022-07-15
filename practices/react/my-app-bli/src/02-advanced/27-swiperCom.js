import React, { Component } from 'react'
import AppSwiper from './swiper'
import SwiperItem from './swiper/SwiperItem'

// import axios from 'axios'
export default class App extends Component {

    state = {
        list:[]
    }

    componentDidMount() {
      console.log('componentDidMount')
        setTimeout(()=>{
            this.setState({
                list:["aaaa","bbbb","Cccccc","ddddd"]
            })
        },1000)

        // axios({
        //     url:"https://m.maizuo.com/gateway?type=2&cityId=110100&k=7398342",
        //     headers:{
        //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
        //         'X-Host': 'mall.cfg.common-banner'
        //     }
        // }).then(res=>{
        //     console.log(res.data.data)
        //     this.setState({
        //         list:res.data.data
        //     })

        // })
        console.log('state',this.state)
    }
    

    render() {
      console.log('render',this.state)
        return (
            <div>
                <AppSwiper loop={true}>
                    {/* <div class="swiper-slide">444</div> */}
                    {
                      this.state.list.map(item=>
                        <SwiperItem key={item}>{item}</SwiperItem>
                        )
                    }
                    
                    {/* {
                        this.state.list.map(item=>
                        <SwiperItem key={item.bannerId}>
                            <img src={item.imgUrl} alt={item.name} style={{width:"100%"}}/>
                        </SwiperItem>
                        )
                    } */}
                </AppSwiper>
            </div>
        )
    }
}
