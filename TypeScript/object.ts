// // ------------delete property---------------------
// const gimli = {
//   name: "Gimli",
//   race: "dwarf",
//   weapon: "axe",
//   greet: function() {
//     return `Hi, my name is ${this.name}!`;
//   }
// };
// console.log(gimli);
// delete gimli.weapon;
// console.log(gimli);

// ------------------------looping through-------------------------
const gimli = {
  name: "Gimli",
  race: "dwarf",
  weapon: "battle axe"
};
// iterate through properties of gimli
for (let key in gimli) {
  console.log(gimli[key]);
}

console.log(Object.keys(gimli)); // ["name", "race", "weapon"]
