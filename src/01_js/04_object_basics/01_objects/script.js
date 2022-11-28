/* eslint-disable no-unused-vars */

// let user = new Object();
// let user = {};

// let user = {
//   name: "John",
//   age: 30,
// };

// user.isAdmin = true;

// console.log(user.name);
// console.log(user.age);
// console.log(user.isAdmin);
// delete user.age;
// console.log(user.age);

// const user = {
//   name: "Victor",
//   age: 33,
//   "likes birds": true,
// };

// console.log(user["likes birds"]);

// let user = {};
// let password1 = { password: "123" };
// let password2 = { password3: "1235" };
// user["likes birds"] = true;
// console.log(user["likes birds"]);
// user[password1] = 123;
// user[password2] = 321;

// console.log(user[password1]);
// console.log(user[password2]);

// let user = {
//   name: "Victor",
//   age: 33,
// };

// let key = prompt("What do you want to know about user?", "");
// alert(user[key]);

// let fruit = prompt("Which fruit to buy?", "");

// let bag = {
//   [fruit]: 5,
// };

// alert(bag.apple);

// function makeUser(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// const user = makeUser("Victor", 33);
// console.log(user);

// let obj = {
//   for: 1,
//   let: 2,
//   return: 3,
// };

// console.log(obj);
// let obj = {
//   0: "test",
// };

// console.log(obj[0]);
// console.log(obj["0"]);

// let obj = {};
// obj.__proto__ = { test: 1 };
// console.log(obj.__proto__);

// let user = { name: "Victor" };

// console.log(user.noSuchProperty === undefined);
// console.log("name" in user);

// let user = { age: 30 };
// let key = "age";

// console.log(key in user);

// let obj = {
//   test: undefined,
// };

// console.log(obj.test);
// console.log("test" in obj);

// let user = {
//   name: "Victor",
//   age: 33,
//   isAdmin: true,
// };

// for (let key in user) {
//   console.log(`${key}: ${user[key]}`);
// }

// let codes = {
//   49: "Germany",
//   41: "Switzerland",
//   44: "Great Britain",
//   1: "USA",
// };

// for (let prop in codes) {
//   console.log(`${prop}: ${codes[prop]}`);
// }

// let user = {
//   name: "John",
//   surname: "Smith",
// };
// user.age = 22;

// for (let prop in user) {
//   console.log(`${prop}: ${user[prop]}`);
// }

// let codes = {
//   "+49": "Germany",
//   "+41": "Switzerland",
//   "+44": "Great Britain",
//   "+1": "USA",
// };

// for (let prop in codes) {
//   console.log(+prop);
// }

// Homework
// // 1
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// console.log(user);

// 2
function isEmpty(obj) {
  for (let prop in obj) return false;
  return true;
}

// 3
function sumSalaries(salaries) {
  let sum = 0;
  for (let prop in salaries) sum += salaries[prop];
  return sum;
}

// 4
function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === "number") obj[prop] *= 2;
  }
}

module.exports = { isEmpty, sumSalaries, multiplyNumeric };
