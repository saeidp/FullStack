// if we add an item and accidentally skip an index, it will create an undefined item in the array.
let seaCreatures = ["octopus", "squid", "shark", "seahorse", "starfish"];
seaCreatures[5] = "whale";
seaCreatures[7] = "pufferfish";
console.log(seaCreatures);

// append lobster to the end of the seaCreatures array
seaCreatures.push("lobster");
console.log(seaCreatures);

// -----------add item to the beginning--------------
// append dragonfish to the beginning of the seaCreatures array
seaCreatures.unshift("dragonfish");
console.log(seaCreatures);

// -------------------Remove an item------------------
seaCreatures.splice(7, 1); // remove the original at the index
console.log(seaCreatures);

// // if you want a new array use slice but ths one returns from start to end
// let newArray = seaCreatures.slice(0, 3);
// console.log(newArray);

// pop remove the last item
seaCreatures.pop();

// shift remove the first item
seaCreatures.shift();

// -------------------// Replace seahorse with sea lion using splice method
seaCreatures.splice(3, 1, "sea lion");

console.log(seaCreatures);

// --------------------------loop through array----------------------------
// create an array of aquatic mammals
let mammals = ["dolphin", "whale", "manatee"];

// loop through each mammal
for (let mammal of mammals) {
  console.log(mammal);
}
