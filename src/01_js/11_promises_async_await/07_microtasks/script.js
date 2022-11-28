/* eslint-disable no-unused-vars */
// let promise = Promise.resolve();

// promise.then(() => console.log("promise done!"));
// console.log("code finished.");

// Promise.resolve()
//   .then(() => console.log("promise done!"))
//   .then(() => console.log("code finished!"));

let promise = Promise.reject(new Error("Promise Failed!"));
// promise.catch(err => console.log("caught"));
// setTimeout(() => promise.catch(err => console.log("caught")), 1000);

process.on("unhandledRejection", (reason, promise) => {
  console.log(reason);
  // console.log(promise);
});

// let promise = Promise.reject(new Error("Promise Failed!"));
// window.addEventListener("unhandledrejection", event =>
//   console.log(event.reason.name + ": " + event.reason.message)
// );
// setTimeout(() => promise.catch(err => console.log("caught")), 0);
