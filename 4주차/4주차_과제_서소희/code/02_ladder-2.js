const Ladder = (function () {
  let step = 0;
  function Ladder() {}
  Ladder.prototype.up = function () {
    ++step;
    return this;
  };
  Ladder.prototype.down = function () {
    step--;
    return this;
  };
  Ladder.prototype.showStep = function () {
    console.log(step);
  };
  return Ladder;
})();

const ladder = new Ladder();
ladder.up().up().up().up().showStep(); // 4
ladder.down().down().down().down().showStep(); // 0
ladder.up().up().down().showStep(); // 1
