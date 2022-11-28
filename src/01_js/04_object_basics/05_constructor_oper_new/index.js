/* eslint-disable no-unused-vars */

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");

// console.log(user.name);
// console.log(user.isAdmin);

// let user2 = {
//   name: "Vic",
//   isAdmin: true,
// };

// let user = new (function () {
//   this.name = "John";
//   this.isAdmin = false;
// })();

// console.log(typeof user);

// function User() {
//   console.log(new.target);
// }

// User();
// console.log(new User());

// export function User(name) {
//   if (!new.target) {
//     return new User(name);
//   }

//   this.name = name;
// }

// let newUser = User("John");
// console.log(newUser);
// console.log(newUser.name);

// function BigUser() {
//   if (!new.target) {
//     return new BigUser();
//   }

//   this.name = "John";
//   return { name: "Godzilla" };
// }

// function SmallUser() {
//   this.name = "John";
//   return null;
// }

// console.log(new BigUser());

// function User(name) {
//   this.name = name;

//   this.sayHi = function () {
//     console.log(`My name is ${this.name}`);
//   };
// }

// const victor = new User("Victor");
// victor.sayHi();

// Homework
// 1

// const obj = {};

// function A() {
//   return obj;
// }

// function B() {
//   return obj;
// }

// console.log(new A() === new B());

// 2
function Calculator() {
  this.read = function () {
    this.a = +prompt("a? ", 0);
    this.b = +prompt("b? ", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

// 3
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("What to add?", 0);
  };
}
