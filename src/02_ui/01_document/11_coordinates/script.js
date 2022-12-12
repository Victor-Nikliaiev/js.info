/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable no-func-assign */

// let test = document.querySelector("div#test");

// let centerX = document.documentElement.clientWidth / 2;
// let centerY = document.documentElement.clientHeight / 2;

// let centralElement = document.elementFromPoint(centerX, centerY);
// centralElement.style.background = "green";
// console.log(centralElement.tagName);
// console.log(centralElement.getBoundingClientRect());

// function createMessageUnder(elem, html) {
//   let message = document.createElement("div");
//   message.style.cssText = "position: fixed; color: red";

//   let coords = elem.getBoundingClientRect();
//   message.style.left = coords.left + "px";
//   message.style.top = coords.bottom + "px";

//   message.innerHTML = html;

//   return message;
// }

// let message = createMessageUnder(centralElement, "<h1>Works :D</h1>");
// document.body.append(message);
// setTimeout(() => message.remove(), 5000);

// function getCoords(elem) {
//   let box = elem.getBoundingClientRect();
//   return {
//     top: box.top + window.scrollY,
//     right: box.right + window.screenX,
//     bottom: box.bottom + window.scrollY,
//     left: box.left + window.scrollX,
//   };
// }

// function createMessageUnder(elem, html) {
//   let message = document.createElement("div");
//   message.style.cssText = "position: absolute; color: red; background: yellow";

//   let coords = getCoords(elem);

//   message.style.left = coords.left + "px";
//   message.style.top = coords.bottom + "px";

//   message.innerHTML = html;

//   return message;
// }

// let message = createMessageUnder(
//   centralElement,
//   "<h3>important message :D</h3>"
// );

// document.body.append(message);
// setTimeout(() => message.remove(), 5500);

//// Homework
// 1
let field = document.querySelector("div#field");
let fieldBox = field.getBoundingClientRect();
console.log(fieldBox);

let one, two, three, four;

one = { name: "one", x: fieldBox.x, y: fieldBox.y };
console.log(one);

two = { name: "two", x: fieldBox.right, y: fieldBox.bottom };
console.log(two);

let threeX = fieldBox.x + field.clientLeft;
let threeY = fieldBox.y + field.clientTop;

three = { name: "three", x: threeX, y: threeY };
console.log(three);

let fourX = fieldBox.left + field.clientLeft + field.clientWidth;
let fourY = fieldBox.top + field.clientTop + field.clientHeight;
four = { name: "four", x: fourX, y: fourY };
console.log(four);
