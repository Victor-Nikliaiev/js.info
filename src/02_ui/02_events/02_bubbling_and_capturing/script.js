/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable no-func-assign */
/* eslint-disable no-unused-vars */

let example = document.querySelector("div.example");

// alert(`
// OffsetWidth: ${example.offsetWidth}
// ClientWidth: ${example.clientWidth}

// OffsetTop: ${example.offsetTop}
// OffsetLeft: ${example.offsetLeft}

// ClientTop(Border on the top): ${example.clientTop}
// ClientLeft(Border on the left + scrollbar if in the left (with Arabic, Hebrew etc.)): ${example.clientLeft}
// ClientHeight: ${example.clientHeight}
// OffsetHeight: ${example.offsetHeight}

// ScrollHeight: ${example.scrollHeight}
// ScrollWidth: ${example.scrollWidth}
// ScrollTop(can be modified): ${example.scrollTop}
// ScrollLeft(can be modified): ${example.scrollLeft}
// `);

// Homework

// 1
// let scrollBottom =
//   example.scrollHeight - example.scrollTop - example.clientHeight;

// // 2
// let scrollBarWidth =
//   example.offsetWidth - example.clientWidth - example.clientLeft * 2;
// console.log(scrollBarWidth);

/////////////////////////////////////////////////////////////////////
// let div = document.createElement("div");

// div.style.overflowY = "scroll";
// div.style.width = "50px";
// div.style.height = "50px";

// // must put it in the document, otherwise sizes will be 0
// document.body.append(div);
// let scrollWidth = div.offsetWidth - div.clientWidth;

// div.remove();

// console.log(scrollWidth);
////////////////////////////////////////////////////////////////////

// 3
const field = document.querySelector("div#field");
const ball = document.querySelector("img#ball");
const left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2);
const top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2);
ball.style.left = left + "px";
ball.style.top = top + "px";
