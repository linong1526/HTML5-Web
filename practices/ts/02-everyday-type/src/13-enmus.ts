/**
 * 枚举
 */

/******** 枚举的特性 自增、映射********** */
// 如果不对成员进行初始化赋值，则其值将会从0开始自动递增。
// 自增性
// enum Direction{
//   Up,
//   Down
// }
// console.log(Direction[0]) // 输出 Up
// console.log(Direction[1]) // 输出 Down
// console.log(Direction.Up) // 输出 0
// console.log(Direction.Down) // 输出 1

// 映射性
enum Direction2{
  Up = 1, // 初始值
  Down,
  Left,
  Right
}

console.log(Direction2.Up) // 输出 1
console.log(Direction2.Down) // 输出 2
console.log(Direction2[0]) // undefined
console.log(Direction2[1]) // Up
console.log(Direction2[2]) // Down


// 编译后的js代码 "use strict"; 
// var Direction; 
// (function (Direction) { 
//   Direction[Direction["Up"] = 1] = "Up"; 
//   Direction[Direction["Down"] = 2] = "Down"; 
//   Direction[Direction["Left"] = 3] = "Left"; 
//   Direction[Direction["Right"] = 4] = "Right"; 
// })(Direction || (Direction = {})); 
// console.log(Direction.Up);
// console.log(Direction.Down)

// enum Direction3{
//   Up,
//   U2,
//   Down="下",
//   Left= "左",
//   Right="右"
// }

// console.log(Direction3.Up) // 输出 0
// console.log(Direction3.U2) // 输出 1
// console.log(Direction3.Down) // 输出 "下"
// console.log(Direction3.Left) // 输出 "左"
// console.log(Direction3.Right) // 输出 "右"
// console.log(Direction3[0]) // 输出 Up
// console.log(Direction3[1]) // 输出 U2
// console.log(Direction3[2]) // 输出 undefined
// console.log(Direction3[3])  // 输出 undefined
// // console.log(Direction3["下"]) // 输出 undefined  
// // console.log(Direction3["下"]) // 元素隐式具有 "any" 类型，因为索引表达式的类型不为 "number"。

const firstName = Symbol('name')
const secondName = Symbol('ok')
// if(firstName === secondName){
//   // 此条件将始终返回 "false"，因为类型 "typeof firstName" 和 "typeof secondName" 没有重叠。
//   console.log('ok')
// }