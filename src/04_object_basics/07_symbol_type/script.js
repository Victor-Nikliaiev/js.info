/* eslint-disable no-unused-vars */

import alert from "alert";
// let id = Symbol();
// let id = Symbol("id");

// let id1 = Symbol("id");
// let id2 = Symbol("id");
// let id3 = id1;
// console.log(id1 === id3);
// console.log(id2);

// let id = Symbol("id");
// alert(id.toString());
// alert(id.description);

// let user = {
//   name: "John",
// };

// let userId = Symbol("userId");
// let userAge = Symbol("userAge");

// user[userId] = 1;
// user[userAge] = 33;

// console.log(user);

// const SYMBOL_BASE = new (function () {
//   this.USER_ID = Symbol("userId");
//   this.USER_AGE = Symbol("userAge");
//   this.USER_NAME = Symbol("userName");
// })();

// let user = {};
// user[symbolBase.userId] = 1;
// user[symbolBase.userName] = "Victor";
// user[symbolBase.userAge] = 33;

// console.log(user);
// alert(`Hello, ${user[symbolBase.userName]}`);

// let user = {
//   [symbolBase.userId]: 1,
//   [symbolBase.userName]: "Victor",
//   [symbolBase.userAge]: 33,
// };

// console.log(user);
// alert(`Hi, ${user[symbolBase.userName]}`);

// let user = {
//   [SYMBOL_BASE.USER_ID]: 1,
//   [SYMBOL_BASE.USER_NAME]: "Victor",
//   [SYMBOL_BASE.USER_AGE]: 33,
// };

// console.log(user);
// alert(`Hi, ${user[SYMBOL_BASE.USER_NAME]}`);

// let id = Symbol("id");

// let user = {
//   name: "John",
//   age: 30,
//   [id]: 123,
// };

// for (let prop in user) alert(prop);
// alert(`Direct: ${user[id]}`);
// console.log(Object.keys(user));

// let id = Symbol("id");
// let user = {
//   [id]: 123,
// };

// let clone = Object.assign({}, user);
// console.log(clone);
// console.log(clone[id]);

// let id = Symbol.for("id");
// let idAgain = Symbol.for("id");

// alert(id === idAgain);

// let user = {
//   [Symbol.for("id")]: 1,
//   [Symbol.for("name")]: "Victor",
//   [Symbol.for("age")]: 33,
// };

// alert(`Hi, ${user[Symbol.for("name")]}, everything's working!`);

// let sym = Symbol.for("id");
// let sym2 = Symbol.for("name");

// alert(Symbol.keyFor(sym));
// alert(Symbol.keyFor(sym2));

// let globalSymbol = Symbol.for("name");
// let localSymbol = Symbol("name");

// alert(Symbol.keyFor(globalSymbol));
// alert(Symbol.keyFor(localSymbol));

// alert(localSymbol.description);
// alert(globalSymbol.description);

let user = {
  [Symbol.for("id")]: 1,
  [Symbol.for("name")]: "Victor",
  age: 33,
};

const test = Object.getOwnPropertySymbols(user);
console.log(user[test[1]]); // Victor

const test2 = Reflect.ownKeys(user);
console.log(test2);
