/* eslint-disable no-undef */
/* eslint-disable no-func-assign */
/* eslint-disable no-unused-vars */

import { delayDecorator, makeObservable } from "../../../utils.js";

// document.body.myData = {
//   name: "Cesar",
//   title: "Imperator",
// };

// console.log(document.body.myData.title);

// document.body.sayTagName = function () {
//   console.log(this.tagName);
// };

// document.body.sayTagName();

Element.prototype.sayHi = function () {
  console.log(`Hello, I'm ${this.tagName}`);
};

// document.body.sayHi();
// document.documentElement.sayHi();

// console.log(document.body.id);
// console.log(document.body.something);

// console.log(input.type);
// console.log(body.type);

// if (body.hasAttribute("type")) {
//   console.log(body.getAttribute("type"));
// }

// let elem = document.getElementById("elem");

// let count = 0;
// console.log(elem.getAttribute("about"));
// console.log(elem.setAttribute("quantity", count));

// let timer = setInterval(() => {
//   elem.setAttribute("quantity", ++count);
//   elem.innerText = count;
// }, 1000);

// // Cancel Button
// let cancelCountButton = document.createElement("button");
// cancelCountButton.innerText = "Cancel Count";
// cancelCountButton.onclick = () => {
//   clearInterval(timer);
// };
// document.body.append(cancelCountButton);

// // Print Attributes Button
// let printAttributesButton = document.createElement("button");
// printAttributesButton.innerText = "print Attributes";
// printAttributesButton.onclick = () => {
//   for (let attr of elem.attributes) {
//     console.log(`${attr.name}: ${attr.value}`);
//   }
// };
// document.body.append(printAttributesButton);

// console.log(elem.attributes);

// elem.id = "newId";

// console.log(elem.getAttribute("id"));

// let input = document.querySelector("input");
// input.setAttribute("value", "test");
// // alert(input.value);

// input.value = "new Test";
// console.log(input.getAttribute("value"));

// let checkbox = document.querySelectorAll("input")[1];
// console.log(checkbox.getAttribute("checked"));
// console.log(checkbox.checked);

// let div = document.querySelectorAll("div")[1];
// console.log(div.getAttribute("style"));
// console.log(div.style.color);

// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));
// console.log(a.href);
// console.log(a.baseURI);

// let user = {
//   name: "Vic",
//   age: 33,
// };

// for (let div of document.querySelectorAll("[show-info]")) {
//   let field = div.getAttribute("show-info");
//   div.innerHTML = user[field];
// }

// console.log(document.body.dataset.about);
// let order = document.querySelector("div[data-order-state]");
// console.log(order.dataset.orderState);
// let obj = Object.assign({}, order.dataset);
// console.log(obj);

// Homework
// 1
let elem = document.querySelector("[data-widget-name");
// console.log(elem.dataset.widgetName);
// console.log(elem.getAttribute("data-widget-name"));

// 2
// let links = document.querySelectorAll("li > a");
// links.forEach(link => {
//   let url = link.getAttribute("href");
//   if (url.includes("://") && !url.includes("internal.com")) {
//     link.style.color = "orange";
//   }
// });

let links = document.querySelectorAll("a");

let selector = 'a[href*="://"]:not([href^="http://internal.com"])';

links.forEach(link => {
  let href = link.getAttribute("href");

  if (!href) return;
  if (!href.includes("://")) return;
  if (href.startsWith("http://internal.com")) return;

  link.style.color = "orange";
});
