/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */

import alert from "alert";
import { getLastCharInString } from "../../utils.js";

// let single = "single-quoted";
// let double = "double-quoted";
// let backticks = `backticks`;

export function sum(a, b) {
  return a + b;
}

// alert(`1 + 2 = ${sum(1, 2)}`);

// let guestList = `Guests:
//   * John
//   * Pete
//   * Mary
// `;

// alert(guestList);

// let guestList = "Guests:\n  * John\n  * Pete\n  * Mary";
// alert(guestList);

// let str1 = "Hello\nWorld";

// let str2 = `Hello
// World`;

// alert(str1 === str2);
// console.log("I'm the Walrus");

// alert(`My\n`.length);

// let str = "Hello";
// alert(str[0]);
// alert(str.at(0));

// alert(str[str.length - 1]);
// alert(str.at(-1));

// let str = "Hello";

// console.log(str[-2]);
// console.log(str.at(-2));

// let str = "Hello";

// for (let char of str) {
//   alert(char);
// }

// let str = "Hi";

// str[0] = "h";
// alert(str[0]);

// let str = "Hi";
// str = "h" + str[1];
// alert(str);

// alert("Interface".toLowerCase());
// alert("Interface".toUpperCase());

// alert("Interface"[0].toLowerCase());

// let str = "Widget with id";

// alert(str.indexOf("Widget"));
// alert(str.indexOf("with"));
// alert(str.indexOf("id", 2));

// let str = "As sly as a fox, as strong as an ox.";

// let target = "as";
// let pos = 0;

// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert(`Found on position: ${foundPos}`);
//   pos = foundPos + 1;
// }

// let str = "As sly as a fox, as strong as an ox";
// let target = "as";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   alert(pos);
// }

// let str = "Widget with Widget id";
// let ret1 = str.split(" ");

// if (str.indexOf("Widget") != -1) {
//   alert("We found it");
// }

// console.log(str2);

// alert("Widget with it comes along".includes("Widget"));
// alert("Widget with it comes along".includes("Widget", 3));

// alert("Widget".startsWith("wid"));
// alert("my favorite song is the entire".endsWith("ra"));

// let str = "stringify";
// alert(str.slice(0, 5));
// alert(str.slice(0, 4));

// let str = "stringify";
// alert(str.slice(1, 6));
// alert(str.charAt(str.length - 1));
// alert(getLastCharInString("My word is the might of my will"));
// alert(getLastCharInString(() => "s"));

// let str = "stringing a lots";
// alert(str.slice(-6));

// let str = "stringify";
// alert(str.substring(2, 6));
// alert(str.substring(6, 2));

// alert(str.slice(2, 6));
// alert(str.slice(6, 2));

// alert(str.substr(2, 4));
// let str = "sedan";
// alert(str.substr(-3, 3));

// alert("a" > "");
// alert("Österreich" > "Zealand");
// alert("Z".codePointAt(0));
// alert("z".codePointAt(0));
// alert("z".codePointAt(0).toString(16));

// alert(String.fromCodePoint(...[999, 998, 997]));
// alert(String.fromCodePoint(90));
// alert(String.fromCodePoint(0x5a));

// let str = "";

// for (let i = 65; i <= 90; i++) {
//   str += String.fromCodePoint(i);
// }

// alert(str);

// Homework

export function ucFirst(str) {
  if (!str?.length) return "";

  return str[0].toUpperCase() + str.slice(1);
}

export function checkSpam(str) {
  if (
    str.toLowerCase().includes("viagra") ||
    str.toLowerCase().includes("xxx")
  ) {
    return true;
  }
  return false;
}

export function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;

  return str.slice(0, maxLength - 1) + "...";
}

export function extractCurrencyValue(str) {
  return +str.slice(1);
}
