// 参数的类型注释是对象类型
function printCoord(pt:{x:number;y:number}){
  console.log("坐标的x值为： " + pt.x); 
  console.log("坐标的y值为： " + pt.y);
}

printCoord({x:3,y:7})

function printName(obj:{first:string;last?:string}){
  // ...
}
//两种传递参数都可以
printName({first:'Iekika'})
printName({first:'Iekika',last:'kakipi'})

function printName2(obj:{first:string;last?:string}){
  // 错误 - 'obj.last'可能不存在
  console.log(obj.last?.toUpperCase())
  if(obj.last !== undefined){
    // 这样可以
    console.log(obj.last.toUpperCase())
  }
  // 使用现代JavaScript语法的安全替代方案
  console.log(obj.last?.toUpperCase())
}
