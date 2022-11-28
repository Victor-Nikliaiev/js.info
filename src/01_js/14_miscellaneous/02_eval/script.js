import alert from "alert";
import promptSync from "prompt-sync";
const prompt = promptSync();

// let str = "console.log('Hello')";
// eval(str);

// let one = "1";
// let value = eval(`${one} + ${one}`);
// console.log(value);

// let v2 = eval("let i = 4;  ++i");
// console.log(v2);

// let x = 5;
// eval("x = 10;");
// console.log(x);

// Homework
// console.log(eval(prompt("What you would like to calculate?: ")));
function calculateUserInput() {
  const userInput = prompt("What you would like to calculate?: ");
  const calculatedValue = eval(userInput);
  return calculatedValue;
}

alert(calculateUserInput());
