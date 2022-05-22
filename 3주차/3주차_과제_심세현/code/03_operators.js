function Operators(){
    this.add = function (value){
        this.value += +value;
    }
     this.minus = function (value){
        this.value -= value;
    }
     this.multiply = function (value){
        this.value *= value;
    }
     this.divide = function (value){
        this.value /= value;
    }
     this.init = function (value){
        this.value = 0 ;
     }
}

function Calculator(value){
    this.value = value
}

Calculator.prototype = new Operators();

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