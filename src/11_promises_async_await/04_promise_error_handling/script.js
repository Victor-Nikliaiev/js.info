/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// fetch("https://google.com")
//   .then(resp => {
//     return resp.json();
//   })
//   .catch(err => {
//     console.table(err);
//   });

// new Promise((resolve, reject) => {
//   throw new Error("Whoops!");
// }).catch(err => console.log(`${err.name}: ${err.message}`));

// new Promise((resolve, reject) => {
//   resolve("ok");
// })
//   .then(result => {
//     bin();
//   })
//   .catch(console.log);

// new Promise((res, rej) => {
//   throw new Error("Not so fast: D");
// })

//   .catch(err =>
//     console.log(`The error: "${err.message}" has been successfully caught :D`)
//   )
//   .then(() => console.log("Next successful handler runs!"));

// new Promise((resolve, reject) => {
//   throw new Error("Whoops!");
// })
//   .catch(err => {
//     if (err instanceof URIError) {
//       console.log("Handled.");
//     }
//     console.log("Can't handle such error.");
//     throw err;
//   })
//   .then(() => {
//     console.log("Here it doesn't run.");
//   })
//   .catch(err => {
//     console.log(`Error has been successfully caught, : "${err.message}"`);
//   });

new Promise(() => {
  noSuchFunction();
}).then(() => {});
