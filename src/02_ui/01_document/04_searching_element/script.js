/* eslint-disable no-func-assign */
/* eslint-disable no-unused-vars */

// const first = document.getElementById("first");

// first.style.backgroundColor = "red";
// let lastLiArray = document.querySelectorAll("ul > li:last-child");
// Array.from(lastLiArray).forEach(node => {
//   console.log(node.textContent);
// });

// Array.from(document.querySelector(":hover")).forEach(node => {
//   console.log(node.innerHTML);
// });

// let lastLi = document.querySelector("ul > li:last-child");
// console.log(lastLi.innerHTML);

// for (let elem of document.body.children) {
//   if (elem.matches("a[href$='zip']")) {
//     console.log("the archive reference: " + elem.href);
//   }
// }

// let chapter = document.querySelector("ul > li.chapter");
// console.log(chapter.closest(".book"));
// console.log(chapter.closest(".contents"));
// console.log(chapter.closest("h1"));

// let inp = document.querySelector("input");
// inp.value = "Made with JavaScript";
// let lili = document.getElementsByTagName("li");
// console.log(lili);

// Homework
// 1

// 1. The table with `id="age-table"`.
let table = document.getElementById("age-table");

// 2. All label elements inside that table
table.getElementsByTagName("label");
// or
document.querySelectorAll("#age-table label");

// 3. The first td in that table (with the word "Age")
table.rows[0].cells[0];
// or
table.getElementsByTagName("td")[0];
// or
table.querySelector("td");

// 4. The form with the name "search"
// assuming there's only one element with name="search" in the document
let form = document.getElementsByName("search")[0];
// or, form specifically
document.querySelector('form[name="search"]');

// 5. The first input in that form.
form.getElementsByTagName("input")[0];
// or
form.querySelector("input");

// 6. The last input in that form
let inputs = form.querySelectorAll("input"); // find all inputs
inputs[inputs.length - 1]; // take the last one
