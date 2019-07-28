export {};
// interface Point2D {
//   x: number;
//   y: number;
// }

// var point2D: Point2D = { x: 0, y: 10 };
// console.log(point2D);
//-------------------------------------------------------

// Jquey $
// // declare var $: any;
// // $('.awesome').show();
//------------------------------------------------------

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
//--------------------------------------------------------

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
//--------------------------------------------------------

// Return an object
// function toInt(str: string): { valid: boolean; int?: number } {
//   const int = parseInt(str);
//   if (isNaN(int)) {
//     return { valid: false };
//   } else {
//     return { valid: true, int };
//   }
// }

//const { valid, int } = toInt("s10");
// const { valid, int } = toInt("10");
// if (valid) {
//   console.log(int);
// }
// const obj = toInt("10");
// if (obj.valid) {
//   console.log(obj.int);
// }
//---------------------------------------------------------------

// undefined is not used in json
//console.log(JSON.stringify({ willStay: null, willBeGone: undefined })); // {"willStay":null}
//------------------------------------------------------------------------------------------------

//this
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
//------------------------------------------------------------------------

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
//------------------------------------------------------------------------------

//Truthy
// Being explicit on Truthy
// let name1: string = "ss";
// const hasName = !!name1;
// console.log(hasName); // true

// let name2: string = "";
// const hasName2 = !!name2;
// console.log(hasName2); // false
//-------------------------------------------------------------

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
//------------------------------------------------------------------
