/* eslint-disable no-func-assign */

import promptSync from "prompt-sync";
const prompt = promptSync();
// let user = {
//   name: "John",
//   sayHi() {
//     console.table(`Hello, ${this.name}`);
//   },
// };

// setTimeout(user.sayHi, 1000);

// let user = {
//   firstName: "John",
//   sayHi() {
//     console.table([`Hello, ${this.firstName}`]);
//   },
// };

// setTimeout(() => user.sayHi(), 1000);

// user = {
//   sayHi() {
//     console.table(["Another user in setTimeout"]);
//   },
// };

// let user = {
//   firstName: "Victor",
// };

// function func() {
//   console.table([`Hi, ${this.firstName}!`]);
// }

// const userFunc = func.bind(user);
// userFunc();

// let user = {
//   name: "victor",
// };

// function printFormattedName(phrase) {
//   console.table([
//     `${phrase}, ${
//       this.name.slice(0, 1).toLocaleUpperCase() + this.name.slice(1)
//     }!`,
//   ]);
// }

// printFormattedName = printFormattedName.bind(user);
// printFormattedName("Hello");

// let user = {
//   name: "Vic",
//   sayHi() {
//     console.table([`Hello, ${this.name}!`]);
//   },
// };

// function bindDecorator(fn, providedThis) {
//   return function () {
//     return fn.apply(providedThis, arguments);
//   };
// }

// const sayHi = bindDecorator(user.sayHi, user);

// setTimeout(sayHi, 1000);

// user = {
//   sayHi() {
//     console.table(["Another object, eventually"]);
//   },
// };

// function mul(a, b) {
//   return a * b;
// }

// let double = mul.bind(null, 2);

// console.table([double(3), double(2), double(4)]);

// function mul(a, b) {
//   return a * b;
// }

// const triple = mul.bind(null, 3);
// console.table([triple(2), triple(3), triple(4)]);

// let user = {
//   name: "Victor",
//   date: new Date(1989, 2, 23),
// };

// function formateMessage(userName, date, message) {
//   return `[${date.toLocaleDateString()}] ${userName}: ${message}`;
// }

// const userMessage = formateMessage.bind(null, user.name, user.date);
// console.table([userMessage("Hello"), userMessage("How are you?")]);

// let user = {
//   name: "John",
//   say(time, phrase) {
//     console.table([`[${time}] ${this.name}: ${phrase}`]);
//   },
// };

// function partial(func, ...boundArgs) {
//   return function (...args) {
//     return func.call(this, ...boundArgs, ...args);
//   };
// }

// user.sayNow = partial(
//   user.say,
//   `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
// );

// user.sayNow("Test");
// user.sayNow("Hi");

// 1
// function askPassword(ok, fail) {
//   let password = prompt("Password?: ");

//   if (password === "star") ok();
//   else fail();
// }

// let user = {
//   name: "Will",

//   loginOk() {
//     console.table([`${this.name} logged in.`]);
//   },

//   loginFail() {
//     console.table([`${this.name} failed to log in.`]);
//   },
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 2
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(
  () => user.login(true),
  () => user.login(false)
);
