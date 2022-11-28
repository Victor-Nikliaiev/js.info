// Promise.all([
//   new Promise(resolve => setTimeout(() => resolve(1), 1000)),
//   new Promise(resolve => setTimeout(() => resolve(2), 2000)),
//   new Promise(resolve => setTimeout(() => resolve(3), 3000)),
// ]).then(console.log);

// const urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://api.github.com/users/jeresig",
// ];

// let requests = urls.map(url => fetch(url));
// Promise.all(requests).then(responses => {
//   responses.forEach(response =>
//     console.log(`${response.url}: ${response.status}`)
//   );
// });

// const names = ["iliakan", "Victor-Nikliaiev"];

// const requests = names.map(name =>
//   fetch(`https://api.github.com/users/${name}`)
// );

// Promise.all(requests)
//   .then(responses => {
//     const results = responses.map(response => {
//       return new Promise(resolve => resolve(response.json()));
//     });

//     return results;
//   })
//   .then(handleResponses);

// function handleResponses(responses) {
//   responses.forEach(response => {
//     response.then(res => console.log(res.avatar_url));
//   });
// }

// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 2000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).catch(console.log);

// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
//   2,
//   3,
// ]).then(result => console.log(result));

// const urls = [
//   "https://api.github.com/users/iliakan",
//   "https://no-such.blablarl",
//   "https://api.github.com/users/remy/Victor-Nikliaiev",
// ];
// const requests = urls.map(url => fetch(url));

// Promise.allSettled(requests)
//   .then(responses => {
//     const fulfilledResponses = responses.filter(
//       response => response.status === "fulfilled"
//     );
//     return fulfilledResponses.map(
//       response => new Promise(resolve => resolve(response.value.json()))
//     );
//   })
//   .then(responses => responses[0].then(res => console.log(res.avatar_url)));

// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 4000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
// ]).then(console.log);

// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => reject(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(2), 3000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
// ]).then(console.log);

// Promise.any([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("First error")), 1000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Second Error")), 2000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Third Error")), 3000)
//   ),
// ]).catch(err => {
//   console.log(err.constructor.name);
//   console.log(err.errors);
//   console.log(err.errors[0] instanceof Error);
// });

// let cache = new Map();

// function loadCached(url) {
//   if (cache.has("url")) {
//     return Promise.resolve(cache.get(url));
//   }

//   return fetch(url)
//     .then(response => response.text())
//     .then(text => {
//       cache.set(url, text);
//       return text;
//     });
// }

// Polyfill for Promise.AllSettled
if (!Promise.allSettled) {
  const rejectHandler = reason => ({ status: "rejected", reason });
  const resolveHandler = value => ({ status: "fulfilled", value });

  Promise.allSettled = function (promises) {
    const convertedPromises = promises.map(promise =>
      Promise.resolve(promise).then(resolveHandler, rejectHandler)
    );

    return Promise.all(convertedPromises);
  };
}
