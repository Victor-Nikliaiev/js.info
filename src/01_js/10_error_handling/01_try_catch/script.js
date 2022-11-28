/* eslint-disable no-unused-vars */

import alert from "alert";
import promptSync from "prompt-sync";
const prompt = promptSync();

// try {
//   console.log("Start of try runs");
//   console.log("End of try runs");
// } catch (err) {
//   console.log("Catch is ignored, because there are no errors");
// }

// try {
//   console.log("Start of try (runs)");
//   lalala;
//   console.log("End of try (never reached)");
// } catch (err) {
//   console.log("Error has ocurred!");
// }

// try {
//   setTimeout(function () {
//     noSuchVariable;
//   }, 1000);
// } catch (err) {
//   console.log("Never run so");
// }

// setTimeout(function () {
//   try {
//     noSuchVariable;
//   } catch (err) {
//     console.log("We got an error here!");
//   }
// }, 2000);

// try {
//   lalala;
// } catch ({ name, message, stack }) {
//   console.log(`Name: ${name}`);
//   console.log(`Message: ${message}`);
//   console.log(`Stack: ${stack}`);
// }

// let json = "{ bad json }";

// try {
//   let user = JSON.parse(json);
// } catch ({ name, message }) {
//   console.log(
//     "Our apologies, the data has errors, we'll try to request it one more time."
//   );
//   console.log(`${name}: ${message}`);
// }

// let json = '{"age": 30}';

// try {
//   let user = JSON.parse(json);
//   console.log(user.name);
// } catch (err) {
//   console.log("doesn't execute");
// }

// function readData() {
//   let json = '{"age": 30 }';

//   try {
//     let user = JSON.parse(json);
//     sdsd;
//     if (!user.name) {
//       throw new SyntaxError("Incomplete data: no name");
//     }
//   } catch (err) {
//     if (err instanceof SyntaxError) {
//       console.log(`JSON Error: ${err.message}`);
//     } else {
//       throw err;
//     }
//   }
// }

// try {
//   readData();
// } catch (err) {
//   console.log(`External catch got: ${err} `);
// }

// let num = +prompt("Enter a positive integer  number: ");

// let diff, result, error;

// function fib(n) {
//   if (n < 0 || Math.trunc(n) !== n) {
//     throw new Error("Input must not be negative and also an integer.");
//   }

//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// let start = new Date();

// try {
//   result = fib(num);
// } catch (err) {
//   result = 0;
//   error = `${err.name}: ${err.message}`;
// } finally {
//   diff = Date.now() - start;
// }

// console.log(result || error);
// console.log(`Execution took ${diff} ms.`);

// function func() {
//   try {
//     return 1;
//   } finally {
//     console.log("finally");
//   }
// }

// console.log(func());
