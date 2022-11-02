/* eslint-disable no-unused-vars */

import { bench } from "../../utils.js";

// function pow(x, n) {
//   if (n == 1) return x;
//   return x * pow(x, n - 1);
// }

// console.log(pow(2, 4));
// console.log(pow(2, 7));
// const pow = (x, n) => (n == 1 ? x : x * pow(x, n - 1));
// const pow2 = (x, n) => {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// };
// console.log(bench({ fn1: pow, fn2: pow2 }, fn => fn(2, 20)));

// let company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };

// function getSum(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((sum, worker) => (sum += worker.salary), 0);
//   }

//   let sum = 0;

//   for (let subdep of Object.values(department)) {
//     sum += getSum(subdep);
//   }

//   return sum;
// }

// console.log(getSum(company));

// Homework

// 1 //
// 1
// Recursion variant
function sumTo(num) {
  if (num == 1) return num;
  return num + sumTo(num - 1);
}

// console.log(sumTo(1));
// console.log(sumTo(2));
// console.log(sumTo(3));
// console.log(sumTo(4));
// console.log(sumTo(100));

// 2
// Loop variant
function sumTo2(num) {
  let sum = 0;

  for (let i = num; i > 0; i--) {
    sum += i;
  }

  return sum;
}

// console.log(sumTo2(1));
// console.log(sumTo2(2));
// console.log(sumTo2(3));
// console.log(sumTo2(4));
// console.log(sumTo2(100));

// 3
// Formula variant
function sumTo3(num) {
  return (num * (num + 1)) / 2;
}

// console.log(
//   bench(
//     {
//       funcArray: [sumTo, sumTo2, sumTo3],
//       repeatTimes: 30,
//       circlesQuantity: 1000,
//     },
//     fn => fn(1e5)
//   )
// );

// 2 //
// function factorial(num) {
//   if (num == 1) return num;

//   return num * factorial(num - 1);
// }

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));

// 3 //
function fib(num) {
  let prev = 0;
  let current = 1;
  let next;

  for (let i = 0; i < num; i++) {
    next = prev + current;
    prev = current;
    current = next;
  }

  return prev;
}

function fib2(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// console.log(
//   bench({ funcArray: [fib, fib2], repeatTimes: 40, circlesQuantity: 1e4 }, fn =>
//     fn(77)
//   )
// );

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// 4 //
// printList(list);

// function printList(list) {
//   console.log(list.value);
//   if (list.next) {
//     printList(list.next);
//   }
// }

// 5 //
function printReversedList(list) {
  if (list.next) {
    printReversedList(list.next);
  }

  console.log(list.value);
}

printReversedList(list);
