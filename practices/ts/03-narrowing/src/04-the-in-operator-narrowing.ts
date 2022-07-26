/**
 * in操作符缩小
 */

type Fish = {swim:()=>void}
type Bird = {fly:()=> void}
type Human = {swim?:()=>void;fly?:()=>void}

// function move(animal:Fish | Bird){
//   if("swim" in animal){
//     // animal:Fish
//     return animal.swim
//   }
//   // animal:Bird
//   return animal.fly()
// }

function move(animal:Fish | Bird | Human){
  if("swim" in animal){
    // animal:Fish | Human
    // 使用类型断言来指定更具体的类型
    return (animal as Fish).swim
  }
  // animal:Bird | Human
  return (animal as Bird).fly()
}