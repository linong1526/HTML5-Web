/**
 * 接口
 */

//类型别名
// type Point08={
//   x:number
//   y:number
// }
// function printCoord08(pt:Point08){

// }

// 接口 interface
interface Point09{
  x:number
  y:number
}

function printCoord09(pt:Point09){

}

printCoord({
  x:20,
  y:35
})

// 扩展接口
// interface Animal{
//   name:string
// }
// interface Bear extends Animal{
//   honey:boolean
// }
// const bear:Bear={
//   name:'winie',
//   honey:true

// }
// console.log(bear.name)
// console.log(bear.honey)

// type Animal = {
//   name:string
// }
// type Bear = Animal & {
//   honey:boolean
// }
// const bear:Bear={
//   name:'winie',
//   honey:true
// }

// 向现有的类型添加字段
// interface MyWindow {
//   count:number
// }
// interface MyWindow{
//   title:string 
// }
// const w:MyWindow={
//   count:100,
//   title:'hello ts'
// }

// 接口与类型别名的区别
// 类型创建后不能更改
// 标识符“MyWindow”重复
// type MyWindow={
//   title:string 
// }
// type MyWindow ={
//   count:number
// }

