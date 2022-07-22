// 第一个 ts
// tsc 文件名
// console.log('hello world')

function greet(person:string,date:Date){
  console.log(`hello ${person},today is ${date}。!`)
}

greet('Iekika',new Date())

let msg = 'hello there!'
msg = 'hello 1'
// msg = 100 // 不能将类型number分配给string