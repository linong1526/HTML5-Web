import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
// Swiper.use([Navigation, Pagination])
export default class App extends Component {
  state ={
    list:["1111","2222","3333"]
  }
  componentDidMount(){
    // 做初始化
    // var mySwiper = new Swiper('.swiper', { /* ... */ });
    new Swiper('.swiper',{
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      modules: [Navigation, Pagination]
    });
    // 即使做了初始化也无效果
    //swiper 官网 - Swiper 英文网 - Get Started
    // By default Swiper exports only core version without additional modules (like Navigation, Pagination, etc.). So you need to import and configure them too:
  }
  render() {
    return (
      <div>
        <div className="swiper" style={{height:'200px',background:'#64de64'}}>
          <div className="swiper-wrapper">
              {
                this.state.list.map(item=>
                  <div className="swiper-slide" key={item}>{item}</div>
                  )
              }
          </div>
          {/* <!-- 如果需要分页器 --> */}
          <div className="swiper-pagination"></div>
          
          {/* <!-- 如果需要导航按钮 --> */}
          {/* <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> */}
          
          {/* <!-- 如果需要滚动条 --> */}
          {/* <div class="swiper-scrollbar"></div> */}
        </div>
      {/* 导航等组件可以放在Swiper容器之外 */}
      </div>
    )
  }
}
