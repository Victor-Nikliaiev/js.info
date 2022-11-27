// // let target = {};
// // let proxy = new Proxy(target, {});

// // proxy.test = 5;
// // console.log(target.test);
// // console.log(proxy.test);

// // for (let key in proxy) console.log(key);

// // let numbers = [0, 1, 2];

// // numbers = new Proxy(numbers, {
// //   get(target, property) {
// //     if (property in target) {
// //       return target[property];
// //     } else return 0;
// //   },
// // });

// // console.log(numbers[4]);

// // let dictionary = {
// //   Hello: "Hola",
// //   Bye: "Adiós",
// // };

// // dictionary = new Proxy(dictionary, {
// //   get(target, property) {
// //     if (property in target) {
// //       return target[property];
// //     } else {
// //       return property;
// //     }
// //   },
// // });

// // console.log(dictionary["Hello"]);
// // console.log(dictionary["Test"]);

// // let numbers = [];

// // numbers = new Proxy(numbers, {
// //   set(target, property, value) {
// //     if (typeof value == "number") {
// //       target[property] = value;
// //       return true;
// //     } else {
// //       throw new Error("Type is incorrect, only number is allowed");
// //     }
// //   },
// // });

// // numbers.push("");

// let user = {
//   name: "John",
//   age: 30,
//   _password: "***",
// };

// user = new Proxy(user, {
//   ownKeys(target) {
//     return Object.keys(target).filter(key => !key.startsWith("_"));
//   },
// });

// for (let key in user) {
//   console.log(key);
// }

// let user = {};

// user = new Proxy(user, {
//   ownKeys(target) {
//     return ["a", "b", "c"];
//   },

//   getOwnPropertyDescriptor(target, prop) {
//     return {
//       enumerable: true,
//       configurable: true,
//     };
//   },
// });

// console.log(Object.keys(user));

// let user = {
//   name: "John",
//   _password: "*****",
//   checkPassword(value) {
//     return this._password === value;
//   },
// };

// let user = {
//   name: "John",
// };

// user = new Proxy(user, {
//   get(target, prop) {
//     if (prop.startsWith("_")) {
//       throw new Error("Access Denied!");
//     }

//     let value = target[prop];
//     return typeof value === "function" ? value.bind(target) : value;
//   },

//   set(target, prop, value) {
//     if (prop.startsWith("_")) {
//       throw new Error("Access Denied!");
//     }

//     target[prop] = value;
//     return true;
//   },

//   deleteProperty(target, prop) {
//     if (prop.startsWith("_")) {
//       throw new Error("Access Denied.");
//     }

//     delete target[prop];
//     return true;
//   },

//   ownKeys(target) {
//     return Object.keys(target).filter(key => !key.startsWith("_"));
//   },
// });

// console.log(Object.values(user));
// console.log(user.checkPassword("*****"));

// let range = {
//   from: 1,
//   to: 10,
// };

// range = new Proxy(range, {
//   has(target, prop) {
//     return prop >= target.from && prop <= target.to;
//   },
// });

// console.log(4 in range);
// console.log(44 in range);

function delay(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms);
    },
  });
}

// function sayHi(user) {
//   console.log(`Hello, ${user}!`);
// }

// sayHi = delay(sayHi, 2000);

// sayHi("Vic");
// console.log(sayHi.name);
// console.log(sayHi.length);

// Homework

// 1
// let user = {
//   name: "John",
// };

// function wrap(target) {
//   return new Proxy(target, {
//     get(target, prop) {
//       if (target[prop] === undefined) {
//         throw new ReferenceError(`Property doesn't exist: "${prop}"`);
//       }
//       return Reflect.get(...arguments);
//     },
//   });
// }

// user = wrap(user);

// console.log(user.name);

// 2
let arr = [1, 2, 3];

arr = new Proxy(arr, {
  get(target, prop, receiver) {
    if (prop < 0) {
      return target[target.length - Math.abs(prop)];
    }
    return Reflect.get(...arguments);
  },
});

// console.log(arr[2]);

// 3
function makeObservable(target, handlers = Symbol("handlers")) {
  target[handlers] = [];
  target.observe = function (handler) {
    this[handlers].push(handler);
  };

  return new Proxy(target, {
    set(target, prop, value, receiver) {
      let success = Reflect.set(...arguments);
      if (success) {
        target[handlers].forEach(handler => handler(prop, value));
      }

      return success;
    },
  });
}

let user = {};
user = makeObservable(user);
user.observe((key, value) => {
  console.log(`SET: ${key}: ${value}`);
});

user.name = "Vic";
