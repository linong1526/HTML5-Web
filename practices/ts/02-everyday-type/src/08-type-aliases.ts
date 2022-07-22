type Point={
  x:number
  y:number
}

function printCoord08(pt:Point){

}

printCoord08({
  x:200,
  y:1000
})

type ID = number | string
function printID(id:ID){

}
printID(1000)
printID('hello')

type UserInputSanitizedString = string
function sanitizedInput(str:string):UserInputSanitizedString{
  return str.slice(0,2)
}

let userInput = sanitizedInput('hello')
userInput = 'new Input'
// 不能将类型“number”分配给类型“string” 
// userInput = 100 
