function Accumulator(StartingValue) {
  if (!new.target) return new Accumulator(StartingValue);
  this.value = StartingValue;
  this.read = function () {
    const input = window.prompt("write a number");
    this.value += +input;
  };
}

const hello = Accumulator(1);
hello.read();
