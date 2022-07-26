/**
 * 等值缩小
 */

function example(x:string | number,y:string | boolean){
  // string 是 x 和 y 都有的类型，typescript判断它们必然是相等的
  if(x===y){
    x.toUpperCase()
    y.toLowerCase()
  }else{
    console.log(x)
    console.log(y)
  }
}

// function printAll(strs: string | string[] | null) { 
//   // !!!!!!!!!!!!!!!! 
//   // 别这样! 
//   // 原因在下边 
//   // !!!!!!!!!!!!!!!! 
//   if (strs) { 
//     if (typeof strs === "object") { 
//       for (const s of strs) { 
//         console.log(s); 
//       } 
//     } else if (typeof strs === "string") { 
//       console.log(strs); 
//     } 
//   } 
// }

// 解决上面正确方式，应该是使用等值缩小
function printAll(strs: string | string[] | null) { 
  if (strs !== null) { 
    if (typeof strs === "object") { 
      for (const s of strs) { 
        console.log(s); 
      } 
    } else if (typeof strs === "string") { 
      console.log(strs); 
    } 
  } 
}

interface Container {
  value:number | null | undefined
}

function multiplyValue(container:Container,factor:number){
  // if(container.value !== null){
  //   console.log(container.value)
  //   // container.value *= factor
  //    container.value =  container.value * factor // container.value 报错，对象可能为“未定义”
  // }
    if(container.value != null){
    console.log(container.value)
    // container.value *= factor
     container.value =  container.value * factor
  }
}
multiplyValue({ value: 5 }, 6) // 5
multiplyValue({ value: undefined }, 6)// 5
multiplyValue({ value: null }, 6) // 5
// multiplyValue({ value: '5' }, 6) //不能将类型“string”分配给类型“number”