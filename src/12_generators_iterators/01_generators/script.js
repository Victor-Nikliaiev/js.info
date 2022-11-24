// function* generateSequence() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// let generator = generateSequence();

// function* generateSequence() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let generator = generateSequence();

// let arr = [...generator];
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// let range = {
//   from: 1,
//   to: 5,

//   *[Symbol.iterator]() {
//     for (let value = this.from; value <= this.to; value++) {
//       yield value;
//     }
//   },
// };

// console.log([...range]);

// function* generateSequence(start, end) {
//   for (let i = start; i <= end; i++) yield i;
// }

// let arr = [...generateSequence(0, 20)];
// console.log(arr);

// function* generateSequence(start, end) {
//   for (let i = start; i <= end; i++) yield i;
// }

// function* generatePasswordCodes() {
//   yield* generateSequence(48, 57);
//   yield* generateSequence(65, 90);
//   yield* generateSequence(97, 122);
// }

// let str = [...generatePasswordCodes()].map(c => String.fromCharCode(c));
// str.sort(() => Math.random() - Math.random());
// str = str.join("");
// console.table(str);

// function* gen() {
//   let result = yield "2 + 2 = ?";
//   console.log(result);
// }

// let generator = gen();
// let question = generator.next().value;
// console.log(question);
// generator.next(4);
// setTimeout(() => generator.next(222), 2000);

// function* gen() {
//   let ask1 = yield "2 + 2 = ?";
//   console.log(ask1);

//   let ask2 = yield "3 * 3 = ?";
//   console.log(ask2);
// }

// let generator = gen();

// console.log(generator.next().value);
// console.log(generator.next(4).value);
// console.log(generator.next(9).done);

// function* gen() {
//   try {
//     let result = yield "2 + 2 = ?";
//     console.log(result);
//   } catch (err) {
//     console.log(`${err.name}: ${err.message}`);
//   }
// }

// let generator = gen();
// generator.next().value;
// // generator.next(4);
// generator.throw(new Error("The answer is not found in my database."));

// function* generate() {
//   let res = yield "2 + 2  = ?";
// }

// let generator = generate();
// let question = generator.next().value;
// console.log(question);

// try {
//   generator.throw(new Error("The answer is not found in my database."));
// } catch (e) {
//   console.log(e.name + ": " + e.message);
// }

// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const g = gen();

// console.log(g.next().value);
// console.log(g.return(g.next().value).value);

export function* pseudoRandom(seed) {
  let next;
  let previous = seed;

  while (true) {
    next = (previous * 16807) % 2147483647;
    previous = next;
    yield next;
  }
}

// let generator = pseudoRandom(1);

// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
