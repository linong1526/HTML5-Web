import React from 'react';
import ReactDOM from 'react-dom';
import './01-base/css/04.css' // y引入外部css样式
// import './01-base/01-class' // ES6 引入自动加载 
// import App from './01-base/01-class'
// import App from './01-base/03-Nesting.js'
// import App from './01-base/04-style.js'
// import App from './01-base/05-event.js'
// import App from './01-base/06-eventbind.js'
// import App from './01-base/08-state.js'
// import App from './01-base/09-render.js'
// import App from './01-base/10-todolist.js'
// import App from './01-base/11-Action.js'
// import App from './01-base/12-setState-Syncawait.js'
// import App from './01-base/13-betterScroll.js'
// import App from './01-base/14-betterScroll.js'
// import App from './01-base/15-props.js'
// import App from './01-base/16-propsFun.js'
// import App from './01-base/17-propsVSstate.js'
// import App from './01-base/18-NameForm.js'
// import App from './02-advanced/01-ChildPropsParent.js'
import App from './02-advanced/02-unControlComponent.js'

// ReactDOM.render(
  // <div>
  //   <h1>1111</h1>
  //   <ul>
  //     <li>111</li>
  //     <li>111</li>
  //     <li>111</li>
  //   </ul>
  // </div>,
//   document.getElementById('root')
// )
// ReactDOM.render(
// React.createElement('div',{id:'app',className:'bbb'},'内容'),
//   document.getElementById('root')
// )
ReactDOM.render(
  // 严格模式
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <App />,
    document.getElementById('root')
)

