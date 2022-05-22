class Calculator {
    constructor() {
      this.operatersArray = ["+", "-"]; 
      this.formulaArray = [
        ["+", (a, b) => +a + +b],
        ["-", (a, b) => a - b],
      ]; // 연산 함수들이 formulaArray에 저장됨
    }
  
    calculate(sentence) {
      let [a, operator, b] = sentence.split(" "); // [1, +, 1]
      let index = this.operatersArray.indexOf(operator); // 0
      let formulaFunction = this.formulaArray[index][1]; // (a, b) => +a + +b
      return formulaFunction(a, b);
    }
  
    addMethod(operator, sentence) {
      this.operatersArray.push(operator);
      this.formulaArray.push([operator, sentence]);
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
  
  // (function () {
  //   const calcLog = [];
  //   while (true) {
  //     let userInput = prompt("수식을 입력하세요 0 입력시 종료");
  //     if (userInput === "0") {
  //       console.log(calcLog);
  //       return alert("End");
  //     }
  //     let calcResult = powerCalc.calculate(userInput);
  //     alert(calcResult);
  //     calcLog.push([userInput, calcResult]);
  //   }
  // })();