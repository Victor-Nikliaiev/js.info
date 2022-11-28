// let john = { name: "John" };

import alert from "alert";

// john = null;

// let john = { name: "John" };

// let arr = [john];

// john = null;

// console.log(arr[0]);

// let john = { name: "John" };

// let map = new Map(Object.entries(john));

// console.log(map);

// let john = { name: "John" };

// let map = new Map();
// map.set(john, "average user");
// john = null;

// john = Array.from(map.keys())[0];
// console.log(john);

// let weakMap = new WeakMap();

// let obj = {};

// weakMap.set(obj, "empty user");
// weakMap.set("test", "Whoops"); // error

// let john = { name: "John" };

// let weakMap = new WeakMap();

// weakMap.set(john, "average user :D");
// alert(weakMap.has(john));
// john = null;
// alert(weakMap.has(john));

// let visitsCountMap = new Map();

// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
// }

// let john = { name: "John" };
// countUser(john);
// countUser(john);
// countUser(john);

// console.log(visitsCountMap.get(john));
// john = null;
// console.log(visitsCountMap);

// const visitCounts = new WeakMap();

// function countUser(user) {
//   let count = visitCounts.get(user) || 0;
//   visitCounts.set(user, count + 1);
// }

// let john = { name: "John" };

// countUser(john);
// countUser(john);
// countUser(john);

// alert(visitCounts.get(john));

// const cache = new Map();

// function process(user) {
//   if (cache.has(user)) return cache.get(user);

//   let result = "sd8gsd8df8g5s5f8g9s5h4h3s41";
//   cache.set(user, result);
// }

// let user = { name: "Smith" };
// let result1 = process(user);
// let result2 = process(user);

// console.log(result2);
// user = null;
// console.log(cache.size);

// let cache = new WeakMap();

// function process(obj) {
//   if (cache.has(obj)) return cache.get(obj);

//   let result = "d1j6s8w0j1c5m3";
//   cache.set(obj, result);
//   return result;
// }

// let obj = { value: "blah-blah-blah" };

// let result1 = process(obj);
// let result2 = process(obj);

// console.log(result1);
// console.log(result2);

// obj = null;

// let visitedSet = new WeakSet();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// visitedSet.add(john);
// visitedSet.add(pete);
// visitedSet.add(john);

// alert(visitedSet.has(john));
// alert(visitedSet.has(mary));

// john = null;

// Homework
// 1
// const wasReadMessage = new WeakSet();

// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" },
// ];

// const isRead = Symbol("isRead");

// messages[0][isRead] = true;

// wasReadMessage.add(messages[0]);

// if (wasReadMessage.has(messages[0])) {
//   console.log("Message has been read");
// }

// messages.shift();

// if (wasReadMessage.has(messages[0])) {
//   console.log("Message has been read");
// }

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

const readDate = new WeakMap();

readDate.set(messages[0], new Date());

if (readDate.has(messages[0])) {
  alert(
    `The message has been read at ${readDate.get(messages[0]).toLocaleString()}`
  );
}
