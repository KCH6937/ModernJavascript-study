const counter = (function counter() {
  let sum = 0;
  return function (first) {
    return function (second) {
      sum += first + second;
      return sum;
    };
  };
})();

console.log(counter(5)(3));
