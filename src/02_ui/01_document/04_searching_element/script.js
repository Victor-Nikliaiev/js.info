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

let tbl = document.getElementById("age-table");

let labels = tbl.querySelectorAll("label");

let ageTd = tbl.rows[0].cells[0];

let frmSearch = document.getElementsByName("search")[0];

let searchPerson = document.getElementsByName("search-person")[0];

let inputs = searchPerson.querySelectorAll("input");
let firstInput = inputs[0];
let lastInput = inputs[inputs.length - 1];
