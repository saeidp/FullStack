// Closures
// function in JavaScript has access to any variables defined in the
// outer scope
// function outerFunction(arg) {
//     var variableInOuterFunction = arg;
//     function bar() {
//         console.log(variableInOuterFunction); // Access a variable from the outer scope
//     }
//     // Call the local function to demonstrate that it has access to arg
//     bar();
// }
// outerFunction("hello closure"); // logs hello closure!
// // closures allow compose objects. the revealing module pattern:
// function createCounter() {
//     let val = 0;
//     return {
//         increment() { val++ },
//         getVal() { return val }
//     }
// }
// let counter = createCounter();
// counter.increment();
// console.log(counter.getVal()); // 1
// counter.increment();
// console.log(counter.getVal()); // 2
var name1 = "ss";
var hasName = !!name1;
console.log(hasName);
