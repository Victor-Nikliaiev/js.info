/* eslint-disable no-unused-vars */

import alert from "alert";
import promptSync from "prompt-sync";
const prompt = promptSync();

// let arr = ["John", "Smith"];

// let [firstName, surname] = arr;

// alert(firstName + surname);

// let [firstName, surname] = "John Smith".split(" ");
// alert(firstName + surname);

// let [firstName, , title] = [
//   "Julius",
//   "Caesar",
//   "Consul",
//   "of the Roman Republic",
// ];

// alert(firstName + title);

// let [a, b, c] = "abc";
// alert(a + b + c);

// let [one, two, three] = new Set([1, 2, 3]);
// // alert(one + two + three);

// const [...ss] = new Set([1, 2, 3]);

// alert(ss);

// let user = {};

// [user["name"], user["surname"]] = "John Smith".split(" ");
// console.log(user);

// let user = {
//   name: "John",
//   age: 30,
// };

// for (let [key, value] of Object.entries(user)) {
//   alert(`${key}: ${value}`);
// }

// let user = new Map();

// user.set("name", "Victor");
// user.set("age", 30);

// for (let [index, value] of user) {
//   alert(`${index}: ${value}`);
// }

// let guest = "Victor";
// let admin = "Jane";

// [guest, admin] = [admin, guest];

// alert(`Admin: ${admin}\nGuest: ${guest}`);

// let [name1, name2, ...rest] = [
//   "Julies",
//   "Caesar",
//   "Consult",
//   "of the Roman Republic",
// ];

// alert(name1 + " " + name2);

// console.log(rest);
// console.log(rest.length);

// let [firstName, surName] = [];

// console.log(firstName + surName);

// let [name = "Guest", surName = "Anonymous"] = ["Julius"];

// alert(name + surName);

// let [name = prompt("Name?: "), surName = prompt("Surname?: ")] = ["Julius"];

// alert(name + " " + surName);

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// let { title, width, height } = options;
// console.log(title + width + height);

// let { title, height, width } = { height: 100, width: 330, title: "Hey" };

// console.log(title + height + width);

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// let { width: w, height: h, title } = options;

// console.log(w + h + title);

// let options = {
//   title: "Menu",
// };

// let { width: w = 100, height: h = 200, title } = options;

// console.log(w + title + h);

// let options = {
//   menu: "Title",
// };

// let { width = prompt("Width: "), menu = prompt("Menu: ") } = options;

// alert(`Width: ${width}, menu: ${menu}`);

// let options = {
//   title: "Menu",
// };

// let { width: w = 200, height: h = 100, title } = options;
// console.log(w + title + h);

// const options = {
//   title: "Menu",
//   width: 200,
//   height: 100,
// };

// let { title } = options;
// console.log(title);

// let options = {
//   title: "Menu",
//   height: 100,
//   width: 200,
// };

// let { title, ...rest } = options;

// console.log(rest.height);
// console.log(rest.width);

// let title, width, height;

// ({ title, width, height } = { title: "Menu", width: 100, height: 200 });

// alert(`Width: ${width}\nHeight: ${height}\nTitle: ${title}`);

// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ["Cake", "Donut"],
//   extra: true,
// };

// let {
//   size: { width, height },
//   items: [it1, it2],
//   extra,
//   title = "menu",
// } = options;

// alert(title);
// alert(width);
// alert(height);
// alert(it1);
// alert(it2);
// alert(extra);

// function showMenu(title = "Undefined", width = 200, height = 100, items = []) {

// }

// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"],
// };

// function showMenu({
//   title = "Undefined",
//   width = 200,
//   height = 100,
//   items = [],
// }) {
//   alert(`${title} ${width} ${height}`);
//   alert(items);
// }

// showMenu(options);

let options = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

// function showMenu({
//   title = "Undefined",
//   width: w = 100,
//   height: h = 200,
//   items: [Item1, item2],
// } = {}) {
//   alert(`${title} ${w} ${h}`);
//   alert(`${Item1} ${item2}`);
// }

// showMenu();

// function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
//   alert(`${title} ${width} ${height}`);
// }

// showMenu();

// Homework

// 1
// let user = {
//   name: "John",
//   years: 30,
// };

// let { name, years: age, isAdmin = false } = user;
// console.log(name);
// console.log(age);
// console.log(isAdmin);

// 2
export function topSalary(salaries) {
  let maxSalaryName = null;
  let maxSalary = 0;

  Object.entries(salaries).forEach(([name, salary]) => {
    if (salary > maxSalary) {
      maxSalaryName = name;
      maxSalary = salary;
    }
  });

  return maxSalaryName;
}

export function topSalary2(salaries) {
  if (!Object.keys(salaries).length) return null;

  let sortedSalaries = Object.entries(salaries).sort(
    (worker1, worker2) => worker2[1] - worker1[1]
  );

  return sortedSalaries[0][0];
}
