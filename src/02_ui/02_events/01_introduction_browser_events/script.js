/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable no-func-assign */

import {
  getScrollbarWidth,
  scrollHeight,
  throttleDecorator,
} from "../../../utils.js";

// function* countGenerator() {
//   let count = 0;
//   while (true) {
//     count++;
//     yield count;
//   }
// }
// let counter = countGenerator();
// let input = document.querySelector("input");

// input.onclick = function () {
//   let value = counter.next().value;
//   input.value = `counter: ${value}`;
//   if (value === 10) {
//     input.onclick = null;
//   }
//   console.log(this.value);
// };

// function handler() {
//   console.log(this.value);
// }

// input.addEventListener("click", handler);

// new Promise(resolve => {
//   setTimeout(() => resolve(), 1000);
// }).then(() => {
//   input.removeEventListener("click", handler);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Content loaded");
// });

let input = document.querySelector("input");

// input.onclick = function (event) {
//   console.log(event.type + " at " + event.currentTarget);
//   console.log(event.currentTarget);
//   console.log(event.currentTarget === this); // true
//   console.log("Coordinates: " + event.clientX + " : " + event.clientY);
// };

// let obj = {
//   handleEvent(event) {
//     console.log(event.type);
//   },
// };

// function handler(event) {
//   console.log(`(${event.clientX}:${event.clientY})`);
// }

// handler = throttleDecorator(handler, 200);

// document.addEventListener("mousemove", handler);

// class Menu {
//   handleEvent(event) {
//     let method = `on${event.type[0].toUpperCase() + event.type.slice(1)}`;
//     this[method](event);
//   }

//   onMousedown(event) {
//     input.value = "Mouse button pressed";
//   }

//   onMouseup() {
//     input.value = "...released.";
//   }
// }

// let menu = new Menu();
// input.addEventListener("mousedown", menu);
// input.addEventListener("mouseup", menu);

// Homework

let button = document.createElement("button");
button.innerText = "Press to hide";
button.onclick = function () {
  this.hidden = true;
};

document.body.append(button);
