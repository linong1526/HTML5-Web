import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
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
// import App from './02-advanced/02-unControlComponent.js'
// import App from './02-advanced/04-ParentChild-Filed.js'
// import App from './02-advanced/05-RefNameFrom.js'
// import App from './02-advanced/06-intermediary.js'
// import App from './02-advanced/08-PubScribeExm.js'
// import App from './02-advanced/09-context.js'
// import App from './02-advanced/10-slot.js'
// import App from './02-advanced/11-slot2.js'
// import App from './02-advanced/12-Lifecycle-iniit.js'
// import App from './02-advanced/13-lifeCycleExm.js'
// import App from './02-advanced/14-lifeCycle-update.js'
// import App from './02-advanced/15-lifeCycle-update2.js'
// import App from './02-advanced/16-lifeCycleEx.js'
// import App from './02-advanced/17-lifeCycle-update23.js'
// import App from './02-advanced/18-lifeCycle-updateEX.js'
// import App from './02-advanced/19-lifeCycle-destroy.js'
// import App from './02-advanced/20-getDerivedStateFromProps.js'
// import App from './02-advanced/21-getDerivedStateFromPropsEx.js'
// import App from './02-advanced/22-getSnapshotBeforeUpdate.js'
// import App from './02-advanced/23-getSnapshotBeforeUpdateEx.js'
// import App from './02-advanced/25-swiper-Sync.js'
// import App from './02-advanced/26-swiper-Async.js'
// import App from './02-advanced/27-swiperCom.js'
// import App from './03-hooks/01-useState.js'
// import App from './03-hooks/02-todolist.js'
// import App from './03-hooks/03-useEffect.js'
// import App from './03-hooks/04-useEffect2.js'
// import App from './03-hooks/05-useEffect-exm.js'
// import App from './03-hooks/06-useEffect3.js'
// import App from './03-hooks/07-useCallback1.js'
// import App from './03-hooks/08-useCallback2.js'
// import App from './03-hooks/09-useMemo.js'
// import App from './03-hooks/10-useRef.jss'
// import App from './03-hooks/11-useRef2.js'
// import App from './03-hooks/12-useContext.js'
// import App from './03-hooks/14-useReducer2.js'
// import App from './03-hooks/15-useReducer3.js'
// import App from './03-hooks/16-customHook.js'
// import App from './04-router/App.js';

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

// React17版本
// ReactDOM.render(
//   // 严格模式
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//   <App />,
//     document.getElementById('root')
// )

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Expenses from './04-router/router/expenses'
// import Invoices from './04-router/router/invoices';
// import Invoice from './04-router/router/invoice';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<App/>);
// root.render(
//   <BrowserRouter>
//  <Routes>
//   <Route path="/" element={<App />}>
//     <Route path="expenses" element={<Expenses />} />
//     <Route path="invoices" element={<Invoices />} >
//       {/**Index Routes */}
//       <Route
//       index
//       element={
//         <main style={{ padding: "1rem" }}>
//         <p>Select an invoice</p>
//       </main>
//       }
//       />
//       <Route path=":invoiceId" element={<Invoice />}/>
//     </Route>
//     {/* 精确匹配 The "*" has special meaning here. It will match only when no other routes do. */}
//     <Route
//       path="*"
//       element={
//         <main style={{ padding: "1rem" }}>
//           <p>There's nothing here!</p>
//         </main>
//       }
//     />
//   </Route>
// </Routes>
//   </BrowserRouter>
// );

import { BrowserRouter } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
// import App from './04-router/AppRouter'
// import App from './04-router/App.js';
import App from './05-redux/App.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>

  )
// root.render(
//   <HashRouter>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </HashRouter>

//   )