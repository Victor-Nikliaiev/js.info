/* eslint-disable no-unused-vars */

// function calculateResult(result) {
//   console.log(result);
//   return result * 2;
// }

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(calculateResult)
//   .then(calculateResult)
//   .then(calculateResult);

// function getResult(result) {
//   console.log(result);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(result * 2), 1000);
//   });
// }

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(getResult)
//   .then(getResult)
//   .then(getResult);

// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }

//   then(resolve, reject) {
//     console.log(resolve);
//     setTimeout(() => resolve(this.num * 2), 1000);
//   }
// }

// new Promise(resolve => resolve(1))
//   .then(result => {
//     return new Thenable(result);
//   })
//   .then(console.log);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(result => console.log(result.title));
