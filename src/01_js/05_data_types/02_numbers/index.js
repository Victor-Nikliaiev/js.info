/* eslint-disable no-unused-vars */

import alert from "alert";
import promptSync from "prompt-sync";
import Sinon from "sinon";
const prompt = promptSync();

// let billion = 1e9;
// let billion2 = 1000000000;
// let billion3 = 1_000_000_000;
// alert(billion);

// let num = 1.743e9;
// console.log(num);
// let num = 1e3;
// let mcs = 1e-6;

// alert(mcs);

// alert(1e-3);
// alert(1.23e-6);

// alert(1e-3 === 1 / 1000);
// alert(1.23e-6 === 1.23 / 1000000);
// alert(1234e-2 === 1234 / 100);
// alert(12);

// Hexadecimals, binary, octals

// alert(0x33);
// alert(0b101);

// let a = 0b11111111;
// let b = 0o377;

// alert(a === b);

// let num = 255;

// alert(num.toString(16));
// alert(num.toString(10));
// alert(num.toString(8));
// alert(num.toString(2));
// alert(323423244545448434334334345930302238484838443434n.toString(36).length);
// alert((123456).toString(36));

// Rounding

// alert(Math.floor(3.9));
// alert(Math.ceil(4));

// alert(Math.PI.toFixed(2));
// alert(Math.floor(3));

/**
 *
 * @param {number} num
 * @returns {boolean}
 */
// export function hasFraction(num) {
//   return Math.floor(num) !== num;
// }

// let inputNumber = +prompt("What number?: ");
// alert(hasFraction(inputNumber));

// let num = 1.234545;
// let precision = 2;

export function getRoundedNumber(number, precision) {
  if (typeof number !== "number" || typeof precision !== "number") {
    throw new Error("Type of given argument isn't a number");
  }

  if (precision === 0 && typeof number === "number") return number;

  const roundParticle = `1e${precision}`;
  const roundedNumber =
    precision < 0
      ? number * roundParticle
      : Math.round(number * roundParticle) / roundParticle;

  return roundedNumber;
}

// alert(rounded);

// let num = 12.34;
// alert(num);

// let num = 12.34;
// alert(typeof +num.toFixed(5));
// let sum = 0.1 + 0.2;
// alert(sum.toFixed(2));

// let sum = 0.1 + 0.2;
// alert(+sum.toFixed(2));

// alert(9_999_999_999_999_999);

// let minusZero = +0;
// alert(minusZero);
// alert(+0 === -0);

// alert(isNaN(NaN));
// alert(isNaN("str"));

// alert(NaN === NaN);

// alert(isFinite("15"));
// alert(isFinite("str"));
// alert(isFinite(Infinity));
// alert("I love JS\n".repeat(1e2));

// let number;
// do {
//   number = +prompt("Enter a number: ");
//   alert(number);
// } while (isFinite(number));

// alert(+"str");

// alert(Number.isNaN(NaN));
// alert(Number.isNaN("str" / 2));

// alert(Number.isNaN("str"));
// alert(isNaN("str"));

// alert(Number.isFinite(123));
// alert(Number.isFinite(1e500));
// alert(Number.isFinite("123"));
// alert(isFinite("123"));

// let obj = Object.assign(
//   ...[{ test: 1, age: 1 }, { test: 2, age: 5 }, { test: 3}]
// );
// console.log(obj);
// alert(parseInt("100$"));
// alert(parseFloat("12.34$"));
// alert(parseFloat("100.33$"));
// alert(parseInt("123sdsd"));
// alert(parseInt("2n9c", 36));

// random sequence generator
let randomSequence = (Math.random() * 1e18).toString(36);

// alert(`${str}\n${[...str].reverse().join("")}`);

// alert(Math.max(...[2, 3, 5]));
// alert(Math.min(...[3, 2, 5]));
// alert(Math.pow(3, 2));
// alert(Math.asinh(3232323232332) * 1e18);

// Homework
// 1
// let input1 = +prompt("First number: ");
// let input2 = +prompt("Second number: ");
// alert("Sum: " + (input1 + input2));

// 2
// alert((1.35).toFixed(1));
// alert((6.35).toFixed(1));
// alert(Math.round(6.35 * 10) / 10);

function readNumber() {
  let number;

  do {
    number = prompt("Enter a number: ");

    if (!number.toString().trim()) return null;
  } while (!isFinite(number));

  return number;
}

// alert(readNumber());

function getRandomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

alert(getRandomInteger(1, 10));
