function Calculator(init) {
  this.value = init;
}

Calculator.prototype.add = function (num) {
  this.value += num;
};
Calculator.prototype.minus = function (num) {
  this.value -= num;
};
Calculator.prototype.multiply = function (num) {
  this.value *= num;
};
Calculator.prototype.divide = function (num) {
  this.value /= num;
};
Calculator.prototype.init = function () {
  this.value = 0;
};

const calc = new Calculator(3);

calc.add(5);
console.log(calc.value); // 8

calc.minus(1);
console.log(calc.value); // 7

calc.multiply(3);
console.log(calc.value); // 21

calc.divide(7);
console.log(calc.value); // 3

calc.init();
console.log(calc.value); // 0
