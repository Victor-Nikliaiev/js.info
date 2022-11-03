/* eslint-disable no-unused-vars */

import alert from "alert";
import { bench } from "../../utils.js";

// function sum(...args) {
//   return args.reduce((sum, value) => (sum += value), 0);
// }

// function sum2(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum;
// }

// function sum3(...args) {
//   let sum = 0;

//   args.forEach(v => (sum += v));

//   return sum;
// }

// console.log(
//   bench(
//     { funcArray: [sum, sum2, sum3], repeatTimes: 100, circlesQuantity: 1e5 },
//     fn => fn(2, 3, 3, 2, 10, 30, 40, 10)
//   )
// );
// console.log(sum(2, 3, 3, 2, 10, 30, 40, 10));

// function showName(firstName, lastName, ...titles) {
//   alert(firstName + " " + lastName);
//   alert(titles);
// }

// showName("Julius", "Cesar", "Consul", "Imperator");

// function showName() {
//   alert(arguments.length);
// }

// showName("ss", "", "0");

// let arr = [3, 5, 1];
// let arr2 = [4, -20, 6];

// console.log(Math.max(...arr, ...arr2));
// console.log([100, 4, ...arr, 200, ...arr2]);

// let str = "test";
// alert([...str]);

// let arr = [1, 2, 3];
// let arrCopy = [...arr];

// console.log(JSON.stringify(arr) === JSON.stringify(arrCopy));
// console.log(arr === arrCopy);

// arr.push(4);
// console.log(arr);
// console.log(arrCopy);

let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj };

console.log(objCopy);
console.log(JSON.stringify(obj) === JSON.stringify(objCopy));
console.log(obj === objCopy);

obj.d = 4;
console.log(JSON.stringify(obj));
console.log(JSON.stringify(objCopy));
