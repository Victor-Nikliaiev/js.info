/* eslint-disable no-unused-vars */
// let range = {
//   from: 1,
//   to: 5,
// };

import alert from "alert";

// const range = {
//   from: "0",
//   to: "100",
// };

// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,

//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else return { done: true };
//     },
//   };
// };

// for (let i of range) {
//   console.log(i);
// }

// let range = {
//   from: 1,
//   to: 10,

//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if (this.current <= this.to) {
//       return { done: false, value: this.current++ };
//     } else {
//       return { done: true };
//     }
//   },
// };

// for (let num of range) {
//   console.log(num);
// }

// let range = {
//   from: 0,
//   to: Infinity,

//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if (this.current <= this.to) {
//       return { done: false, value: this.current++ };
//     } else {
//       return { done: true };
//     }
//   },
// };

// for (let i of range) {
//   let randomInt = Math.floor(Math.random() * (1e5 - 1) + 1);
//   console.log(`${i}: ${randomInt}`);

//   if (randomInt === 9e4) break;
// }

// for (let char of "test") {
//     let randomLetter = Math.floor(Math.random() * (26 -))
//     console.log();
// }
// let str = "";

// for (let i = 49; i <= 122; i++) {
//   str += String.fromCharCode(i);
// }

// console.log(str);

// let str = "𝒳😂";

// for (let char of str) {
//   alert(char);
// }

// let str = "Hello";

// let iterator = str[Symbol.iterator]();

// let r = iterator.next();
// console.log(r);

// r = iterator.next();
// console.log(r);

// r = iterator.next();
// console.log(r);

// r = iterator.next();
// console.log(r);

// r = iterator.next();
// console.log(r);

// r = iterator.next();
// console.log(r);
// while (true) {
//   let result = iterator.next();

//   if (result.done) break;
//   console.log(result.value);
// }

// let arr = [{ name: "Victor" }, { name: "Sebastian" }, { name: "Alex" }];

// let iterator = arr[Symbol.iterator]();

// let user1 = iterator.next().value;
// console.log(user1);

// let user2 = iterator.next().value;
// console.log(user2);

// let user3 = iterator.next().value;
// console.log(user3);

// let arrayLike = {
//   0: "Hello",
//   1: "World",
//   length: 2,
// };

// for (let item of arrayLike) {
// }

// let arrayLike = {
//   0: "Hello",
//   1: "World",
//   length: 2,
// };

// console.log(Array.from(arrayLike));

// let range = {
//   from: 0,
//   to: 90,

//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if (this.current <= this.to) {
//       return { done: false, value: this.current++ };
//     } else {
//       return { done: true };
//     }
//   },
// };

// let arr = Array.from(range);
// console.log(arr);

// let arr = Array.from(range, (v, k) => {
//   console.log("k: " + k);
//   return v * 2;
// });

// console.log(arr);

// String.prototype.sliceSurrogates = function (start, end) {
//   return Array.from(this).slice(start, end);
// };

// String.prototype.map = function (fn) {
//   return Array.from(this).map(fn).join("");
// };

// let str = "𝒳😂𝒳";
// console.log(str.map(char => String.fromCharCode(char.charCodeAt(0))));

// let user = {
//   id: 1,
//   name: "Victor",
//   age: 32,
// };

// user[Symbol.iterator] = function () {
//   return {
//     start: 0,
//     last: Object.keys(this).length,
//     userThis: this,

//     next() {
//       return this.start < this.last
//         ? { value: Object.values(this.userThis)[this.start++], done: false }
//         : { done: true };
//     },
//   };
// };

// let iterable = user[Symbol.iterator]();
// let id = iterable.next().value;
// console.log(id);
