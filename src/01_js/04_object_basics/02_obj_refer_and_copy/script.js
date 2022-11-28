/* eslint-disable no-unused-vars */
import _ from "lodash";

// let user = {
//   name: "John",
// };

export function test(obj) {
  obj.name = "TEST";
}

// let user = {
//   name: "John",
// };

// let admin = user;
// admin.name = "Pete";

// console.log(user.name);

// let a = {};
// let b = a;

// console.log(a == b);
// console.log(a === b);

// let a = {};
// let b = {};

// console.log(a == b);

// const user = {
//   name: "John",
// };

// user.name = "Victor";

// console.log(user.name);

// user = { name: "Bebe" };

// let user = {
//   name: "Victor",
//   age: 30,
// };

// let clone = {};

// for (let prop in user) {
//   clone[prop] = user[prop];
// }

// console.log(clone);

// let user = { name: "John" };
// let permission1 = { canView: true };
// let permission2 = { canEdit: true };

// Object.assign(user, permission1, permission2);

// console.log(user.name);
// console.log(user.canView);
// console.log(user.canEdit);

// let user = { name: "Victor" };

// Object.assign(user, { name: "Arhis", age: 33 });

// console.log(user);

// let user = {
//   name: "Arhis",
//   age: 30,
// };

// let clone = Object.assign({}, user);

// console.log(clone);
// console.log(clone.name);
// console.log(clone.age);
// console.log(clone === user);

// const clone = { ...user };

// console.log(clone);

// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50,
//   },
// };

// console.log(user.sizes.height);

// let human_being1 = {
//   name: "Victor",
//   age: 33,
//   sizes: {
//     height: 205,
//     weight: 93,
//   },
// };

// let clone = Object.assign({}, human_being1);

// console.log(clone.sizes === human_being1.sizes);

// human_being1.sizes.height = 206;

// console.log(clone.sizes.height);

const user = {
  name: "Victor",
  age: 33,
  sizes: {
    height: 205,
    weight: {
      beforeEating: 93,
      afterEating: 94,
    },
  },
};

let clone = structuredClone(user);
console.log(clone.sizes.weight == user.sizes.weight);
let clone2 = _.cloneDeep(user);

console.log(clone2);
