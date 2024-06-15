"use strict";
function sum(a, b) {
    return a + b;
}
function runAfter5Seconds(fn) {
    setTimeout(fn, 5 * 1000);
}
runAfter5Seconds(() => {
    console.log("Hello world");
});
