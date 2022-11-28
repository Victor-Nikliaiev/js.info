/* eslint-disable no-unused-vars */
// let user = {
//   name: "John",
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, "name");
// console.table(descriptor);

// function lockProperty(object, propertyName) {
//   Object.defineProperty(object, propertyName, {
//     writable: false,
//     enumerable: true,
//     configurable: true,
//   });
// }

// function unlockProperty(object, propertyName) {
//   Object.defineProperty(object, propertyName, {
//     writable: true,
//     enumerable: true,
//     configurable: true,
//   });
// }

// lockProperty(user, "name");
// unlockProperty(user, "name");
// console.table(Object.getOwnPropertyDescriptor(user, "name"));

class ObjectPropertiesManager {
  static lockProperty(object, propertyName) {
    Object.defineProperty(object, propertyName, {
      writable: false,
      enumerable: true,
      configurable: true,
    });
  }

  static unlockProperty(object, propertyName) {
    Object.defineProperty(object, propertyName, {
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }

  static getPropertyDescriptor(object, propertyName) {
    return Object.getOwnPropertyDescriptor(object, propertyName);
  }

  static defineProperty(
    object,
    propertyName,
    propertyValue = object[propertyName]
  ) {
    Object.defineProperty(object, propertyName, {
      value: propertyValue,
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }
}

// let user = {
//   name: "Vic",
//   toString() {
//     return this.name;
//   },
// };

// for (let key in user) {
//   console.log(key);
// }

// Object.defineProperty(user, "toString", {
//   enumerable: false,
// });

// for (let key in user) {
//   console.log(key);
// }

// let mathDescriptor = Object.getOwnPropertyDescriptor(globalThis.Math, "PI");

// console.log(mathDescriptor);

// let user = {
//   name: "John",
// };

// Object.defineProperty(user, "name", { configurable: false });

// user.name = "Vic";
// console.log(user.name);

// const user = {
//   name: "Vic",
// };

// Object.defineProperty(user, "name", { writable: false, configurable: false });

let user = {};

Object.defineProperties(user, {
  name: { value: "Vic", configurable: false, writable: true, enumerable: true },
  age: { value: 33, configurable: false, writable: true, enumerable: true },
  isAdmin: {
    value: false,
    configurable: false,
    writable: false,
    enumerable: true,
  },
});

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

console.table(Object.getOwnPropertyDescriptors(clone));
Object.freeze(clone);
console.table(Object.getOwnPropertyDescriptors(clone));
