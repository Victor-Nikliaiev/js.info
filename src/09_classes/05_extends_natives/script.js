/* eslint-disable no-unused-vars */
// class PowerArray extends Array {
//   isEmpty() {
//     return this.length == 0;
//   }
// }

// let array = new PowerArray(1, 2, 3, 4, 10, 60);

// console.log(array.isEmpty());
// let filteredArray = array.filter(item => item >= 10);
// console.log(filteredArray.isEmpty());
// console.log(filteredArray.constructor.name);

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 2, 30, 3);
// console.log(arr.isEmpty());

let filteredArray = arr.filter(item => item > 10);
// console.log(PowerArray.isArray(arr));
// console.log(PowerArray.isArray(filteredArray));
// console.log(arr instanceof PowerArray);
// console.log(filteredArray instanceof PowerArray);
// console.log(filteredArray.isEmpty);
// console.log(filteredArray.constructor.name);
