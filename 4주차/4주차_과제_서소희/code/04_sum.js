const counter = (function counter() {
  let sum = 0;
  return function (first) {
    sum += first;
    return sum;
  };
})();

console.log(counter(5));
