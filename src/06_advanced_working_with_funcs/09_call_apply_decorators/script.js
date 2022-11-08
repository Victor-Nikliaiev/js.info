/* eslint-disable no-unused-vars */
// function slow(x) {
//   let sum = x;

//   for (let i = 0; i < 1e9; i++) {
//     sum += i;
//   }

//   return sum;
// }

// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     let sum = x;

//     for (let i = 0; i < 1e9; i++) {
//       sum += i;
//     }

//     return sum + this.someMethod(); // (*)
//   },
// };

// function cachingDecorator(func) {
//   let cache = new Map();

//   return function (x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }

//     const calcResult = func.call(this, x);
//     cache.set(x, calcResult);
//     return calcResult;
//   };
// }

// console.log(slow(1));
// console.log(slow(1));
// console.log(slow(1));

// slow = cachingDecorator(slow);
// console.log(slow(1));
// console.log(slow(1));
// console.log(slow(1));

// console.log(worker.slow(1));
// worker.slow = cachingDecorator(worker.slow);
// worker.slow(1);

// function sayHi() {
//   console.log(this.name);
// }

// let user = { name: "Victor" };
// let admin = { name: "Arhis" };

// sayHi.call(user);
// sayHi.call(admin);

// function sayHi(phrase) {
//   console.log(`${phrase}, ${this.name}!`);
// }

// let user = { name: "John" };
// let admin = { name: "Admin" };

// sayHi.call(user, "Hello");
// sayHi.call(admin, "Hi");

// worker.slow = cachingDecorator(worker.slow);
// console.log(worker.slow(1));
// console.log(worker.slow(1));
// console.log(worker.slow(1));

// function cachingDecorator(func) {
//   let cache = new Map();

//   return function () {
//     let key = JSON.stringify(arguments);

//     if (cache.has(key)) {
//       return cache.get(key);
//     }

//     let result = func.apply(this, arguments);
//     cache.set(key, result);

//     return result;
//   };
// }

// let worker = {
//   slow(min, max) {
//     let sum = 0;

//     for (let i = 0; i < 1e9; i++) {
//       sum += i;
//     }

//     return sum + min + max;
//   },
// };

// worker.slow = cachingDecorator(worker.slow);

// console.log(worker.slow(1, 3));
// console.log(worker.slow(1, 3));
// console.log(worker.slow(1, 3));

// let wrapper = function (func) {
//   return func.apply(this, arguments);
// };

// function sum(a, b) {
//   return a + b;
// }

// console.log([].join.call([1, 2, 3]));

// Homework
// 1 Spy-decorator

function work(a, b) {
  console.log(a + b);
}

export function spyDecorator(func) {
  wrapper.calls = [];

  function wrapper() {
    wrapper.calls.push([...arguments]);
    return func.apply(this, arguments);
  }

  return wrapper;
}

// work = spyDecorator(work);

// work(1, 2);
// work(2, 3);
// work(1, 2);

// console.log(work.calls);

// 2
export function delayDecorator(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

// 3
export function debounceDecorator(func, ms) {
  let timerId;

  return function () {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, arguments);
    }, ms);
  };
}

// 4
export function throttleDecorator(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    isThrottled = true;

    func.apply(this, arguments);

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}
