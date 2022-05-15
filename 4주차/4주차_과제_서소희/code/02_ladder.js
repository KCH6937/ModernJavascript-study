const ladder = (function () {
  let step = 0;
  return {
    up() {
      ++step;
      return this;
    },
    down() {
      step--;
      return this;
    },
    showStep() {
      console.log(step);
    },
  };
})();

// ladder.up().up().up().up().showStep(); // 4
// ladder.down().down().down().down().showStep(); // 0
ladder.up().up().down().showStep(); // 1
