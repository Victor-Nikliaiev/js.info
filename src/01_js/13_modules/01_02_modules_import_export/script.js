// import { sayHi } from "./anotherFile.js";

// sayHi();

// console.log(import.meta);

export let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// export default class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// import User2 from "./script.js";

// User2.prototype.name = "D";

// console.log(User2.prototype.name);

// export default class {
//   constructor(name) {
//     this.name = name;
//   }
// }

// export default function (user) {
//   alert("Hello, " + user);
// }

// function sayHi(user) {
//   alert(`Hello ${user}!`);
// }

// export { sayHi as default };

// import { default as User, sayHi } from "./anotherFile.js";

import * as user from "./user.js";
const User = user.default;

let u = new User("Vic");

console.log(u.name);
