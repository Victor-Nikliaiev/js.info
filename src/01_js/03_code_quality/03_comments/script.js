/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x  The number to raise
 * @param {number} n The power, must be a natural number
 * @returns  {number} x raised to the n-th power
 */
function pow(x, n) {
    let pow = x;

    while (--n) pow *= x;

    return pow;
}

console.log(pow(3, 2));
console.log(pow(3, 3));

// To install JSDoc globally: npm install -g jsdoc
// To make docs run jsdoc $filename e. g. : jsdoc script.js
