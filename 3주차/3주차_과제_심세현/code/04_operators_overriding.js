function Operators(){
    this.add = function (value){
        this.value += value;
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
        this.value = 1 ;
     }// 쉐도잉, 재정의된 calc.init에 의해 가려지게 된다
}

function Calculator(value){
    this.value = value
}

Calculator.prototype = new Operators();

const calc = new Calculator(3);

calc.init = function(){
	this.value = 0;
} // 오버라이딩, init 메소드를 하위의 객체에서 재정의

calc.add(23);
console.log(calc.value); //26

calc.init();
console.log(calc.value); //1
console.log(Calculator.prototype.init) // ƒ (value){this.value = 1;}

delete calc.init;
calc.init();
console.log(calc.value); //0


