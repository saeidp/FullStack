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

// Being explicit on Truthy
let name1: string = "ss";
const hasName = !!name1;
console.log(hasName); // true

let name2: string = "";
const hasName2 = !!name2;
console.log(hasName2); // false

// Inheritence
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y);
  }
}
class Point3D extends Point {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }
  add(point: Point3D) {
    var point2D = super.add(point);
    return new Point3D(point2D.x, point2D.y, this.z + point.z);
  }
}
