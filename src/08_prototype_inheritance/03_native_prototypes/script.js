/* eslint-disable no-unused-vars */

// let obj = {};
// console.log(obj.__proto__ === Object.prototype);
// console.log(obj.toString === Object.prototype.toString);
// console.log(Object.prototype.__proto__);

import alert from "alert";

// let arr = [1, 2, 3];
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__ === Object.prototype);
// console.log(arr.__proto__.__proto__.__proto__ === null);
// Array.prototype.forEach.call([1, 2, 3], value => console.log(value));
// console.log([].join.call([1, 2, 3], "-"));

// function f() {}

// console.log(f.__proto__ === Function.prototype);
// console.log(f.__proto__.__proto__ === Object.prototype);
// console.log(String.prototype.includes.call("Hi", "s"));

// String.prototype.show = function () {
//   console.log(this);
// };

// "Test me".show();

// if (!String.prototype.repeat2) {
//   String.prototype.repeat2 = function (n) {
//     return new Array(n + 1).join(this);
//   };
// }

// alert("Z".repeat2(10));

// let obj = {
//   0: 300,
//   1: 400,
//   2: 300,
//   length: 3,
// };

// obj.__proto__ = Array.prototype;
// console.log(obj.reduce((sum, element) => (sum += element), 0));

// Homework

// 1
// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms);
// };

// function func() {
//   console.log("TRS");
// }

// func.defer(3000);

// 2

Function.prototype.defer = function (ms) {
  const ctx = this;
  return function () {
    setTimeout(() => console.log(ctx.apply(this, arguments)), ms);
  };
};

function func(a, b) {
  return a + b;
}

func.defer(3000)(3, 7);
