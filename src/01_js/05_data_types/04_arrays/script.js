"use strict";

/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */

import alert from "alert";
import inp from "prompt-sync";
const prompt = inp();

// let arr = new Array();
// let arr = [];

// const fruits = ["Apple", "Orange", "Plum"];

// alert(fruits[0]);
// alert(fruits[1]);
// alert(fruits[2]);
// fruits[2] = "Pear";
// fruits[3] = "Lemon";
// alert(fruits);
// console.log(`Length: ${fruits.length}`);

// let arr = [
//   "Apple",
//   true,
//   { name: "Victor" },
//   function () {
//     alert("hello");
//   },
// ];

// alert(arr[2].name);
// arr[3]();

// let fruits = ["Apple", "Orange", "Plum"];
// alert(fruits[fruits.length - 1]);
// alert(fruits.at(-1));

// let str = "tests";
// alert(str.at(-1));

// alert(fruits.pop());
// alert(fruits);

// let fruits = ["Apple", "Orange"];
// fruits.push("Pear");
// fruits[fruits.length] = "Plum";
// alert(fruits);

// let fruits = ["Apple", "Orange", "Pear"];
// alert(fruits.shift());
// console.log(fruits);

// let fruits = ["Orange", "Pear"];
// fruits.unshift("Apple");
// console.log(fruits);

// let fruits = ["Apple"];
// fruits.push(...["Orange", "Peach"]);
// console.log(fruits);
// fruits.unshift(...["Pineapple", "Lemon"]);
// console.log(fruits);

// let arr = ["Test"];

// function test(arr) {
//   arr.push("Mooooore!");
// }

// test(arr);
// console.log(arr);

// const fruits = ["Banana"];

// const arr = fruits;

// arr.push("Pear");

// alert(fruits);

// let fruits = [];
// fruits[9999] = 5;
// fruits.age = 20;

// fruits.forEach((v, i) => console.log(`i: ${i}, v: ${v}`));

// let arr = ["Apple", "Orange", "Plum"];

// for (let i = 0; i < arr.length; i++) {
//   alert(arr[i]);
// }

// let fruits = ["Apple", "Orange", "Plum"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// let arr = ["Apple", "Banana", "Watermelon"];

// for (let index in arr) {
//   console.log(`index: ${index}, value: ${arr[index]}`);
// }

// let fruits = [];
// fruits[123] = "Orange";
// alert(fruits.length);

// let arr = [1, 2, 3, 4, 5];

// while (--arr.length) {
//   console.log(arr);
// }

// let arr = ["test"];
// arr.length = 0;
// console.log(arr);

// let arr = new Array("Hi", "my", "name", "is", "Victor");
// console.log(arr);

// let arr = new Array(2);
// console.log(arr[0]);
// console.log(arr);
// console.log(arr.length);

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[0][1]);

// let arr = [1, 2, 3];

// alert(arr);
// alert(arr.toString() === "1,2,3");

// console.log([] + 1);
// console.log([1] + 1);
// console.log(+([1, 2] + 1));
// console.log([] === []);
// console.log([0] === [0]);

// console.log(+[0] == 0);

// Homework

// let fruits = ["Apples", "Pear", "Oranges"];

// let shoppingCard = fruits;
// shoppingCard.push("Banana");

// alert(shoppingCard);

// Array operations

// //1
// let styles = ["Jazz", "Blues"];

// // 2
// styles.push("Rock-n-Roll");

// //3
// let middle = Math.floor(styles.length / 2);
// styles[middle] = "Classics";

// // 4
// alert(styles.shift());

// // 5
// styles.unshift("Rap", "Reggae");

// console.log(styles);

// let arr = [
//   "a",
//   "b",
//   function () {
//     console.log(this);
//   },
// ];

// arr[2]();

function sumInput() {
  const arr = [];

  while (true) {
    let userInput = prompt("Enter a number: ");

    if (userInput === null || userInput === "" || isNaN(userInput)) break;

    arr.push(+userInput);
  }

  let sum = 0;

  for (let item of arr) {
    sum += item;
  }

  return sum;
}

// alert(sumInput());

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);

    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
