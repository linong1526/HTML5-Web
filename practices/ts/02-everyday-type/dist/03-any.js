"use strict";
let obj = {
    x: 10
};
// 以下代码行都不会抛出编译错误
// 使用 'any' 将禁用所有进一步的类型检查
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n = obj;
