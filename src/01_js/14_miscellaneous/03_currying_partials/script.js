/* eslint-disable no-func-assign */
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// let sum = (a, b) => a + b;
// sum = curry(sum);
// console.log(sum(2)(3));

// let sum = (a, b) => a + b;

// sum = curry(sum);
// console.log(sum(2)(3));

function log(date, importance, message) {
  console.log(`[${date.toLocaleTimeString()}] [${importance} ${message}]`);
}

log = curry(log);
let logNow = log(new Date());
logNow("INFO", "message has been sent successfully to the source.");
logNow("ERROR", "source wasn't found");
logNow("WARNING", "title wasn't provided.");
