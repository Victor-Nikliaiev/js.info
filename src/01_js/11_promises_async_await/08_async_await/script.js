/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */

import promptSync from "prompt-sync";
const prompt = promptSync();

// async function func() {
//   return 1;
// }

// func().then(console.log);

// async function func() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("It's done!"), 3000);
//   });

//   let result = await promise;
//   console.log(result);
// }

// func();

async function getAvatarLink() {
  const jsonResponse = await fetch("https://bit.ly/vicnic_json");
  const user = await jsonResponse.json();

  const githubResponse = await fetch(
    `https://api.github.com/users/${user.name}`
  );
  const githubUser = await githubResponse.json();

  console.table([githubUser.avatar_url]);
  return githubUser;
}

// getAvatarLink().catch(err => {
//   console.log(`${err.name}: ${err.message}`);
// });

// const jsonResponse = await fetch("https://bit.ly/vicnic_json");
// const user = await jsonResponse.json();
// console.log(user);

// For old browsers
(async () => {
  //   let response = await fetch("https://bit.ly/vicnic_json");
  //   let user = await response.json();
  //   console.log(user);
})();

class Thenable {
  constructor(num) {
    this.num = num;
  }

  then(resolve, reject) {
    setTimeout(() => resolve(this.num * 2), 2000);
  }
}

const showNum = async () => {
  const result = await new Thenable(50);
  console.log(result);
};

// showNum();

// class Waiter {
//   static async wait() {
//     return await Promise.resolve("Pizza :D");
//   }
// }

// Waiter.wait().then(console.log);

// async function f() {
//   await Promise.reject(new Error("Voopie-Whoops! xD"));
// }

// f().catch(console.log);

// async function f() {
//   throw new Error("I got it :D");
// }

// f().catch(console.log);

// Homework

// 1
// const loadJson = async url => {
//   const response = await fetch(url);
//   if (response.status === 200) return response.json();
//   throw new Error(response.status);
// };

// loadJson("https://javascript.info/no-such-user.json")
//   .then(console.log)
//   .catch(console.log);
// loadJson("https://bit.ly/vicnic_json").then(console.log);

// 2

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = this.constructor.name;
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status === 200) return response.json();
  throw new HttpError(response);
}

async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt("Enter a name: ");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        console.log("No such user, please reenter...");
      } else {
        throw err;
      }
    }
  }

  console.table([`Full name: ${user.name}.`]);
  return user;
}

// demoGithubUser();

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return 10;
}

function f() {
  wait().then(console.log);
}

f();
