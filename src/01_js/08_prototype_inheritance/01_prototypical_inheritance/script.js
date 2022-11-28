/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */

// let animal = {
//   eats: true,
// };

import { bench } from "../../utils.js";

// let rabbit = {
//   jump: true,
// };

// rabbit.__proto__ = animal;

// console.table(rabbit);
// console.log(rabbit.eats);

// let animal = {
//   eats: true,
//   walk() {
//     console.log("the animal walks...");
//   },
// };

// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal;

// rabbit.walk();

// let animal = {
//   eats: true,
//   walk() {
//     console.log("the animal walks...");
//   },
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// let longEars = {
//   earLength: 10,
//   __proto__: rabbit,
// };

// longEars.walk();
// console.log(longEars.jumps);

// let universe = {
//   age: Infinity,
//   __proto__: null,
// };

// let animal = {
//   eats: true,
//   walk() {
//     console.log("the animal walks...");
//   },
// };

// let rabbit = {
//   __proto__: animal,
// };

// rabbit.walk = () => {
//   console.log("Rabbit! Bounce-bounce!");
// };

// rabbit.walk();

// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     let arrOfValues = value.split(" ");

//     if (arrOfValues.length > 2 || arrOfValues < 2) return;

//     [this.name, this.surname] = arrOfValues;
//   },
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true,
// };

// console.log(admin.fullName);
// admin.fullName = "Victor Onlight";
// console.table(user);
// console.table(admin);

// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       console.log("I walk...");
//     }
//   },

//   sleep() {
//     this.isSleeping = true;
//   },
// };

// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal,
// };

// rabbit.sleep();
// console.table(rabbit);
// console.table(animal);

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// for (let key in rabbit) {
//   console.log(key);
// }

// console.log(rabbit.hasOwnProperty("jumps"));

// let animal = {
//   eats: true,
//   walk() {},
// };

// let rabbit = {
//   jumps: true,
//   multiply() {},
//   __proto__: animal,
// };

// for (let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);

//   if (isOwn) {
//     console.log(`Our: ${prop}`);
//     continue;
//   }

//   console.log(`Inherited: ${prop}`);
// }

// Homework

// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };

// console.log(
//   bench(
//     {
//       funcArray: [() => "glasses" in pockets, () => "glasses" in head],
//       repeatTimes: 100,
//       circlesQuantity: 1e6,
//     },
//     f => {
//       f();
//     }
//   )
// );

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   },
// };

// let speedy = {
//   stomach: [],
//   __proto__: hamster,
// };

// let lazy = {
//   stomach: [],
//   __proto__: hamster,
// };

// speedy.eat("apple");
// speedy.eat(lazy);
// console.table(speedy);
// console.table(lazy);

let hamster = {
  stomach: [],

  eat(food) {
    if (!this.hasOwnProperty("stomach")) {
      this.stomach = [];
    }
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

speedy.eat("apple");
speedy.eat(lazy);
console.table(speedy);
console.table(lazy);
