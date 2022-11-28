/* eslint-disable no-unused-vars */
import name from "prompt-sync";
const prompt = name();

// let user = {
//   name: "John",
//   age: 30,
// };

// let user = {
//   name: "John",
//   age: 33,
// };

// user.sayHi = function () {
//   console.log("Hell@!");
// };

// user.sayHi();

// let user = {};

// function sayHi() {
//   console.log("Hi!");
// }

// user.sayHi = sayHi;
// user.sayHi();

// const user = {
//   sayHi: function () {
//     console.log("Hi, there!");
//   },
// };

// const user = {
//   sayHi() {
//     console.log("Hi hi hi!");
//   },
// };

// user.sayHi();

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     console.log(`Hi, ${this.name}`);
//   },
// };

// user.sayHi();

// let user = {
//   name: "Vic",
//   age: 33,

//   sayHi() {
//     console.log(user.name);
//   },
// };

// user.sayHi();

// let user = {
//   name: "Vic",
//   age: 33,

//   sayHi() {
//     console.log(`Hi, ${user.name}!`);
//   },
// };

// let admin = user;
// user = null;

// admin.sayHi();

// function sayHi() {
//   console.log(this.name);
// }

// let user = { name: "John" };
// let admin = { name: "Victor" };

// function sayHi() {
//   console.log(`Hi, ${this.name}!`);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();
// admin["f"]();
// const admin = { age: 33 };
// function sayHi() {
//   console.log(this);
// }

// admin.f = sayHi;
// admin.f();
// let clone = JSON.parse(JSON.stringify(admin));
// console.log(clone == admin);
// console.log(typeof clone);

// Homework
// 1
// function makeUser() {
//   return {
//     name: "Vic",
//     ref: this,
//   };
// }

// let user = makeUser();
// console.log(user);

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();
// console.log(user.ref().ref().ref().name);

// export let calculator = {
//   read() {
//     this.a = +prompt("a?: ");
//     this.b = +prompt("b?: ");
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// console.log("sum = " + calculator.sum());
// console.log("mul = " + calculator.mul());

// 3

let ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },

  down() {
    this.step--;
    return this;
  },

  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().showStep().down().showStep();
