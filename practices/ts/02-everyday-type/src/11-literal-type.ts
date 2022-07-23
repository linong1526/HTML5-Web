/**
 * 文字类型
 */

let testString = 'Hello World'
testString = 'Hi~ Iekika'

const constantString = "Hello World"
// constantString = '' // 无法分配到 "constantString" ，因为它是常数。

let x_11:"hello" = "hello"
// x_11 = 'world' // 报错 不能将类型“"world"”分配给类型“"hello"”。


function printText(s:string,alignment:'left' | 'right' | 'center'){

}
printText('hello','left')
// printText('world','center2') // 类型“"center2"”的参数不能赋给类型“"left" | "right" | "center"”的参数。

function compare(a:string,b:string): -1 | 0 | 1 {
return a===b ? 0 : a>b?1:-1
}

interface Options{
  width:Number
}
function configure(x:Options | 'auto'){

}
configure({
  width:100
})
configure('auto')
// configure('automatic') // 类型“"automatic"”的参数不能赋给类型“Options | "auto"”的参数。

let b1:true = true 
let b2:false = false

// 文字推理
const obj11 = {
  count:0
}
if(true){
  obj11.count = 1
}
/** TypeScript 不假定先前具有的字段值 0 ，后又分配 1 是错误的。
 * 另一种说法是 obj11.count 必须有 `number` 属性， 而非是 0 ，因为类型用于确定读取和写入行为。 */


function handleRequest(url:string,methods:'GET' | 'POST' | 'GUESS'){

}

// const req={
//   url: 'https://example.com',
//   method:'GET'
// }
// handleRequest(req.url,'GET') // printText 所示，直接赋值，没有问题
// handleRequest(req.url,req.method) // req.method报错 类型“string”的参数不能赋给类型“"GET" | "POST" | "GUESS"”的参数。

// 解决：
// 方案一：
// 可以通过在任意位置添加类型断言来更改推理
// ①：
// const req={
//   url: "https://example.com",
//   method:'GET' as 'GET'
// }
// handleRequest(req.url,req.method) 
// ②：
const req = {
  url: "https://example.com",
  // method:'GET'
  method:'POST'
}
handleRequest(req.url,req.method as 'GET')

// 方案二：（推荐）
// 可以使用 `as const`将整个对象转换为类型文字**
// const req={
//   url: 'https://example.com',
//   method:'GET'
// } as const
// handleRequest(req.url,req.method) 

