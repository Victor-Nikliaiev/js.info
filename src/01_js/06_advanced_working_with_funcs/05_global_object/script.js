/* eslint-disable no-unused-vars */
import alert from "alert";

// function test() {
//   globalThis.name = "Victor";
// }

// test();
// console.log(globalThis.name);

class Test {
  constructor() {
    globalThis.user = {
      name: "John",
    };
  }

  sayHi() {
    alert("Hi, " + globalThis.user.name);
  }
}

// let test = new Test();
// test.sayHi();
// console.log(globalThis.user);

// if (globalThis.Promise) {
//   alert("Your browser is really old");
// }

console.log(globalThis);
