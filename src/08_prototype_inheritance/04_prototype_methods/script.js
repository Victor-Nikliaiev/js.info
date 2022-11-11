// let animal = {
//   eats: true,
// };

import alert from "alert";

// let rabbit = Object.create(animal, {
//   name: { value: "Rabbit", enumerable: true },
// });

// console.log(rabbit.eats);
// console.log(Object.getPrototypeOf(rabbit) === animal);
// Object.setPrototypeOf(rabbit, { eats: "yeah:D" });
// console.log(rabbit.eats);

// let animal = {
//   eats: true,
// };

// let rabbit = Object.create(animal, {
//   jumps: { value: true, enumerable: true },
// });

// console.table(rabbit);

// let obj = {
//   0: 1,
//   1: 2,
//   2: 3,
//   length: 3,
//   __proto__: Array.prototype,
// };

// let clone = Object.create(
//   Object.getPrototypeOf(obj),
//   Object.getOwnPropertyDescriptors(obj)
// );

// console.table(clone);
// console.log(clone.__proto__ === Array.prototype);
// console.log(clone.reduce((sum, item) => sum + item, 0));

// let obj = Object.create(null);

// obj["__proto__"] = "Test";
// console.log(obj["__proto__"]);

// let obj = Object.create(null);

// alert(obj);

// let chineseDictionary = Object.create(null);
// chineseDictionary.hello = "你好";
// chineseDictionary.bye = "再見";
// console.log(Object.keys(chineseDictionary));

// Homework

// 1
let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    },
  },
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";
// console.table(dictionary);
alert(dictionary);
