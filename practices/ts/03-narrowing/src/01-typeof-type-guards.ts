/**
 * typeof类型守卫 
 */
function printAll01(strs:string | string[] | null){
  if(typeof strs === 'object'){
    for(const s of strs){ // 对象可能为 "null"
      console.log(s)
    }
  }else if(typeof strs === 'string'){
    console.log(strs)
  }else{
    // ...
  }
}