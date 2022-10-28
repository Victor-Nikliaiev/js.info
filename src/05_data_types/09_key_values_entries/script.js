// let user = {
//   name: "John",
//   age: 30,
// };

import alert from "alert";

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// let user = {
//   name: "John",
//   age: 30,
// };

// for (let value of Object.values(user)) {
//   alert(value);
// }

// let prices = {
//   banana: 1,
//   orange: 2,
//   apple: 3,
// };

// let doublePrices = Object.fromEntries(
//   Object.entries(prices).map(([key, value]) => {
//     return [key, value * 2];
//   })
// );

// console.log(doublePrices);

// HomeWork

export function sumSalaries(salaries) {
  return Object.values(salaries).reduce((sum, value) => (sum += value), 0);
}

export function countProperties(obj) {
  return Object.keys(obj).length;
}
