/* eslint-disable no-func-assign */
/* eslint-disable no-unused-vars */

// console.log(document.documentElement);
// document.head;

// console.log(document.body.childNodes[0] === document.body.firstChild);
// console.log(
//   document.body.childNodes[document.body.childNodes.length - 1] ===
//     document.body.lastChild
// );
// console.log(document.body.firstChild.hasChildNodes());

// for (let node of document.body.childNodes) {
//   console.log(node);
// }

// let nodes = Array.from(document.body.childNodes);
// console.log(nodes);

// console.log(document.body.parentNode === document.documentElement);
// console.log(document.head.nextSibling);
// console.log(document.body.previousSibling);

// console.log(
//   Array.from(document.body.children).filter(node => node.id == "first")
// );

// let elem = document.body.lastChild;
// while ((elem = elem.parentElement)) {
//   console.log(elem);
// }

// table.rows[0].cells[1].style.background = "green";

// Homework
// 1
document.body.firstElementChild; // div
document.body.lastElementChild; // ul
document.body.lastElementChild.lastElementChild; // li => with "Pete"

// 3
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = "red";
}
