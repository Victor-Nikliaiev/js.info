import alert from "alert";

// let obj = {};

// obj[Symbol.toPrimitive] = function (hint) {};

// let user = {
//   name: "John",
//   money: 1000,

//   [Symbol.toPrimitive](hint) {
//     alert(`hint: ${hint}`);
//     return hint == "string" ? `{ name: ${this.name} }` : this.money;
//   },
// };

// alert(user);
// alert(+user);
// alert(user + 500);

// let user = { name: "John" };

// alert(user);
// alert(user.valueOf() === user);

// let user = {
//   name: "John",
//   money: 1000,

//   // for hint = "string"
//   toString() {
//     return `{name: ${this.name}}`;
//   },

//   // for hint = "number" or "default"
//   valueOf() {
//     return this.money;
//   },
// };

// alert(user);
// alert(+user);
// alert(user + 500);

// let user = {
//   name: "Victor",

//   toString() {
//     return this.name;
//   },
// };

// alert(`Hello, ${user}`);

// let user = {
//   name: "Victor",

//   [Symbol.toPrimitive]() {
//     return JSON.stringify(this);
//   },
// };

// alert(user);

// let user = {
//   name: "Victor",
//   age: 33,

//   toString() {
//     return JSON.stringify(this);
//   },
// };

// const user = new (function () {
//   this.name = "Victor";

//   this.toString = function () {
//     return true;
//   };
// })();

// alert(user);

// let obj = {
//   toString() {
//     return "2";
//   },
// };

// alert(obj + 1);
// alert(obj - 3);
// alert(1 + obj);

let user = new (function () {
  this.name = "Sim";
  this.age = 33;

  this[Symbol.toPrimitive] = function (hint) {
    if (hint === "string") return `{name: ${this.name}, age: ${this.age}}`;
    return this.age;
  };
})();

alert(user - 3); // 30
alert(user + 3); // 36
alert(user); // {name: Sim, age: 33}
