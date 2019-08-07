export {};
// interface Point2D {
//   x: number;
//   y: number;
// }

// var point2D: Point2D = { x: 0, y: 10 };
// console.log(point2D);
// -------------------------------------------------------

// Jquey $
// // declare var $: any;
// // $('.awesome').show();
// ------------------------------------------------------

// class Point {
//   constructor(public x: number, public y: number) {}
//   add(point: Point) {
//     return new Point(this.x + point.x, this.y + point.y);
//   }
// }

// var p1 = new Point(0, 10);
// var p2 = new Point(10, 20);
// var p3 = p1.add(p2); // { x: 10, y: 30 }
// console.log(p3);
// --------------------------------------------------------

// type Idisplay = {
//   id: string;
//   display: string;
// };

// const list: Idisplay[] = [
//   { id: "foo", display: "foo select" },
//   { id: "bar", display: "bar select" }
// ];

// const fooIndex = list.map(i => i.id).indexOf("bar");
// console.log(fooIndex);
// --------------------------------------------------------

// Return an object
// function toInt(str: string): { valid: boolean; int?: number } {
//   const int = parseInt(str);
//   if (isNaN(int)) {
//     return { valid: false };
//   } else {
//     return { valid: true, int };
//   }
// }

// const { valid, int } = toInt("s10");
// const { valid, int } = toInt("10");
// if (valid) {
//   console.log(int);
// }
// const obj = toInt("10");
// if (obj.valid) {
//   console.log(obj.int);
// }
// ---------------------------------------------------------------

// undefined is not used in json
// console.log(JSON.stringify({ willStay: null, willBeGone: undefined })); // {"willStay":null}
// ------------------------------------------------------------------------------------------------

// this
// Any access to this keyword within a function is actually controlled
// by how the function is actually called.It is commonly referred to as
// the “calling context.”
// function foo() {
//   console.log(this);
// }

// foo(); // logs out the global e.g. `window` in browsers
// let bar = {
//   foo
// };
// bar.foo(); // Logs out `bar` as `foo` was called on `bar`
// ------------------------------------------------------------------------

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
// ------------------------------------------------------------------------------

// Truthy
// Being explicit on Truthy
// let name1: string = "ss";
// const hasName = !!name1;
// console.log(hasName); // true

// let name2: string = "";
// const hasName2 = !!name2;
// console.log(hasName2); // false
// -------------------------------------------------------------

// Inheritence
// class Point {
//   x: number;
//   y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
//   add(point: Point) {
//     return new Point(this.x + point.x, this.y + point.y);
//   }
// }
// class Point3D extends Point {
//   z: number;
//   constructor(x: number, y: number, z: number) {
//     super(x, y);
//     this.z = z;
//   }
//   add(point: Point3D) {
//     var point2D = super.add(point);
//     return new Point3D(point2D.x, point2D.y, this.z + point.z);
//   }
// }
// ------------------------------------------------------------------
// Arrow functions
// var inc = (x: number) => x + 1;

// this meaning is fixed using arrow function. This in below is windo in this case
// this.age inside Person will not be read for growOld.
// function Person(age) {
//     this.age = age;
//     this.growOld = function() {
//         this.age++;
//     }
// }
// var person = new Person(1);
// setTimeout(person.growOld,1000);

// setTimeout(function() { console.log(person.age); },2000); // 1, should have been 2

// to fix the above we have to use arrow function
// function Person(age) {
//     this.age = age;
//     this.growOld = () => {
//         this.age++;
//     }
// }
// var person = new Person(1);
// setTimeout(person.growOld,1000);

// setTimeout(function() { console.log(person.age); },2000); // 2

// combine arrows with classes
// class Person {
//     constructor(public age:number) {}
//     growOld = () => {
//         this.age++;
//     }
// }
// var person = new Person(1);
// setTimeout(person.growOld,1000);

// setTimeout(function() { console.log(person.age); },2000); // 2
// ----------------------------------------------------------------------

// Arrow functions and inheritance
// class Adder {
//     constructor(public a: number) {}
//     add = (b: number): number => {
//         return this.a + b;
//     }
// }
// class Child extends Adder {
//     callAdd(b: number) {
//         return this.add(b);
//     }
// }

// Demo to show it works
// const child = new Child(123);
// console.log(child.callAdd(123)); // 246

// the above do not work with the super keyword when you try to
//  override the function in a child class.
// Since there is only one this such functions cannot participate in a call
// to super (super only works on prototype members). You can easily get around it
// by creating a copy of the method before overriding it in the child.
// class Adder {
//     constructor(public a: number) {}
//     // This function is now safe to pass around
//     add = (b: number): number => {
//         return this.a + b;
//     }
// }

// class ExtendedAdder extends Adder {
//     // Create a copy of parent before creating our own
//     private superAdd = this.add;
//     // Now create our override
//     add = (b: number): number => {
//         return this.superAdd(b);
//     }
// }

// ------------------------------------------------------------------------------
// Quick object return
// Sometimes you need a function that just returns a simple object literal
// WRONG WAY TO DO IT. is parsed as a block containing a JavaScript Label by JavaScript runtimes

// var foo = () => {
//     bar: 123
// };

// You can fix it by surrounding the object literal with ()
// Correct 🌹

// var foo = () => ({
//     bar: 123
// });

// ------------------------------------------------------------------
// Rest parameters
// Rest parameters (denoted by ...argumentName for the last argument) allow you to quickly
// accept multiple arguments in your function and get them as an array

// function iTakeItAll(first, second, ...allOthers) {
//     console.log(allOthers);
// }
// iTakeItAll('foo', 'bar'); // []
// iTakeItAll('foo', 'bar', 'bas', 'qux'); // ['bas','qux']
// ----------------------------------------------------------------------

// let
// var Variables in JavaScript are function scoped. This is different
// from many other languages (C# / Java etc.) where the variables are block scoped
// var foo = 123;
// if (true) {
//     var foo = 456;
// }
// console.log(foo); // 456

// using let

// let foo = 123;
// if (true) {
//     let foo = 456;
// }
// console.log(foo); // 123

// This problem doesn't happen using function
// functions create a new scope

// var foo = 123;
// function test() {
//   console.log(foo); // undefined
//   var foo = 456;
// }
// test();
// console.log(foo); // 123

// ---------------------------------------------------------------

// let in closure
// What is the output of this?

// var funcs = [];
// // create a bunch of functions
// for (var i = 0; i < 3; i++) {
//   funcs.push(function() {
//     console.log(i);
//   });
// }
// // call them
// for (var j = 0; j < 3; j++) {
//   funcs[j]();
// }

// // output will be 3 3 3

// // Use let to fix

// var funcs = [];
// // create a bunch of functions
// for (let i = 0; i < 3; i++) {
//   // Note the use of let
//   funcs.push(function() {
//     console.log(i);
//   });
// }
// // call them
// for (var j = 0; j < 3; j++) {
//   funcs[j]();
// }
// // output will be 0 1 2

//------------------------------------------------------
// const
// const foo = 123;
// const foo = 123;
// foo = 456; // ERROR: Left-hand side of an assignment expression
// //cannot be a constant

// const foo = { bar: 123 };
// foo = { bar: 456 }; // ERROR : Left hand side of an assignment
// //expression cannot be a constant

const foo = { bar: 123 };
foo.bar = 456; // Allowed!
console.log(foo); // { bar: 456
//--------------------------------------------------------------
