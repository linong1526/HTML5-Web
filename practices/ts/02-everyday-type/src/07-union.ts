/**
 * 联合类型
 */
function printId(id:number | string){
  // 类型“string | number”上不存在属性“toUpperCase”。
  // 类型“number”上不存在属性“toUpperCase”。
  // console.log(id.toUpperCase())

  if(typeof id==='string'){
    // 在此分支汇中，id的类型为‘string’
    console.log(id.toUpperCase())
  }else{
    // 此处，id的类型为“number”
    console.log(id)
  }
}

function welcomePeople(x:string[] | string){
  if(Array.isArray(x)){
    // 此处： ‘x' 的类型是‘string[]’
    console.log("hello,"+ x.join("add"))
  }else{
    // 此处：‘x’ 的类型是 'string'
    console.log("welcome" + x)
  }
}

// 返回类型推断为 number[] | string 
function getFirstThree(x: number[] | string) { 
  return x.slice(0, 3); 
}