"use strict";
/**
 * 对象类型
 */
// 参数的类型注释是对象类型
function printCoord(pt) {
    console.log("坐标的x值为： " + pt.x);
    console.log("坐标的y值为： " + pt.y);
}
printCoord({ x: 3, y: 7 });
function printName(obj) {
    // ...
}
//两种传递参数都可以
printName({ first: 'Iekika' });
printName({ first: 'Iekika', last: 'kakipi' });
function printName2(obj) {
    var _a, _b;
    // 错误 - 'obj.last'可能不存在
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
    if (obj.last !== undefined) {
        // 这样可以
        console.log(obj.last.toUpperCase());
    }
    // 使用现代JavaScript语法的安全替代方案
    console.log((_b = obj.last) === null || _b === void 0 ? void 0 : _b.toUpperCase());
}
