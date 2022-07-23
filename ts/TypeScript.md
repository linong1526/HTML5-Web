> EMSccript 是JavaScipt的标准，TypeScript是JavaScript的超集

# ts入门

## tsc编译器

类型检查器需要安装，需要通过`npm`获取，全局安装

```ssh
npm install -g typescript
```

`o1-ts-base/hello.ts`

```tsx
// 体验 ts
console.log("hello world")
```

注意：这里的“hello world” 和Javascipt中的相同。现在通过运行`tsc`由typescript包为我们打包编译它：

```ssh
01-ts-basics $ tsc hello.ts
```

控制台没有任何输出，但是我们的文件中有`hello.js`与`hello.ts`。

<font color=orang>我们的`hello.ts`文件在`tsc`编译或转换为纯JavaScript文件后的输出。</font>

如果编写的类型错误，类型检查可以帮助我们发现代码的其他问题

```tsx
console.log('hello world')

function greet(person,date){
  console.log(`hello ${person},today is ${date}!`)
}

greet('Iekika')
```

![](https://i0.hdslb.com/bfs/album/59601f04711f2b16bfd68695f5f719be7d7e53cf.png)

## 发生错误

上面的例子，类型错误之后，我们发现，编写更改`hello.ts`文件，`hello.js`的内容自从发生错误之后不会再变化。这种情况下，我们该怎么做？请看看优化编译。

## 优化编译

#### 1. 解决TS和JS冲突问题

```ssh
tsc --init
# 生成配置文件
```

#### 2. 自动编译

```ssh
tsc --watch
```

#### 3. 发生错误

```ssh
tsc --noEmitOnError helllo.ts
```

## 显式类型

```tsx
function greet(person:string,date:Date){
  console.log(`hello ${person},today is ${date}。!`)
}

greet('Iekika',new Date())

let msg = 'hello there!'
msg = 'hello 1'
// msg = 100 // 不能将类型number分配给string
```

## 降级编译

```json
// tsconfig.json
/* Language and Environment*/
"target":"es5"
```

## 严格模式

```json
// tsconfig.json
/* Type Checking */
"strict":true,
"noTmplicitAny":true,
"stricNullChecks":true
```

# 常用类型

## TypeScript配置文件

应用`tsc`生成配置文件：

```
$ tsc --init
```

在根目录下生成一个配置文件`tsconfig.json`。配置如下：

```json
{ 
    "compilerOptions": {
        /* Language and Environment */ 
        "target": "es6", 
        /* Modules */ 
        "rootDir": "./src", 
        /* Emit */ 
        "outDir": "./dist",
        /* Type Checking */ 
        "strict": true, 
    } 
}
```

根目录下执行`tsc --watch`，可以看到多出了一个dist文件夹

## 基本类型

* string
* number
* boolean

```typescript
let str:string = "Hello typescript"
let num:number = 100
let bool:boolean = false
```

## 数组

```typescript
let arr:number[] = [1,2,3]
let arr2:Array<number> = [1,2,3]
```

## any

```typescript
let obj:any = {
  x:10
}
// 以下代码行都不会抛出编译错误
// 使用 'any' 将禁用所有进一步的类型检查

obj.foo()
obj()
obj.bar = 100
obj = "hello"
const n:number = obj
```

## 变量上的类型注释

当你使用 const , var , 或声明变量时 let ，可以选择添加类型注释来显式指定变量的类型：

```typescript
let myName:string = "Iekika"
```

> TypeScript 不使用“左边的类型”风格的声明，比如 `int x = 0`；类型注释总是在被输入的东西之后

但是，在大多数情况下，这不是必需的。只要有可能，TypeScript 就会尝试自动推断代码中的类型。例 如，变量的类型是根据其初始化器的类型推断出来的：

```typescript
// 不需要类型定义--“myName”推断为类型“string” 
let myName = "Felixlu";
```

## 函数

![](https://i0.hdslb.com/bfs/album/7760254fa86c62ef1fe4bafb8905774e1ae70387.png)

* 参数类型注释

  声明函数时，可以在每个参数后添加类型注解，以声明函数接受的参数类型。参数类型注释位于参数名 称之后

  ```typescript
  // 参数类型定义
  function greet(name:string){
    console.log('hello' + name.toUpperCase() + "!!")
  }
  
  // 当参数具有类型注释时，将检查该函数的参数：
  // 执行 运行时错误
  greet(18)
  
  
  // 没有类型注释 提示参数“name”隐式具有any类型
  function greet(name){
    console.log('hello' + name.toUpperCase() + "!!")
  }
  // 执行 运行时错误
  greet(18)
  ```

  > 即使您的参数上没有类型注释，TypeScript 仍会检查您是否传递了正确数量的参数。 

* 返回类型注释

  你还可以添加返回类型注释。返回类型注释出现在参数列表之后： 

  ```typescript
  function greet(){
      return 26
  }
  function greet():number{
      return 26
  }
  ```

  与变量类型注释非常相似，通常不需要返回类型注释，因为 TypeScript 会根据其 return 语句推断函数 的返回类型。

  上面例子中的类型注释不会改变任何东西。某些代码库会出于文档目的明确指定返回类 型，以防止意外更改或仅出于个人偏好。 

* 匿名函数

  匿名函数与函数声明有点不同。当一个函数出现在 TypeScript 可以确定它将如何被调用的地方时，该函 

  数的参数会自动指定类型。

  ```typescript
  // 这里没有类型注释，但是TypeScript可以发现错误
  const names = ["Alice","Bob","Eve"]
  // 函数上下文类型
  names.forEach((s)=>{
     // 属性“toUppercase”在类型“string”上不存在。你是否指的是“toUpperCase”?
      console.log(s.toUppercase())
  })
  ```

  <font color=gray>即使参数 `s` 没有类型注释，TypeScript 也会使用 forEach 函数的类型，以及数组的推断类型来确定` s `的 类型。</font>

  这个过程称为上下文类型，因为函数发生在其中的上下文通知它应该具有什么类型。 

  与推理规则类似，你不需要明确了解这是如何发生的，但了解它的机制确实可以帮助你注意何时不需要 类型注释。稍后，我们将看到更多关于值出现的上下文如何影响其类型的示例。

## 对象类型

![](https://i0.hdslb.com/bfs/album/ba0dcd62a23e85f96905ee2312d39832f0affe9a.png)

除了 string ， number ， boolean 类型（又称基元类型）外，你将遇到的最常见的类型是对象类型。 

这指的是任何带有属性的 JavaScript 值，几乎是所有属性！要定义对象类型，我们只需列出其属性及其类型。

例如，这是一个接受点状对象的函数：

```typescript
// 参数的类型注释是对象类型
function printCoord(pt:{x:number;y:number}){
  console.log("坐标的x值为： " + pt.x); 
  console.log("坐标的y值为： " + pt.y);
}

printCoord({x:3,y:7})
```

在这里，我们使用具有两个属性的类型注释参数 `- x` 和` y -`这两个属性都是 `number` 类型。你可以以使用 `,` 或 `;` 来分隔属性，最后一个分隔符是可选的。

每个属性的类型部分也是可选的。如果你不指定类型，则将假定为 any 。 

* 可选属性

  对象类型还可以指定其部分或全部属性是可选的。为此，请在属性名称后添加一个 <font color=oran>`?`</font> ： 

  ```typescript
  function printName(obj: { first: string; last?: string }) { 
      // ... 
  }
  // 两种传递参数都可以 
  printName({ first: "Felix" }); 
  printName({ first: "Felix", last: "Lu" });
  ```

  在 JavaScript 中，如果访问一个不存在的属性，将获得值 undefined 而不是运行时错误。因此，当你读取可选属性时，必须使用它之前用 undefined 进行检查。

  ```typescript
  function printName(obj: { first: string; last?: string }) { 
      // 错误 - 'obj.last' 可能不存在! 
      console.log(obj.last.toUpperCase()); 
      if (obj.last !== undefined) { 
          // 这样可以 
          console.log(obj.last.toUpperCase());
      }
      // 使用现代JavaScript语法的安全替代方案：
      console.log(obj.last?.toUpperCase()); 
  }
  ```

## 联合类型

![](https://i0.hdslb.com/bfs/album/ad3619d5b251b477225fcf6eef636bd7d3ce7350.png)

TypeScript 的类型系统允许你使用多种运算符，从现有类型中构建新类型。现在我们知道如何编写几种类型，是时候开始以有趣的方式组合它们了。 

* 定义联合类型

  第一种组合类型的方法是联合类型。联合类型是由两个或多个其他类型组成的类型，表示可能是这些类型中的任何一种的值。我们将这些类型中的每一种称为联合类型的成员。

  让我们编写一个可以对字符串或数字进行操作的函数：

  ```typescript
  function printId(id: number | string) {
      console.log("Your ID is: " + id); 
  }
  // 正确 
  printId(101); 
  // 正确 
  printId("202"); 
  // 错误 
  printId({ myID: 22342 });
  ```

* 使用联合类型

  提供匹配联合类型的值很容易- 只需提供匹配任何联合成员的类型。如果你有一个联合类型的值，你如何使用它？ 

  如果联合的每个成员都有效，TypeScript 将只允许你使用联合做一些事情。

  例如，如果你有联合类型 `string | number `，则不能只使用一种类型的操作，比如 string ： 

  ```typescript
  function printId(id: number | string) {
      console.log(id.toUpperCase()); 
  }
  ```

  解决方案是用代码缩小联合，就像在没有类型注释的 JavaScript 中一样。 当 TypeScript 可以根据代码结构为值推断出更具体的类型时，就会发生缩小。 

  例如，TypeScript 知道只有一个 `string` 值才会有一个 typeof 值 `"string"`： 

  ```typescript
  function printId(id: number | string) {
      if (typeof id === "string") { 
          // 在此分支中，id的类型为“string”
          console.log(id.toUpperCase()); 
      } else { 
          // 此处，id的类型为“number”
          console.log(id); 
      } 
  }
  ```

  另一个例子是使用如下函数 `Array.isArray` ：

  ```typescript
  function welcomePeople(x: string[] | string) {
      if (Array.isArray(x)) { 
          // 此处: 'x' 的类型是 'string[]'
          console.log("Hello, " + x.join(" and ")); 
      } else { 
          // 此处: 'x' 的类型是 'string'
          console.log("Welcome lone traveler " + x); 
      } 
  }
  ```

  请注意，在 else 分支中，我们不需要做任何特别的事情——如果 x 不是 `string[]` ，那么它一定是 `string` 。 

  有时你会有一个 `union` ，所有成员都有一些共同点。例如，数组和字符串都有一个 slice 方法。如果联 合中的每个成员都有一个共同的属性，则可以使用该属性而不会缩小范围： 

  ```typescript
  // 返回类型推断为 number[] | string 
  function getFirstThree(x: number[] | string) {
      return x.slice(0, 3); 
  }
  ```

## 类型别名

![](https://i0.hdslb.com/bfs/album/733852a8872d0cf60b0c9cc7e3e270517fbe62e7.png)

我们一直在通过直接在类型注释中编写对象类型和联合类型来使用它们。这很方便，但是想要多次使用同一个类型，并用一个名称来引用它是很常见的。 

一个类型别名正是一个名称为任何类型的定义。类型别名的语法是： 

```typescript
type Point = { x: number; y: number; };
// 与前面的示例完全相同 
function printCoord(pt: Point) { 
    console.log("坐标x的值是： " + pt.x);
    console.log("坐标y的值是： " + pt.y);
}
printCoord({ x: 100, y: 100 });
```

实际上，你可以使用类型别名为任何类型命名，而不仅仅是对象类型。例如，类型别名可以命名联合类型： 

```typescript
type ID = number | string;
function printID(id:ID){
    // ...
}
printID(1000)
printID('hello')

```

请注意，别名只是别名 - 你不能使用类型别名来创建相同类型的不同“版本”。当你使用别名时，就像你编写了别名类型一样。换句话说，这段代码可能看起来不合法，但根据 TypeScript 是可以的，因为这两种类型都是同一类型的别名：

```typescript
type UserInputSanitizedString = string;
function sanitizeInput(str: string):UserInputSanitizedString { 
    return str.slice(0, 2) 
}
// 创建经过 sanitize 的输入 
let userInput = sanitizeInput('hello'); 
// 但仍可以使用字符串重新分配值 
userInput = "new input";
// 不能将类型“number”分配给类型“string” 
// userInput = 100 
```

## 接口

![](https://i0.hdslb.com/bfs/album/3b05cf97ec111769d0879a1f232b26c120c35750.png)

一个接口声明是另一种方式来命名对象类型:

```typescript
interface Point { 
    x: number; y: number; 
}
function printCoord(pt: Point) {
    console.log("坐标x的值是： " + pt.x);
    console.log("坐标y的值是： " + pt.y);
}
printCoord({ x: 100, y: 100 });
```

就像我们在上面使用类型别名时一样，该示例就像我们使用了匿名对象类型一样工作。TypeScript 只关心我们传递给的值的结构 `printCoord` ——它只关心它是否具有预期的属性。只关心类型的结构和功能，是我们将 TypeScript 称为结构类型类型系统的原因。 

* 类型别名和接口之间的差异 

  类型别名与接口非常相似,在很多情况下你可以自由选择它们，几乎所有的功能都在`interface`中可用`type`，关键区别在于扩展新类型的方式不同:

  ```typescript
  // 扩展接口 
  interface Animal { 
      name: string 
  }
  interface Bear extends Animal { 
      honey: boolean 
  }
  const bear: Bear = { 
      name: 'winnie', 
      honey: true 
  }
  bear.name 
  bear.honey
  ```

  ```typescript
  // 通过交叉点扩展类型
  type Animal = {
      name: string 
  }
  type Bear = Animal & { 
      honey: boolean 
  }
  const bear: Bear = { 
      name: 'winnie', 
      honey: true 
  }
  bear.name; 
  bear.honey;
  ```

  

  ```typescript
  // 向现有接口添加新字段 
  interface MyWindow { 
      title: string 
  }
  interface MyWindow { 
      count: number 
  }
  const w: MyWindow = { 
      title: 'hello ts', 
      count: 100 
  }
  ```

  ```typescript
  // 类型创建后不可更改 
  type MyWindow = { // 标识符“MyWindow”重复
      title: string 
  }
  type MyWindow = {  // 标识符“MyWindow”重复
      count: number 
  }
  ```

  > * 在 TypeScript 4.2 版之前，类型别名[可能出现在错误消息中](https://www.typescriptlang.org/play?#code/PTAEGEHsFsAcEsA2BTATqNrLusgzngIYDm+oA7koqIYuYQJ56gCueyoAUCKAC4AWHAHaFcoSADMaQ0PCG80EwgGNkALk6c5C1EtWgAsqOi1QAb06groEbjWg8vVHOKcAvpokshy3vEgyyMr8kEbQJogAFND2YREAlOaW1soBeJAoAHSIkMTRmbbI8e6aPMiZxJmgACqCGKhY6ABGyDnkFFQ0dIzMbBwCwqIccabcYLyQoKjIEmh8kwN8DLAc5PzwwbLMyAAeK77IACYaQSEjUWZWhfYAjABMAMwALA+gbsVjoADqgjKESytQPxCHghAByXigYgBfr8LAsYj8aQMUASbDQcRSExCeCwFiIQh+AKfAYyBiQFgOPyIaikSGLQo0Zj-aazaY+dSaXjLDgAGXgAC9CKhDqAALxJaw2Ib2RzOISuDycLw+ImBYKQflCkWRRD2LXCw6JCxS1JCdJZHJ5RAFIbFJU8ADKC3WzEcnVZaGYE1ABpFnFOmsFhsil2uoHuzwArO9SmAAEIsSFrZB-GgAjjA5gtVN8VCEc1o1C4Q4AGlR2AwO1EsBQoAAbvB-gJ4HhPgB5aDwem-Ph1TCV3AEEirTp4ELtRbTPD4vwKjOfAuioSQHuDXBcnmgACC+eCONFEs73YAPGGZVT5cRyyhiHh7AAON7lsG3vBggB8XGV3l8-nVISOgghxoLq9i7io-AHsayRWGaFrlFauq2rg9qaIGQHwCBqChtKdgRo8TxRjeyB3o+7xAA)，有时会代替等效的匿名类型 （这可能是可取的，也可能是不可取的）。接口将始终在错误消息中命名。
  > * 类型别名可能不参与[声明合并，但是接口可以](https://www.typescriptlang.org/play?#code/PTAEEEDtQS0gXApgJwGYEMDGjSfdAIx2UQFoB7AB0UkQBMAoEUfO0Wgd1ADd0AbAK6IAzizp16ALgYM4SNFhwBZdAFtV-UAG8GoPaADmNAcMmhh8ZHAMMAvjLkoM2UCvWad+0ARL0A-GYWVpA29gyY5JAWLJAwGnxmbvGgALzauvpGkCZmAEQAjABMAMwALLkANBl6zABi6DB8okR4Jjg+iPSgABboovDk3jjo5pbW1d6+dGb5djLwAJ7UoABKiJTwjThpnpnGpqPBoTLMAJrkArj4kOTwYmycPOhW6AR8IrDQ8N04wmo4HHQCwYi2Waw2W1S6S8HX8gTGITsQA)
  > * 接口只能用于[声明对象的状态，不能重命名基元](https://www.typescriptlang.org/play#code/PTAEAkFMCdIcgM6gC4HcD2pIA8CGBbABwBtIl0AzUAKBFAFcEBLAOwHMUBPQs0XFgCahWyGBVwBjMrTDJMAshOhMARpD4tQ6FQCtIE5DWoixk9QEEWAeV37kARlABvaqDegAbrmL1IALlAEZGV2agBfampkbgtrWwMAJlAAXmdXdy8ff0Dg1jZwyLoAVWZ2Lh5QVHUJflAlSFxROsY5fFAWAmk6CnRoLGwmILzQQmV8JmQmDzI-SOiKgGV+CaYAL0gBBdyy1KCQ-Pn1AFFplgA5enw1PtSWS+vCsAAVAAtB4QQWOEMKBuYVUiVCYvYQsUTQcRSBDGMGmKSgAAa-VEgiQe2GLgKQA)
  > * 接口名称将[始终以其原始形式出现在](https://www.typescriptlang.org/play#code/PTAEGEHsFsAcEsA2BTATqNrLusgzngIYDm+oA7koqIYuYQJ56gCueyoAUCKAC4AWHAHaFcoSADMaQ0PCG80EwgGNkALk6c5C1EtWgAsqOi1QAb06groEbjWg8vVHOKcAvpokshy3vEgyyMr8kEbQJogAFND2YREAlOaW1soBeJAoAHSIkMTRmbbI8e6aPMiZxJmgACqCGKhY6ABGyDnkFFQ0dIzMbBwCwqIccabcYLyQoKjIEmh8kwN8DLAc5PzwwbLMyAAeK77IACYaQSEjUWY2Q-YAjABMAMwALA+gbsVjNXW8yxySoAADaAA0CCaZbPh1XYqXgOIY0ZgmcK0AA0nyaLFhhGY8F4AHJmEJILCWsgZId4NNfIgGFdcIcUTVfgBlZTOWC8T7kAJ42G4eT+GS42QyRaYbCgXAEEguTzeXyCjDBSAAQSE8Ai0Xsl0K9kcziExDeiQs1lAqSE6SyOTy0AKQ2KHk4p1V6s1OuuoHuzwArMagA)错误消息中，但仅当它们按名称使用时。
  >
  > 大多数情况下，你可以根据个人喜好进行选择，TypeScript 会告诉你是否需要其他类型的声明。 
  >
  > 如果您想要启发式，请使用 interface ，然后在需要时使用 type 。


## 类型断言

![](https://i0.hdslb.com/bfs/album/508885dde7fb579ac944e48cc08858a6506fb1e7.png)

有时，你会获得有关TypeScript不知道的值类型的信息。

例如，如果你正在使用 document.getElementById ，TypeScript 只知道这将返回某种类型的 `HTMLElement` ，但你可能知道你的页面将始终具有 `HTMLCanvasElement` 给定 ID 的值 。 

在这种情况下，你可以使用类型断言来指定更具体的类型：

```typescript
const myCanvas = document.getElementById('mian_canvas') as HTMLCanvasElment
```

  与类型注释一样，类型断言由编译器删除，不会影响代码的运行时行为。

还可以使用尖括号语法(除非代码在`.tsx`文件中)，它是等效的：

```typescript
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas")
```

> 提醒：因为类型断言在编译时被移除，所以没有与类型断言相关联的运行时检查。 `null` 如果类型 断言错误，则不会出现异常。

TypeScript 只允许类型断言转换为更具体或不太具体的类型版本。此规则可防止“不可能”的强制，例如： 

```typescript
const x = "hello" as number;
```

将类型 `string` 转换为类型 `number` 可能是错误的，因为两种类型都没有充分重叠。如果这是有意的，请 先将表达式转换为 `any` 或 `unknown` （ unknown ，我们将在后面介绍），然后是所需的类型：

```typescript
const x = ("hello" as nuknown) as number
```

## 文字类型

除了一般类型 string 和 number ，我们可以在类型位置引用特定的字符串和数字。 

一种方法是考虑 JavaScript 如何以不同的方式声明变量。 `var` 而 `let `两者都允许更改变量中保存的内容， const 不允许，这反映在 TypeScript 如何为文字创建类型上。

```typescript
let testString = "hello World"
testString = "Hi~"

// testString 可以表示任何可能的字符串，那
// TypeScript是如何在类型系统描述它的
testString

const constantString = "Hello world"
constantString = '' // 报错 无法分配到 "constantString" ，因为它是常数。
// 因为"constanString"只能表示1个可能的字符串，所以
// 具有文本类表示
constantString
```

就其本身而言，文字类型并不是很有价值： 

```typescript
let x: "hello" = "hello";
// 正确 
x = "hello";
// 错误  ----报错 不能将类型“"howdy"”分配给类型“"hello"”。
x = "howdy";
```

拥有一个只能有一个值的变量并没有多大用处！ 

但是通过将文字组合成联合，你可以表达一个更有用的概念——例如，只接受一组特定已知值的函数： 

```typescript
function printText(s: string, alignment: "left" | "right" | "center") { 
    // ... 
}
// printText("Hello, world", "left");
printText("G'day, mate", "centre"); // 类型“"centre"”的参数不能赋给类型“"left" | "right" | "center"”的参数。
```

数字文字类型的工作方式相同：

```typescript
function compare(a: string, b: string): -1 | 0 | 1 { 
    return a === b ? 0 : a > b ? 1 : -1; 
}
```

当然，你可以将这些与非文字类型结合使用： 

```typescript
interface Options { 
    width: number; 
}
function configure(x: Options | "auto") {
    // ... 
}
configure({ width: 100 }); 
configure("auto"); 
configure("automatic");
```

还有一种文字类型：布尔文字。只有两种布尔文字类型，它们是类型 true 和 false 。类型 `boolean` 本身实际上只是联合类型 `union` 的别名 true | false 。

* 文字推理

  当你使用对象初始化变量时，TypeScript假定该对象的属性稍后可能会改变，例如，如果你写了这样的代码：

  ```typescript
  const obj = {counter:0}
  if(someCondition){
      obj.counter = 1
  }
  ```

  TypeScript 不假定先前具有的字段值 0 ，后又分配 1 是错误的。另一种说法是 obj.counter 必须有 `number` 属性， 而非是 0 ，因为类型用于确定读取和写入行为。 

  这同样适用字符串：

  ```typescript
  function handleRequest(url:string,method:'GET' | 'POST' | 'GUESS'){
      // ...
  }
  const req = { url: 'https://example.com', method: 'GET' };
  handleRequest(req.url, req.method);
  ```

  在上面的例子 req.method 中推断是 string ，不是 `"GET"` 。因为代码可以在创建 req 和调用之间进行 

  评估，TypeScript 认为这段代码有错误。

  

  有两种方法可以解决这个问题。

  **1. 可以通过在任意位置添加类型断言来更改推理**：

  ```typescript
  // 方案 1: 
  const req = { url: "https://example.com", method: "GET" as "GET" };
  // 方案 2 
  handleRequest(req.url, req.method as "GET");
  ```

  方案 1 表示“我打算 `req.method` 始终拥有文字类型 `"GET" `”，从而防止之后可能分配 "GUESS" 给该字 

  段。 

  方案 2 的意思是“我知道其他原因 `req.method` 具有 `"GET"` 值”。 

  **2. 可以使用 `as const`将整个对象转换为类型文字**：

  ```typescript
  const req = { url: "https://example.com", method: "GET" } as const
  handleRequest(req.url, req.method);
  ```

  该 `as const` 后缀就像 const 定义，确保所有属性分配的文本类型，而不是一个更一般的 `string` 或 `number` 。 

## null 和 undefined

JavaScript 有两个原始值用于表示不存在或未初始化的值：`null` 和 `undefined`

TypeScript有两个对应的同名类型。这些类型的行为取决于您是否设置`[strictNullChecks](https://www.typescriptlang.org/zh/tsconfig#strictNullChecks)选择。

* `strictNullChecks`关闭

  使用*false*，仍然可以正常访问的值，并且可以将值分配给任何类型的属性。这类似于没有空检查的语言 例如 C#、Java）的行为方式。缺乏对这些值的检查往往是错误的主要来源；如果在他们的代码库中这样做可行，我们总是建议大家打开。 

* `strictNullChecks`打开

  使用*true*，你需要在对该值使用方法或属性之前测试这些值。就像在使用可选属性之前检查一样，我们可以使用缩小来检查可能的值：

  ```typescript
  function doSomething(x: string | null) { 
      if (x === null) { 
          // 做一些事 
      } else { 
          console.log("Hello, " + x.toUpperCase()); 
      } 
  }
  ```

   

* 非空断言运算符(!后缀)

  TypeScript 也有一种特殊的语法 `null` ， `undefined` ，可以在不进行任何显式检查的情况下，从类型中移除和移除类型。 ! 在任何表达式之后写入实际上是一种类型断言，即该值不是 `null or undefined` ： 

  ```typescript
  function liveDangerously(x?: number | null) { 
  // 正确 
  console.log(x!.toFixed()); 
  }
  ```

  就像其他类型断言一样，这不会更改代码的运行时行为，因此仅 `!` 当你知道该值不能是 `null` 或 `undefined `时使用才是重要的。 

## 枚举

枚举是TypeScirpt添加JavaScript的一项功能，它允许描述一个值，该值可能是一组的命名常量之一。与大多数TypeScript功能不同，这不是JavaScript的类型级别的添加，而是添加到语言和运行时的内容。因此，你确定需要枚举在做些事情，否则请不要使用，可以在[Enum 参考页中](https://www.typescriptlang.org/docs/handbook/enums.html)阅读有关枚举的更多信息。

```typescript
// ts源码 
// 枚举特性 自增、映射
enum Direction { 
    Up = 1, 
    Down, 
    Left, 
    Right, 
}
console.log(Direction.Up) // 1
console.log(Direction.Down) // 2
console.log(Direction[0]) // undefined
console.log(Direction[1]) // Up
console.log(Direction[2]) // Down
```

```javascript
// 编译后的js代码 
"use strict";
var Direction; 
(function (Direction) { Direction[Direction["Up"] = 1] = "Up";         Direction[Direction["Down"] = 2] = "Down";     Direction[Direction["Left"] = 3] = "Left";     Direction[Direction["Right"] = 4] = "Right"; 
})(Direction || (Direction = {})); 
console.log(Direction.Up);
...
```

## 不太常见的原语

值得一提的是JavaScript中一些较新的原语，它们在TypeScript类型系统中也实现了。我们先简单看两个例子：

* bigint

  从 ES2020 开始，JavaScirpt中有一个用于非常大整数原语`BigInt`:

  ```typescript
  // 通过bigint函数创建bigint
  const oneHundred:bigint = BigInt(100)
  // 通过文本语法创建BigInt
  const anotherHundred:bigint = 100n
  ```

  你可以[在TypeScript 3.2 发行说明 中](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint)了解有关 BigInt 的更多信息。

* symbol

  JavaScript中有一个原语`Symbol()`，用于通过函数创建全局唯一引用：

  ```typescript
  const firstName = Symbol("name"); 
  const secondName = Symbol("name")
  if (firstName === secondName) { // 这里的代码不可能执行 }
  ```

# 类型缩小

> 类型缩小:宽类型转化为窄类型的过程
>
> 常用于处理联合类型变量的场景

![](https://i0.hdslb.com/bfs/album/9e5e56324caaaa8584c1c2031c8d095a6ea60321.png)

假设我们有一个名为`padLeft`的函数:

```typescript
function paLeft(padding:number | string,input:string):string{
    throw new Error("尚未实现!")
}
```

我们来扩充一下功能：如果`padding`是·`number`,它会将其视为我们想要添加到`input`的空格·数·；如果`padding`是`string`，它只在`input`上做`padding`，让我们尝试实现：

```typescript
function padLeft(padding:number | string,input:string){
    return new Array(padding + 1).join(" ") + input
}
```

在 padding + 1 处我们遇到错误。。TypeScript 警告我们，运算符 + 不能应用于类型 `string | number` 和` number` ，这是对的。换句话说，我们没有明确检查 padding 是否为 number ，也没有处理 

它是 string 的情况，所以我们这样做： 

```typescript
function padLeft(padding:number | string,input:string){
    if(typeof padding === "number"){
        return new Array(padding + 1).join(" ") + input;
    }
    return padding + input
}
```

如果这大部分看起来像无趣的JavaScript代码，这也算是重点吧。除了我们设置的注解之外，这段TypeScript代码看起来就像JavaScript。我们的想法是，TypeScript的类型系统旨在使编写典型的JavaScript代码变得尽可能容易，而不需要弯腰去获得类型安全。

虽然看起来不多，但实际上有很多东西在这里。就像TypeScript使用静态类型分析运行时的值一样，它 在JavaScript的运行时控制流构造上叠加了类型分析，如if/else、条件三元组、循环、真实性检查等，这些都会影响到这些类型。 

在我们的if检查中，TypeScript看到` typeof padding ==="number"` ，并将其理解为一种特殊形式的代码，称为类型保护。TypeScript遵循我们的程序可能采取的执行路径，以分析一个值在特定位置的最具体的可能类型。它查看这些特殊的检查（称为类型防护）和赋值，将类型细化为比声明的更具体的类型的过程被称为缩小。在许多编辑器中，我们可以观察这些类型的变化，我们甚至会在我们的例子中这样做。 

TypeScript 可以理解几种不同的缩小结构。 

## typeof类型守卫

正如我们所见，JavaScript 支持一个 `typeof` 运算符，它可以提供有关我们在运行时拥有的值类型的非常基本的信息。TypeScript 期望它返回一组特定的字符串： 

* `"string"`
* `"number"`
* `"bigint"`
* `"boolean"`
* `"symbol"`
* `"undefined"`
* `"object"`
* `"function"`

就像我们在padLeft中看到的那样，这个运算符经常出现在许多JavaScript库中，TypeScript可以理解为，它缩小在不停分支中的类型。

在 TypeScript 中，检查 typeof 的返回值是一种类型保护。因为 TypeScript 对 typeof 操作进行编码，从而返回不同的值，所以它知道对 JavaScript 做了什么。例如，请注意在上面的列表中， typeof 不返回 string `null` 。查看以下示例：

```typescript
function printAll(strs:string | string[] | null){
    if(typeof strs === "object"){
        for(const s of strs){
            console.log(s)
        }
    }else if(typeof strs === "string"){
        console.log(strs)
    }else{
        // do something
    }
}
```

在 printAll 函数中，我们尝试检查 strs 是否为对象，来代替检查它是否为数组类型（现在可能是强调数组是 JavaScript 中的对象类型的好时机）。但事实证明，在 JavaScript 中， `typeof null` 实际上也是 "object" ! 这是历史上的不幸事故之一。 

有足够经验的用户可能不会感到惊讶，但并不是每个人都在 JavaScript 中遇到过这种情况；幸运的是，typescript 让我们知道， strs 只缩小到 `string[] | null `，而不仅仅是 `string[]` 。

这可能是我们所谓的“真实性”检查的一个很好的过渡。

## 真值缩小

真值检查是我们在JavaScript中经常做的一件事。在JavaScript中，我们可以在`条件`、`&&`、`||`、`if`语句、布尔否定(`!`)等中使用任何表达式。例如，`if`语句不希望它们的条件总是具有类型`boolean`。

```typescript
function getUserOnlineMessage(numUserOnline:number){
    if(numUserOnline){
        return '现在共有 ${numUserOnline}人在线！'
    }
    return "现在没有人在线。:("
}
```

在 JavaScript 中，像这样的 if 条件语句，首先将它们的条件“强制”转化为 boolean 以使其有意义，然后根据结果是 true 还是 false 来选择它们的分支。像这面这些值： 

* `0`
* `NaN`
* `""`（空字符串）
* `On`(`bigint`零的版本)
* `null`
* `undefined`

**以上所有值强制都转换为 false **，其他值被强制转化为 true 。你始终可以在 Boolean 函数中运行值获得 boolean ，或使用较短的双布尔否定将值强制转换为 boolean 。（后者的优点是 TypeScript 推断出一个狭窄的文字布尔类型 true ，而将第一个推断为 boolean 类型。）

 ```typescript
// 这两个结果都返回 true 
Boolean("hello"); // type: boolean, value: true
!!"world"; // type: true, value: true
 ```

利用这种行为是相当流行的，尤其是在防范诸如 null 或 undefined 之类的值时。例如，让我们尝试将它用于我们的 printAll 函数。 

```typescript
function printAll(str:string | string[] |null){
    // if (typeof strs === "object") {
    if(strs && typeof strs === "object"){
        for(const s of strs){
            console.log(s)
        }
    }else if(type strs === "string"){
        console.log(strs)
    }
}
```

<font color= \#00A600 >你会注意到我们已经通过检查 strs 是否为真，消除了上述错误</font>。这至少可以防止我们在运行代码时出现可怕的错误，例如： 

```
TypeError: null is not iterable
```

但请记住，对原语的真值检查通常容易出错。例如，考虑改写 printAll :

```typescript
function printAll(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!! 
    // 别这样! 
    // 原因在下边 
    // !!!!!!!!!!!!!!!!
    if (strs) { 
        if (typeof strs === "object") { 
            for (const s of strs) {
                console.log(s); 
            } 
        } else if (typeof strs === "string") {
            console.log(strs); 
        } 
    }
}
```

我们将整个函数体包装在一个真实的检查中，但这有一个小的缺点：我们可能不再正确处理空字符串的情况。

TypeScript 在这里根本不会报错，但是如果你不太熟悉 JavaScript，这是值得注意的行为。TypeScript 通常可以帮助你及早发现错误，但是如果你选择对某个值不做任何处理，那么它可以做的就只有这么多，而不会考虑过多的逻辑方面的问题。如果需要，你可以确保使用 linter（程序规范性） 处理此类情况。

关于通过真实性缩小范围的最后一点，是通过布尔否定 ! 把逻辑从否定分支中过滤掉。

```typescript
function multiplyAll( values: number[] | undefined, factor: number ): number[] | undefined { 
    if (!values) { 
        return values; 
    } else { 
        return values.map((x) => x * factor); 
    } 
}
```

## 真值缩小

typescript也使用分支语句做 `===`,`!==`,`==`,和`!=`等值检查，来实现类型缩小，例如：

```typescript
function example(x:string | number,y:string | boolean){
    if(x===y){
        // 现在可以在x，y上调用字符串类型的方法了
        x.toUpperCase()
        y.toLowerCase()
    }else{
        console.log(x)
        console.log(y)
    }
}
```

当我们在上面的示例中检查`x`和`y`是否相等时，TypeScript知道它们的类型也必须相等，由于`string`是`x`和`y`都可以采用的唯一常见类型，因此TypeScrip知道`x`,`y`如果都是`string`,则程序走第一个分支中。

检查特定的字面量值（而不是变量）也有效。在我们关于真值缩小的部分中，我们编写了一个printAll 容易出错的函数，因为它没有正确处理空字符串。相反，我们可以做一个特定的检查来阻止 `null` ，并且 TypeScript 仍然正确地从 strs 里移除 null 。 

```typescript
function printAll(strs: string | string[] | null) { 
    if (strs !== null) { 
        if (typeof strs === "object") { 
            for (const s of strs) {
                console.log(s); } 
        } else if (typeof strs === "string") {
            console.log(strs); 
        } 
    } 
}
```

JavaScript 更宽松的相等性检查 `==` 和 `!= `，也能被正确缩小。如果你不熟悉，如何检查某个变量是否 `== null` ，因为有时不仅要检查它是否是特定的值 null ，还要检查它是否可能是 undefined 。这同样适用于 `== undefined` ：它检查一个值是否为 `null 或 undefined `。现在你只需要这个 `==` 和 `!=` 就可以搞定了。 

```typescript
interface Container { value: number | null | undefined; }
function multiplyValue(container: Container, factor: number) {
    // 从类型中排除了undefined 和 null 
    if (container.value != null) {
        console.log(container.value); 
        // 现在我们可以安全地乘以“container.value”了 
        container.value *= factor; 
    } 
}
```

## in操作符缩小

JavaScript 有一个运算符，用于确定对象是否具有某个名称的属性： in 运算符。TypeScript 考虑到了这一点，以此来缩小潜在类型的范围。

例如，使用代码： "value" in x 。这里的 "value" 是字符串文字， x 是联合类型。值为“true”的分支缩小，需要 x 具有可选或必需属性的类型的值；值为 “false” 的分支缩小，需要具有可选或缺失属性的类型的值。 

```typescript
type Fish = { swim:()=>void}
type Bird = {fly:()=>void}
type Human = {swim?:()=>void; fly?:()=>void}
function move(animal:Fish | Bird | Human){
    if("swim" in animal){
        // animal：Fish | Human
        animal
    }else {
        // animal: Bird | Human
        animal
    }
}
```

## instanceof 操作符缩小

JavaScript 有一个运算符来 `instanceof` 检查一个值是否是另一个值的“实例”。更具体地，在JavaScript 中 `x instanceof Foo `检查 x 的原型链是否含有 Foo.prototype 。虽然我们不会在这里深入探讨，当我们进入 类(class) 学习时，你会看到更多这样的内容，它们大多数可以使用 new 关键字实例化。 正如你可能已经猜到的那样， `instanceof` 也是一个类型保护，TypeScript 在由 instanceof 保护的分支中实现缩小。

```typescript
function logValue(x:Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString())
    }else{
        console.log(x.toUpperCase())
    }
}
logValue(new Date()) // Mon, 15 Nov 2021 22:34:37 GMT 
logValue('hello ts') // HELLO TS
```

## 分配缩小

