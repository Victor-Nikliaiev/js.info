/* eslint-disable no-func-assign */
/* eslint-disable no-unused-vars */

import { delayDecorator, makeObservable } from "../../../utils.js";

// console.log(document.body.constructor.name);

// console.log(document.body instanceof HTMLBodyElement);
// console.log(document.body instanceof HTMLElement);
// console.log(document.body instanceof Element);
// console.log(document.body instanceof Node);
// console.log(document.body instanceof EventTarget);
// console.dir(document.body);

// let elem = document.body;

// console.log(elem.nodeType);
// console.log(elem.firstChild.nodeType);
// console.log(document.nodeType);

// console.log(elem.nodeName);
// console.log(elem.tagName);

// console.log(document.body.firstChild.tagName);
// console.log(document.body.firstChild.nodeName);

// console.log(document.tagName);
// console.log(document.nodeName);

// document.body.innerHTML = "";

// delayDecorator(() => {
//   document.body.innerHTML += "<h1>Vic: Hi, How is it going? :D</h1>";
// }, 500)();

// delayDecorator(() => {
//   document.body.innerHTML += "<h1>Alex: Good, what about you? :D</h1>";
// }, 2000)();

// delayDecorator(() => {
//   document.body.innerHTML += "<h1>Vic: Everything is fine, thanks </h1>";
// }, 5000)();

// delayDecorator(() => {
//   document.body.innerHTML += "<h1>Alex: Nice to hear that!</h1>";
// }, 7000)();
// document.body.innerHTML = "";

// let messages = [];

// messages = makeObservable(messages);

// messages.observe((_, value) => {
//   document.body.innerHTML += `<h3>${value}</h3>`;
// });

// delayDecorator(() => {
//   messages.push("Vic: Hi, how are you?");
// }, 1000)();

// delayDecorator(() => {
//   messages.push("Alex: Hi, I'm good, thanks, what about you?");
// }, 4000)();

// delayDecorator(() => {
//   messages.push("Vic: I'm good, thanks, man!");
// }, 7000)();

// let first = document.getElementById("first");
// console.log(first.innerHTML);
// console.log(first.outerHTML);

// let text = document.body.firstChild;
// console.log(text.nodeValue);
// console.log(text.data);
// console.log(document.body.firstElementChild.textContent);

// let name = prompt("What's your name?", "<b>Victor-Onlight</b>");

// let elem1 = document.getElementById("elem1");
// let elem2 = document.getElementById("elem2");

// elem1.innerHTML = name;
// elem2.innerText = name;

// let elem = document.getElementById("elem");
// console.dir(elem);
// elem.hidden = true;

// let blink = document.getElementById("blink");

// setInterval(() => (blink.hidden = !blink.hidden), 150);

// let elem = document.getElementById("elem");

// console.log(elem.type);
// console.log(elem.name);
// console.log(elem.id);
// console.log(elem.placeholder);
// console.log(elem.value);

// Homework
// 1

// for (let li of document.querySelectorAll("li")) {
//   let title = li.firstChild.data.trim();
//   let innerElementAccount = li.getElementsByTagName("li").length;
//   console.log(`${title}: ${innerElementAccount}`);
// }

// 1 - Corrected Version
for (let li of document.querySelectorAll("li")) {
  let title = li.firstChild.data.trim();
  let innerElements = Array.from(li.getElementsByTagName("li"));

  if (!innerElements.length) {
    console.log(`${title}: 0`);
    continue;
  }

  let parent = li.children[0];
  let filteredArray = Array.from(innerElements).filter(
    elem => elem.parentElement === parent
  );

  let count =
    innerElements.length - filteredArray.length || innerElements.length;

  console.log(`${title}: ${count} `);
}
