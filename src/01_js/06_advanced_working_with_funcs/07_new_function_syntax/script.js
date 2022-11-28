/* eslint-disable no-unused-vars */
import alert from "alert";

// let sum = new Function("a", "b", "return a + b");
// console.log(sum(2, 3));

let sayHi = new Function("console.log('Hello')");
sayHi();

// function getFunc() {
//   let value = "test";

//   let func = new Function("console.log(value)");
//   return func;
// }

// getFunc()();

function getValue() {
  let value = "test";

  let func = function () {
    alert("test");
  };

  return func;
}

getValue()();
