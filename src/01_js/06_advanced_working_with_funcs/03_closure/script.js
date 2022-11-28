import alert from "alert";

// {
//   let message = "Hello";

//   alert(message);
// }

// alert(message);

// {
//   let message = "Hello";
//   alert(message);
// }

// {
//   let message = "GoodBuy";
//   alert(message);
// }

// function sayHiBye(firstName, lastName) {
//   function getFullName() {
//     return firstName + " " + lastName;
//   }

//   alert("Hello, " + getFullName());
//   alert("Bye,  " + getFullName());
// }

// sayHiBye("John", "Smith");

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return ++count;
//   };
// }

// const counter = makeCounter();
// counter();
// counter();
// console.log(counter());
// console.log(this);

// function getYourNews() {
//   let done = false;

//   return function () {
//     if (done) return "you already read it...";

//     // some logic which can be done only once //
//     let news = "blah-blah-blah";

//     done = true;
//     return news;
//   };
// }

// let news = getYourNews();
// console.log(news());
// console.log(news());
// console.log(news());

// function f() {
//   let value = 123;

//   return function () {
//     console.log(value);
//   };
// }

// let g = f();
// g();

// function f() {
//   let value = Math.random();

//   return function () {
//     alert(value);
//   };
// }

// let arr = [f(), f(), f()];
// arr[0]();
// arr[1]();
// arr[2]();

// function f() {
//   let value = Math.random();

//   function g() {
//     debugger; // in console: type alert(value); No such variable!
//   }

//   return g;
// }

// let g = f();
// g();

// let valueZ = "Surprise!";

// function f() {
//   let valueZ = "the closest value";

//   function g() {
//     debugger;
//   }

//   return g;
// }

// let z = f();
// z();

// Homework
// 1

// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi();

// function Counter() {
//   let count = 0;

//   this.up = function () {
//     return ++count;
//   };

//   this.down = function () {
//     return --count;
//   };
// }

// let counter = new Counter();

// console.log(counter.up());
// console.log(counter.up());
// console.log(counter.down());

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(sum(2)(3));

export function inBetween(a, b) {
  return function (v) {
    return v >= a && v <= b;
  };
}
export function inArray(array) {
  return function (v) {
    return array.includes(v);
  };
}

export function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

export function makeArmy() {
  let shooters = [];
  let i = 0;

  while (i < 10) {
    let j = i;
    let shooter = function () {
      return j;
    };

    shooters.push(shooter);
    i++;
  }

  return shooters;
}
