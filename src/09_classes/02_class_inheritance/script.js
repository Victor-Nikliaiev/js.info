/* eslint-disable no-unused-vars */
import alert from "alert";
import { Clock } from "./clock/clock.js";
import { ExtendedClock } from "./clock/extended-clock.js";

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }

//   run(speed) {
//     this.speed = speed;
//     alert(`${this.name} runs with speed ${this.speed}`);
//   }

//   stop() {
//     this.speed = 0;
//     alert(`${this.name} stands still`);
//   }
// }

// let animal = new Animal("My animal");
// [animal.name].forEach(alert);

// class Rabbit extends Animal {
//   hide() {
//     alert(`${this.name} hides!`);
//   }
// }

// const rabbit = new Rabbit("White Rabbit");
// rabbit.run(5);
// rabbit.hide();

// function f(phrase) {
//   return class {
//     sayHi() {
//       alert(phrase);
//     }
//   };
// }

// class User extends f("Hello") {}

// new User().sayHi();

// class Animal {
//   stop() {
//     alert("Ani");
//   }
// }

// class Rabbit extends Animal {
//   stop() {
//     alert("Rab");
//   }
// }

// new Rabbit().stop();

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }

//   run(speed) {
//     this.speed = speed;
//     alert(`${this.name} runs with speed ${this.speed}.`);
//   }

//   stop() {
//     this.speed = 0;
//     alert(`${this.name} stands still`);
//   }
// }

// class Rabbit extends Animal {
//   hide() {
//     alert(`${this.name} hides!`);
//   }

//   stop() {
//     super.stop();
//     this.hide();
//   }
// }

// let rabbit = new Rabbit("White Rabbit");

// rabbit.run(5);
// rabbit.stop();

// class Rabbit extends Animal {
//   constructor(...args) {
//     super(...args);
//   }
//   stop() {
//     setTimeout(() => super.stop(), 1000);
//   }
// }

// new Rabbit("White Rabbit").stop();

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, earLength) {
//     super(name);
//     this.speed = 0;
//     this.name = name;
//     this.earLength = earLength;
//   }
// }

// let rabbit = new Rabbit("White Rabbit", 10);
// console.log(rabbit.name);

// class Animal {
//   name = "animal";

//   constructor() {
//     console.log(this.name);
//   }
// }

// class Rabbit extends Animal {
//   name = "rabbit";
// }

// new Animal();
// console.log(new Rabbit().name);

// class Animal {
//   showName() {
//     alert("animal");
//   }

//   constructor() {
//     this.showName();
//   }
// }

// class Rabbit extends Animal {
//   showName() {
//     alert("rabbit");
//   }
// }

// new Animal();
// new Rabbit();

// let animal = {
//   name: "Animal",
//   eat() {
//     console.log(`${this.name}  eats...`);
//   },
// };

// let rabbit = {
//   __proto__: animal,
//   name: "Rabbit",

//   eat() {
//     super.eat();
//   },
// };

// let longEar = {
//   __proto__: rabbit,
//   name: "Long Ear",
//   eat() {
//     super.eat();
//   },
// };

// longEar.eat();

// Homework

// 1
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    this.createdAt = Date.now();
  }
}

let rabbit = new Rabbit("Black Pearl");
// console.log(rabbit.name);

// 2
// let clock = new Clock({ template: "h : m : s" });
// clock.start();
let extendedClock = new ExtendedClock({
  template: "h : m: s",
  precision: 2000,
});
extendedClock.start();
