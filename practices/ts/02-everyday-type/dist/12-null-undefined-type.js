"use strict";
/**
 * null 或 undefined
 */
let x12 = undefined;
let y12 = null;
function doSomething(x) {
    if (x === null) {
        // do something
    }
    else {
        console.log('hello,' + x.toUpperCase());
    }
}
function liveDangerouly(x) {
    console.log(x.toFixed());
}
