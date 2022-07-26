/**
 * 真值缩小
 * 
 */
//  function printAll02(strs:string | string[] | null){
//   if(typeof strs === 'object'){
//     for(const s of strs){ // 对象可能为 "null"
//       console.log(s)
//     }
//   }else if(typeof strs === 'string'){
//     console.log(strs)
//   }else{
//     // ...
//   }

// 但是真值缩小绝对不可以这样使用，对原语的真值检查通常容易出错
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
// 解决的方案应该如下，可以防范 null 或 undefined之类的值出现错误
function printAll02(strs:string | string[] | null){
  if(strs && typeof strs === 'object'){
    for(const s of strs){
      console.log(s)
    }
  }else if(typeof strs === 'string'){
    console.log(strs)
  }else{
    // ...
  }
}

// 通过布尔否定! 从否定分支中过滤掉
function multiplyAll(values:number[] | undefined,factor:number):number[] | undefined {
  if(!values) {
    return values;
  }else {
    return values.map((x)=>x*factor)
  }
}
console.log(multiplyAll([3,4],2)) // [6,8]
console.log(multiplyAll(undefined,2)) // undefined
