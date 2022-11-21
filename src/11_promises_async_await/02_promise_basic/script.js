/* eslint-disable no-unused-vars */
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("done"));
// });

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error("Whoops!")), 2000);
// });

// let promise = new Promise(function (resolve, reject) {
//   resolve("123");
// });

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("Done! :D"), 1500);
// });

// promise.then(
//   result => console.log(result),
//   error => console.log(error)
// );

// let promise = new Promise(resolve => {
//   setTimeout(() => resolve("Done, thanks :D"), 1300);
// });

// promise.then(console.log);
// let result;

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     result = "error";
//     reject(new Error("Whoops!"));
//   }, 1500);
// });

// promise
//   .finally(() => {
//     console.log(result);
//   })
//   .catch(console.log);

// new Promise((resolve, reject) => {
//   resolve("value :D");
// })
//   .finally(() => console.log("Promise is ready."))
//   .then(result => console.log(result));

// new Promise(resolve => sss)
//   .finally(() => console.log("finished"))
//   .catch(err => console.log(err.name + ": " + err.message));

// function loadScript(src) {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Script load error for ${src}`));

//     document.head.append(script);
//   });
// }

// let lodashPromise = loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
// );

// lodashPromise.then(
//   script => console.log(`${script.src} is loaded.`),
//   error => console.log(`Error: ${error.message}`)
// );

// Homework
// 1
// let promise = new Promise((resolve, reject) => {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// promise.then(console.log);

// 2

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// delay(3000).then(() => console.log("runs after 3 seconds"));

// 3
function go() {
  showCircle(150, 150, 100, div => {
    div.classList.add("message-ball");
    div.append("Hello, world!");
  });
}

function showCircle(cx, cy, radius) {
  let div = document.createElement("div");
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + "px";
  div.style.top = cy + "px";
  div.className = "circle";
  document.body.append(div);

  return new Promise(resolve => {
    setTimeout(() => {
      div.style.width = radius * 2 + "px";
      div.style.height = radius * 2 + "px";

      div.addEventListener("transitionend", function handler() {
        div.removeEventListener("transitionend", handler);
        resolve(div);
      });
    }, 0);
  });
}

// showCircle(150, 150, 100).then(div => {
//   div.classList.add("message-ball");
//   div.append("Hello, world!");
// });
