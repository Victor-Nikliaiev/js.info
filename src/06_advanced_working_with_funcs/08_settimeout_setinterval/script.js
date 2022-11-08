/* eslint-disable no-unused-vars */
import alert from "alert";

// function sayHi() {
//   alert("Hi");
// }

// setTimeout(sayHi, 3000);

// function sayHi(phrase, who) {
//   alert(`${phrase}, ${who}!`);
// }

// setTimeout(sayHi, 1000, "Hello", "John");

// let timerId = setTimeout(() => alert("never happens"), 1000);
// alert(timerId);
// clearTimeout(timerId);
// alert(timerId);

// let timerId = setInterval(
//   () => console.log(new Date().toLocaleTimeString()),
//   1000
// );

// setTimeout(() => clearInterval(timerId), 5000);

// let timerId = setTimeout(function tick() {
//   console.log("Tick");
//   timerId = setTimeout(tick, 2000);
// }, 2000);

// let i = 1;

// setInterval(() => {
//   console.log(++i);
// }, 100);
// let i = 0;
// setTimeout(function run() {
//   console.log(++i);
//   setTimeout(run, 100);
// });

// setTimeout(() => console.log("World!"));
// console.log("Hello");

// let start = Date.now();
// let timer = [];

// setTimeout(function run() {
//   timer.push(Date.now() - start);

//   if (start + 100 < Date.now()) console.table(timer);
//   else setTimeout(run);
// });

// setImmediate(() => console.table(2));
// console.table(1);

function printNumbersSetTimeout(from, to) {
  let timerId;

  function run() {
    console.log(from++);

    if (from > to) {
      clearTimeout(timerId);
      return;
    }
    timerId = setTimeout(run, 1000);
  }
  run();
}

function printNumbersSetInterval(from, to) {
  let timerId = setInterval(() => {
    console.log(from++);

    if (from > to) {
      clearInterval(timerId);
    }
  }, 1000);
}

printNumbersSetTimeout(2, 5);
// printNumbersSetInterval(2, 5);
