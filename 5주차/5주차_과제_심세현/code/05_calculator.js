class Calculator {
    constructor() {
      this.operatorsArray = [
        {id:"+", function:(a, b) => +a + +b},
        {id:"-", function:(a, b) => a - b}
      ]; // 연산 함수들이 operatorArray에 저장됨
    }
  
    calculate(sentence) {
      let [a, operator, b] = sentence.split(" "); // [1, +, 1]
      let operatorFunc = this.operatorsArray.find(element => element.id === operator )// (a, b) => +a + +b
      return operatorFunc.function(a, b);
    }
  
    addMethod(operator, sentence) {
      this.operatorsArray.push({
        id:operator, function:sentence
      });
    }//push를 통해 새로운 연산을 추가함.
  }
  
  let calc = new Calculator();
  
  alert(calc.calculate("3 + 7")); // 10
  
  let powerCalc = new Calculator();
  powerCalc.addMethod("*", (a, b) => a * b);
  powerCalc.addMethod("/", (a, b) => a / b);
  powerCalc.addMethod("**", (a, b) => a ** b);
  
  let result = powerCalc.calculate("2 ** 3");
  alert(result); // 8
  



  (function () {
    const calcLog = [];
    while (true) {
      let userInput = prompt("수식을 입력하세요 0 입력시 종료");
      if (userInput === "0") {
        console.log(calcLog);
        return alert("End");
      }
      let calcResult = powerCalc.calculate(userInput);
      alert(calcResult);
      calcLog.push([userInput, calcResult]);
    }
  })();

  // prompt 로 수식을 입력 받고 ex) 1+1
  // 그 수식의 계산 결과 값을 alert로 출력함 ex) 2
  // 그리고 다시 수식을 입력받고 계산을 결과 값을 출력하는 과정이 반복됨.
  // prompt에 0 입력시 end를 alet로 출력하고 반복이 중지됨.