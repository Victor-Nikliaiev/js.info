/* eslint-disable no-unused-vars */

function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;

  let pow = x;

  while (--n) pow *= x;

  return pow;
}
