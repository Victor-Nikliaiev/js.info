/* eslint-disable no-unused-vars */

import alert from "alert";

// let str = "testing";
// str.length = 4; // error
// console.log(str);

// let arr = ["Apple", "Orange", "Plum"];
// delete arr[1];
// alert(arr.length);

// let arr = ["I", "study", "JavaScript"];
// arr.splice(1, 1);
// alert(arr);

// let arr = ["I", "study", "JavaScript", "right", "now"];
// arr.splice(0, 3, ...["Let's", "dance"]);
// alert(arr);

// let arr = ["I", "study", "JavaScript", "right", "now"];
// let removed = arr.slice(0, 2);
// alert(removed);

// let arr = ["I", "study", "JavaScript"];
// arr.splice(2, 0, "complex", "language");
// alert(arr);

// let arr = [1, 2, 5];
// arr.splice(-1, 0, 3, 4);
// alert(arr);

// let arr = ["t", "e", "s", "t"];
// alert(arr.slice(1, 3));
// alert(arr.slice(-2));

// let arrClone = arr.slice();
// alert(arrClone);

// let arr = [1, 2];

// alert(arr.concat([3, 4]));
// alert(arr.concat([3, 4], [5, 6]));
// alert(arr.concat([3, 4], 5, 6));

// let arr = [1, 2];

// let arrLike = {
//   0: "something",
//   1: "else",
//   length: 2,
//   [Symbol.isConcatSpreadable]: true,
// };

// alert(arr.concat(arrLike));

// ["I", "love", "JS"].forEach(print);

// function print(str) {
//   alert(str);
// }

// ["Bilbo", "Gendalf", "Nazgul"].forEach(alert);

// ["Bilbo", "Gendalf", "Nazgul"].forEach((item, index, arr) => {
//   console.log(`${item} is at index ${index} in ${arr}`);
// });

// let arr = [1, 0, false];

// alert(arr.indexOf(0));
// alert(arr.indexOf(1));
// alert(arr.indexOf(false));
// alert(arr.indexOf(null));

// alert(arr.includes(1));
// alert(arr.includes(null));

// let fruits = ["Apple", "Orange", "Apple"];

// alert(fruits.indexOf("Apple"));
// alert(fruits.lastIndexOf("Apple"));

// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Sebastian" },
//   { id: 3, name: "Justine" },
// ];

// let foundUser = users.find(({ id, name }) => name === "Sebastian");
// console.log(foundUser);

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Peter" },
//   { id: 3, name: "Smith" },
//   { id: 4, name: "Peter" },
// ];

// let foundIndex1 = users.findIndex(({ name }) => name === "Peter");
// let foundIndex2 = users.findLastIndex(({ name }) => name === "Peter");
// console.log(foundIndex1);
// console.log(foundIndex2);

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Victor" },
//   { id: 3, name: "Smith" },
// ];

// let someUsers = users.filter(({ id }) => id < 3);

// console.log(someUsers);

// let result = ["Bilbo", "Gendalf", "Nazgul"].map(value => value.length);
// console.log(result);

// let arr = [1, 5, 12];
// arr.sort();
// console.log(arr);

// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }

// let arr = [1, 3, 15, 2];
// arr.sort(compareNumeric).reverse();
// console.log(arr);
// let arr = [1, -3, -2, 5, 2, -9];
// console.log(arr);
// arr.sort((a, b) => {
//   console.log(`${a} < > ${b}`);
//   return a - b;
// });
// console.log(arr);

// let arr = [9, 1, -2, 5, 6, 7, 3, 2, 0];
// arr.sort((a, b) => a - b);
// console.log(arr);

// let arr = ["Österreich", "Andorra", "Vietnam"];
// // console.log(arr.sort((a, b) => (a > b ? 1 : -1)));
// console.log(arr.sort((a, b) => a.localeCompare(b)));

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());

// let names = "Bilbo, Gendalf, Nazgul";

