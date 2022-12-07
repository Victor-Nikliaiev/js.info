/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable no-func-assign */
/* eslint-disable no-unused-vars */

// new Promise(resolve => {
//   let span = document.createElement("span");
//   span.innerHTML = "Reddy :D";
//   document.body.append(span);
//   resolve(span);
// });
// .then(span => {
//   let timerId = setInterval(() => {
//     span.classList.toggle("getRed");
//     console.log(span.classList.contains("getRed"));
//   }, 75);
//   return { timerId, span };
// })
// .then(({ timerId, span }) => {
//   return new Promise(resolve =>
//     setTimeout(() => {
//       clearInterval(timerId);
//       resolve(span);
//     }, 4134)
//   );
// })
// .then(span => {
//   console.log(
//     `We got here :D\nStatus of "getRed" class is:  ${span.classList.contains(
//       "getRed"
//     )}`
//   );
//   span.style.backgroundColor = prompt("Which color to set in the end?", "");
//   setTimeout(() => (span.style.display = "none"), 2000);
//   return span;
// })
// .then(span => setTimeout(() => (span.style.display = ""), 4000))
// .then(() => {
//   document.body.style.background = "red";
//   setTimeout(() => document.body.style.removeProperty("background"), 2000);
// });

// let cssTextPromise = new Promise(resolve => {
//   let cssText = document.querySelector("div#cssText");
//   resolve(cssText);
// });

// cssTextPromise.then(cssText => {
//   cssText.style.cssText = `
//     background-color: yellow;
//     width: 100px;
//     text-align: center;
//     color: black;
//   `;
//   return cssText;
// });

// cssTextPromise.then(cssText => {
//   setTimeout(() => {
//     cssText.setAttribute(
//       "style",
//       `
//       color: pink;
//       width: 300px;
//       text-size: 35px;
//       background-color: green;
//     `
//     );
//   }, 6000);
// });

// let someTextPromise = new Promise(resolve =>
//   resolve(document.querySelector("div#title"))
// );

// someTextPromise.then(title => {
//   let computedStyles = getComputedStyle(title);

//   console.log(computedStyles.width);
//   console.log(computedStyles.color);
// });

// Homework
function showNotification({ top = 0, right = 0, html, className }) {
  let div = document.createElement("div");
  div.innerHTML = html;
  div.className = "notification";

  if (className) {
    div.classList.add(className);
  }

  div.style.top = top + "px";
  div.style.right = right + "px";

  document.body.append(div);

  setTimeout(() => div.remove(), 1500);
}

let i = 1;

setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: "Hello " + i++,
    className: "welcome",
  });
}, 2000);
