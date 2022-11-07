/* eslint-disable no-unused-vars */
import alert from "alert";
import promptSync from "prompt-sync";
const prompt = promptSync();
// const sayHi = function func() {
//   alert(func.userName);
// };

// sayHi.userName = "Victor";
// sayHi();

// let userName = "Victor";

// const getVariableName = obj => Object.keys(obj)[0];

// alert(getVariableName({ userName }));

// function sayHi() {
//   alert("Hi");
// }

// alert(sayHi.name);

// let sayHi = function () {
//   return;
// };

// alert(sayHi.name);

// function f(sayHi = function () {}) {
//   alert(sayHi.name);
// }

// f();

// let arr = [f];

// let name = arr[0].name;
// let d = { [name]: arr[0] };
// console.log(d);

// let user = {
//   sayHi() {
//     return;
//   },

//   sayBye: function () {
//     return;
//   },
// };

// console.log(user.sayHi.name);
// console.log(user.sayBye.name);

// let arr = [function () {}];

// console.log(arr[0].name);

// function f1(a) {}
// function f2(a, b) {}
// function many(a, b, ...more) {}

// console.log(f1.length);
// console.log(f2.length);
// console.log(many.length);

function ask(question, ...handlers) {
  let isYes = prompt(question).toLowerCase() === "yes";

  for (let handler of handlers) {
    if (handler.length === 0) {
      if (isYes) {
        handler();
      }
    } else {
      handler(isYes);
    }
  }
}

// ask(
//   "Yes?: ",
//   () => alert("You said yes"),
//   result => alert(result)
// );

// const sayHi = function func() {
//   func.counter++;

//   console.log("Hi");
// };

// sayHi.counter = 0;

// sayHi();
// sayHi();
// sayHi();

// alert(`The function was called: ${sayHi.counter} times.`);

// function makeCounter() {
//   counter.count = 0;

//   function counter() {
//     return ++counter.count;
//   }

//   return counter;
// }

// const counter = makeCounter();
// counter.count = 10;

// alert(counter());
// alert(counter());
// alert(counter());

// function makeCounter() {
//   counter.count = 0;

//   function counter() {
//     counter.count++;
//   }

//   return counter;
// }

// const counter = makeCounter();
// counter.count = 10;

// counter();
// counter();
// counter();
// console.log(counter.count);

// let sayHi = function func(who) {
//   if (who) {
//     console.log(`Hello, ${who}!`);
//     return;
//   }

//   func("Guest");
// };

// let welcome = sayHi;
// sayHi = null;

// welcome();

// Homework
// 1

export function makeCounter() {
  counter.count = 0;

  counter.set = function (value) {
    counter.count = value;
  };

  counter.decrease = function () {
    counter.count--;
  };

  function counter() {
    return ++counter.count;
  }

  return counter;
}

export const sum = function func(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = () => currentSum;

  return f;
};

console.dir(sum);
