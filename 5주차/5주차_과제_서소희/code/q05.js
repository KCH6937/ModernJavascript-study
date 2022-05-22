function Calculator() {
  this.methods = {
    "+": (a, b) => a + b, // 화살표 함수
    "-": function (a, b) {
      return a - b;
    },
    "//"(a, b) {
      // ES6 축약 표현
      return Math.floor(a / b);
    },
  };
}
Calculator.prototype.calculate = function (str) {
  const [x, operator, y] = str.split(" ");
  return this.methods[operator](+x, +y);
};
Calculator.prototype.addMethod = function (name, func) {
  this.methods[name] = func;
};

// defined methods
// calculate()
let calc = new Calculator();

console.log(calc.calculate("3 + 7")); // 10
console.log(calc.calculate("10 - 7")); // 3
console.log(calc.calculate("1000 // 10")); // 100

// test
// addMethod()
let powerCalc = new Calculator();

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate("2 * 3")); // 6
console.log(powerCalc.calculate("9 / 3")); // 3
console.log(powerCalc.calculate("2 ** 3")); // 8
