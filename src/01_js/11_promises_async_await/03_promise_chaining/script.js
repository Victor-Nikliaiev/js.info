/* eslint-disable no-unused-vars */

// function calculateResult(result) {
//   console.log(result);
//   return result * 2;
// }

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(calculateResult)
//   .then(calculateResult)
//   .then(calculateResult);

// function getResult(result) {
//   console.log(result);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(result * 2), 1000);
//   });
// }

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(getResult)
//   .then(getResult)
//   .then(getResult);

// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }

//   then(resolve, reject) {
//     console.log(resolve);
//     setTimeout(() => resolve(this.num * 2), 1000);
//   }
// }

// new Promise(resolve => resolve(1))
//   .then(result => {
//     return new Thenable(result);
//   })
//   .then(console.log);

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(response => response.json())
//   .then(result => console.log(result.title));

// https://raw.githubusercontent.com/Victor-Nikliaiev/js.info/main/src/11_promises_async_await/03_promise_chaining/userExample.json

// fetch("https://bit.ly/vicnic_json")
//   .then(res => res.json())
//   .then(user => fetch(`https://api.github.com/users/${user.name}`))
//   .then(res => res.json())
//   .then(githubUser => {
//     // let img = document.createElement("img");
//     // img.src = githubUser.avatar_url;
//     // document.body.append(img);
//     setTimeout(() => console.table([githubUser.avatar_url]), 3000);
//   });

fetch("https://bit.ly/vicnic_json")
  .then(res => res.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(res => res.json())
  .then(githubUser =>
    new Promise(resolve => {
      console.table([githubUser.avatar_url]);
      setTimeout(() => {
        console.log("URL removed!");
        resolve(githubUser);
      }, 3000);
    }).then(
      githubUser =>
        new Promise(resolve => {
          setTimeout(() => {
            console.table(githubUser);
            resolve(githubUser);
          }, 3000);
        })
    )
  );
