/* eslint-disable no-unused-vars */

// class Test {}

import alert from "alert";
import promptSync from "prompt-sync";
const prompt = promptSync();

// console.log(typeof Test);

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     alert(this.name);
//   }
// }

// let user = new User("John");
// console.log(user.name);
// user.sayHi();

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     alert(this.name);
//   }
// }

// alert(typeof User);

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     alert(this.name);
//   }
// }

// alert(typeof User);
// alert(User === User.prototype.constructor);

// for (let key in User.prototype) {
//   console.log(key);
// }

// console.table(Object.getOwnPropertyNames(User.prototype));

// const User = function userClass(name) {
//   this.name = name;

//   userClass.prototype.sayHi = function () {
//     alert(this.name);
//   };
// };

// let user = new User("John");
// user.sayHi();

// const User = class {
//   sayHi() {
//     alert("Hello");
//   }
// };

// const User = class MyClass {
//   sayHi() {
//     alert(MyClass);
//   }
// };

// new User().sayHi();
// alert(MyClass);

function MakeUser(name) {
  let _name = null;

  class ClassMakeUser {
    constructor(name) {
      if (!name) return;
      this.name = name;
    }

    get name() {
      return _name;
    }

    set name(value) {
      if (this.name) return;

      if (value.length < 4) {
        throw new Error("Name is too short, at least can be 4 chars");
      }

      _name = value;
    }
  }

  return new ClassMakeUser(name);
}

// let user = MakeUser();
// user.name = "Victor";
// console.log(user.name);

// class User {
//   ["say" + "Hi"]() {
//     alert("Hello");
//   }
// }

// new User()["sayHi"]();
// new User().sayHi();

// class User {
//   name = "John";

//   sayHi() {
//     alert(`Hello, ${this.name}`);
//   }
// }

// new User().sayHi();

// class User {
//   name = prompt("Name, please?: ", { value: "John" });
// }

// let user = new User();
// alert(user.name);

// class Button {
//   constructor(value) {
//     this.value = value;
//   }

//   click = () => {
//     alert(this.value);
//   };
// }

// let button = new Button("hello");

// setTimeout(button.click, 1000);

// Homework
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render = () => {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  };

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(this.render, 1000);
  }
}
// function Clock({ template }) {
//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   this.stop = function () {
//     clearInterval(timer);
//   };

//   this.start = function () {
//     render();
//     timer = setInterval(render, 1000);
//   };
// }

let clock = new Clock({ template: "h:m:s" });
clock.start();

setTimeout(() => clearInterval(clock.timer), 10000);
