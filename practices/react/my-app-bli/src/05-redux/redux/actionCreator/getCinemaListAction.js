import axios from 'axios'

// function getCinemaListAction(){
//   // axios({
//   //   url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
//   //   method:"get",
//   //   headers:{
//   //       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
        
//   //       'X-Host': 'mall.film-ticket.cinema.list'

//   //   }
//   //   }).then(res=>{
//   //       console.log(res.data.data.cinemas)
//   //       return {
//   //         type:"change-list",
//   //         value:[1,2,3,4]
//   //       }

//   //   })
// // return {
// //   type:"change-list",
// //   value:[1,2,3,4]
// // }
// return (dispatch)=>{
//   axios({
//     url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
//     method:"get",
//     headers:{
//         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
        
//         'X-Host': 'mall.film-ticket.cinema.list'

//     }
//     }).then(res=>{
//         // console.log('getCinemaListAction',res.data.data.cinemas)
//         dispatch({
//           type:"change-list",
//           // value:[1,2,3,4]
//           payload:res.data.data.cinemas
//         })

//     })
// }

// }
async function getCinemaListAction(){

  var list = await  axios({
      url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
      method:"get",
      headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
          
          'X-Host': 'mall.film-ticket.cinema.list'

      }
  }).then(res=>{
      // console.log(res.data.data.cinemas)
      return {
          type:"change-list",
          payload:res.data.data.cinemas
      }
  })

  return list
}

export default getCinemaListAction


// function test(){
//     setTimeout(()=>{
//         return 1000 
//     },2000)

// }

// test()