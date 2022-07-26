/**
 * bigint
 * symbol
 */

const oneHundred:bigint = BigInt(100) //找不到名称“BigInt”。是否需要更改目标库? 请尝试将 “lib” 编译器选项更改为“es2020”或更高版本。
const oneHundred2:bigint = 100n

const firstName14 = Symbol("name")
const secondName14 = Symbol("name")

// if(firstName14 === secondName14){
//   // 此条件将始终返回 "false"，因为类型 "typeof firstName14" 和 "typeof secondName14" 没有重叠。
//   console.log('ok')
// }