// names.split(", ").forEach(name => alert(`A message to ${name}`));

// let arr = "Bilbo, Gendalf, Nazgul, Saruman".split(", ", 2);
// console.log(arr);

// let str = "test";
// console.log(str.at(-1));

// let arr = ["Bilbo", "Gendalf", "Nazgul"];
// let str = arr.join("; ");
// console.log(str);

// let arr = [1, 3, 4, 2];

// console.log(arr.reduce((sum, item) => sum + item, 0));

// alert(typeof {});
// alert(typeof []);

// alert(Array.isArray({}));
// alert(Array.isArray([]));

// let army = {
//   minAge: 18,
//   maxAge: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age <= this.maxAge;
//   },
// };

// let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];
// let soldiers = users.filter(army.canJoin, army);
// console.log(soldiers);

// let users = [{ name: "Victor" }, { name: "Vlad" }, { name: "Ilya" }];
// let hasZ = users.some(({ name }) => name.includes("z"));
// alert(hasZ);

// function arraysEqual(arr1, arr2) {
//   return (
//     arr1.length === arr2.length &&
//     arr1.every((value, index) => value === arr2[index])
//   );
// }

// alert(arraysEqual([1, 2, 3], [1, 2, 3]));

// let arr = [];
// let num = 1;

// console.log(arr.fill(num, 0, 20));

// let arr = [1, 2, 3, 4];
// console.log(arr.fill(0, 2, 4));

// let arr = [0, 1, 2, 3, 4, 5];
// console.log(arr.copyWithin(0, 5, 6));

// const arr = [1, 2, [[[[[3, 4]]]]]];
// console.log(arr.flat(5)); // [ 1, 2, 3, 4 ]

// const arr = [1, [2, 3], [2], 5];
// console.log(arr.flatMap(item => item));

// homeWork

// 1
export function camelize(str) {
  return str
    .split("-")
    .map((value, index) => {
      if (!index) return value;
      return value[0].toUpperCase() + value.slice(1);
    })
    .join("");
}

export function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}

export function filterRangeInPlace(arr, a, b) {
  let filteredArr = arr.filter(item => item >= a && item <= b);
  arr.length = 0;
  arr.push(...filteredArr);
}

export function sortInDecreasingOrder(arr) {
  arr.sort((a, b) => b - a);
}

export function copySorted(arr) {
  if (!Array.isArray(arr) || !arr?.length) return [];

  return arr.slice().sort();
}

export function Calculator(str) {
  this.methods = {
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    const [a, operator, b] = str.split(" ");

    if (isNaN(a) || isNaN(b) || !operator)
      throw new Error(`String format isn't correct, given string is: '${str}'`);

    if (!this.methods[operator]) {
      throw new Error(`Method '${operator}' doesn't exist.`);
    }

    return this.methods[operator](+a, +b);
  };

  this.addMethod = function (operator, func) {
    if (this.methods[operator]) {
      throw new Error(`Method '${operator}' already exists.`);
    }

    this.methods[operator] = func;
  };
}

export function getNamesArray(arr) {
  return arr.map(user => user.name);
}

export function getFullNamedUsers(users) {
  return users.map(({ name, surname, id }) => ({
    fullName: `${name} ${surname}`,
    id,
  }));
}

export function sortByAge(users) {
  users.sort((user1, user2) => user1.age - user2.age);
}

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// let arr = [1, 2, 3];
// shuffle(arr);
// console.log(arr);

export function getAverageAge(users) {
  return Math.floor(
    users.reduce((acc, user) => acc + user.age, 0) / users.length
  );
}

export function unique(strings) {
  return strings.reduce((prev, current) => {
    if (prev.includes(current)) return prev;
    prev.push(current);
    return prev;
  }, []);
}

export function groupById(users) {
  return users.reduce((prev, current) => {
    prev[current.id] = current;
    return prev;
  }, {});
}
