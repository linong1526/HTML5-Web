/**
 * null 或 undefined
 */

let x12:undefined = undefined
let y12:null = null

function doSomething(x:string | null){
  if(x===null){
    // do something
  }else{
    console.log('hello,' + x.toUpperCase())
  }
}

function liveDangerouly(x?:number | null){
  console.log(x!.toFixed())

}