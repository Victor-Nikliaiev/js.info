// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     return {
//       current: this.from,
//       last: this.to,

//       next() {
//         if (this.current <= this.last) {
//           return { done: false, value: this.current++ };
//         } else {
//           return { done: true };
//         }
//       },
//     };
//   },
// };

// for (let value of range) {
//   console.log(value);
// }

// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.asyncIterator]() {
//     return {
//       current: this.from,
//       last: this.to,

//       async next() {
//         await new Promise(resolve => setTimeout(resolve, 1000));

//         if (this.current <= this.last) {
//           return { done: false, value: this.current++ };
//         } else {
//           return { done: true };
//         }
//       },
//     };
//   },
// };

// for await (let value of range) {
//   console.log("x".repeat(10));
// }

// for (let value of [1, 2, 3, 4, 5, 6, 7, 8]) {
//   console.log(value);
// }

// function* generateSequence(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield i;
//   }
// }

// for (let value of generateSequence(1, 5)) {
//   console.log(value);
// }

// let range = {
//   from: 1,
//   to: 5,

//   *[Symbol.iterator]() {
//     for (let value = this.from; value <= this.to; value++) {
//       yield value;
//     }
//   },
// };

// for (let i of range) {
//   console.log(i);
// }

// async function* generateSequence(start, end) {
//   for (let i = start; i <= end; i++) {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     yield i;
//   }
// }

// let generator = generateSequence(1, 5);

// for await (let i of generator) {
//   console.log(i);
// }

// let range = {
//   from: 1,
//   to: 5,

//   async *[Symbol.asyncIterator]() {
//     for (let value = this.from; value <= this.to; value++) {
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       yield value;
//     }
//   },
// };

// for await (let i of range) {
//   console.log(i);
// }

async function* fetchCommits(repo) {
  let url = `https://api.github.com/repos/${repo}/commits`;

  while (url) {
    const response = await fetch(url, {
      headers: { "User-Agent": "Our script" },
    });

    const body = await response.json();

    let nextPage = response.headers.get("Link").match(/<(.*?)>; rel="next"/);
    nextPage = nextPage?.[1];

    url = nextPage;

    for (let commit of body) {
      yield commit;
    }
  }
}

let count = 0;
let result = [];

for await (const commit of fetchCommits("Victor-Nikliaiev/js.info")) {
  result.push(commit.commit.message);

  if (++count == 100) {
    break;
  }
}

console.table(result);
