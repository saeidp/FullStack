const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answere = num1 + num2;

rl.question(`What is ${num1} + ${num2}? \n`, userInput => {
  //   console.log(userInput);
  if (userInput.trim() == answere) {
    rl.close();
  } else {
    rl.setPrompt("Incorrect response please try again\n");
    rl.prompt();
    rl.on("line", userInput => {
      if (userInput.trim() == answere) rl.close();
      else {
        rl.setPrompt(`Your answere of ${userInput} is incorrect try again\n `);
        rl.prompt();
      }
    });
  }
});

rl.on("close", () => {
  console.log("Correct !!!");
});
