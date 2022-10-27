function bigEnough(value, index) {
  console.log(index); // 0, 1, 2, 3
  return value >= 10;
}

console.log([10, 1, 100, 200].filter(bigEnough));
