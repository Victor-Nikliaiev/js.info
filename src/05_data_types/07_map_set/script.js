/* eslint-disable no-unused-vars */
import alert from "alert";

// let map = new Map();

// map.set("1", "str1");
// map.set(1, "num1");
// map.set(true, false);
// map.set(false, false);
// alert(map.get(1));
// alert(map.get("1"));
// alert(map.get(true));
// alert(map.size);

// let john = {
//   name: "John",
// };

// let visitsCountMap = new Map();
// visitsCountMap.set(john, 1);
// visitsCountMap.set(john, visitsCountMap.get(john) + 1);
// console.log(visitsCountMap.get(john));

// const map = new Map();
// map.set("1", "str1").set(1, "num1").set(true, "bool1");

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// for (let i of recipeMap.keys()) {
//   alert(i);
// }

// for (let i of recipeMap.values()) {
//   alert(i);
// }

// let user = {
//   id: 1,
//   name: "Victor",
//   age: 33,
// };

// let userMap = new Map(Object.entries(user));
// // console.log(userMap.get());

// for (let i of userMap) {
//   console.log(i);
// }

// recipeMap[Symbol.toPrimitive] = function (hint) {
//   return JSON.stringify(Array.from(this));
// };
// recipeMap.forEach((value, key, map) => {
//   console.log(`${key}: ${value} in ${map}`);
// });

// let map = new Map([
//   ["1", "str1"],
//   [1, "num1"],
//   [true, "bool1"],
// ]);

// console.log(map.get("1"));
// console.log(map.get(1));
// console.log(map.get(true));

// let obj = {
//   name: "John",
//   age: 30,
// };

// let map = new Map(Object.entries(obj));
// console.log(map.get(Object.keys(obj)[0]));

// let prices = Object.fromEntries([
//   ["kiwi", 2.5],
//   ["orange", 4],
//   ["apple", 3.8],
// ]);

// console.log(prices);

// let map = new Map();

// map.set("banana", 1);
// map.set("orange", 2);
// map.set("apple", 3);

// let obj = Object.fromEntries(map);
// console.log(obj.orange);

// let set = new Set();

// let john = { name: "John" };
// let join2 = john;
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// set.add(john);
// set.add(join2);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(join2);
// set.add(pete);
// set.add(mary);

// console.log(set);
// console.log(set.size);

// let set = new Set(["oranges", "apples", "bananas"]);
// set.forEach(v => alert(v));

export function unique(arr) {
  if (!arr.length) return [];

  return Array.from(new Set(arr));
}

export function aclean(arr) {
  const map = new Map(
    arr.map(word => {
      let key = word.toLowerCase().split("").sort().join("");
      return [key, word];
    })
  );

  return Array.from(map.values());
}
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log(aclean(arr));

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);
