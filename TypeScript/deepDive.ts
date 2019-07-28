export {};
// interface Point2D {
//   x: number;
//   y: number;
// }

// var point2D: Point2D = { x: 0, y: 10 };
// console.log(point2D);

// // declare var $: any;
// // $('.awesome').show();

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

function toInt(str: string): { valid: boolean; int?: number } {
  const int = parseInt(str);
  if (isNaN(int)) {
    return { valid: false };
  } else {
    return { valid: true, int };
  }
}

//const { valid, int } = toInt("s10");
// const { valid, int } = toInt("10");
// if (valid) {
//   console.log(int);
// }
// const obj = toInt("10");
// if (obj.valid) {
//   console.log(obj.int);
// }

//console.log(JSON.stringify({ willStay: null, willBeGone: undefined })); // {"willStay":null}

// Any access to this keyword within a function is actually controlled
// by how the function is actually called.It is commonly referred to as
// the “calling context.”
function foo() {
  console.log(this);
}

foo(); // logs out the global e.g. `window` in browsers
let bar = {
  foo
}
bar.foo(); // Logs out `bar` as `foo` was called on `bar`
