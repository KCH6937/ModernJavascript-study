const oddSum = function (n = 10) {
  let [sum, cur] = [0, 1];

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      [sum, cur] = [sum + cur, cur + 2];
      return { value: sum, done: cur - 2 > n };
    },
  };
};

const iter = oddSum(3);
for (const currentSum of iter) {
  console.log(currentSum);
}
