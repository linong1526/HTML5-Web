"use strict";
function printCoord08(pt) {
}
printCoord08({
    x: 200,
    y: 1000
});
function printID(id) {
}
printID(1000);
printID('hello');
function sanitizedInput(str) {
    return str.slice(0, 2);
}
let userInput = sanitizedInput('hello');
userInput = 'new Input';
// 不能将类型“number”分配给类型“string” 
// userInput = 100 
