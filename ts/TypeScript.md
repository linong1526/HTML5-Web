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

一个接口声明是另一种方式来命名对象类型:

