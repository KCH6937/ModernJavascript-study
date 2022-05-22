# 5주차_과제_심세현

# 범위

- 25장 클래스 ~ 27장 제어문
(p417 ~ p551)

# 과제

1. **생성자 함수를 클래스로 바꾸기**

```jsx
const Car = (function () {

	function Car(name, color) {
		this.name = name; //public
		this.color = color;
	}

	Car.brands = ['HYUNDAI', 'KIA', 'CHEVROLET'];

	Car.prototype.move = function() {
		console.log(`Car ${this.name} is move now`);
	}

	return Car;

}());
```

- **답**

```jsx
class Car {
    constructor(name, color) {
        this.color = color;
        this.name = name;
    } // 생성자

    static brands = ['HYUNDAI', 'KIA', 'CHEVROLET']; // 정적 프로퍼티 변수

    move(){
        console.log(`Car ${this.name} is move now`);
    }// 메서드 
}

Car.brands.push('TESLA'); // ['HYUNDAI', 'KIA', 'CHEVROLET', 'TESLA']

const car2 = new Car('teslaModelS', 'red');

car2.move(); //Car teslaModelS is move now
car2.color
```

1. **인스턴스 생성 오류**
아래 코드에서 `Rabbit`은 `Animal`을 상속받습니다.
그런데 `Rabbit` 객체를 만들 수가 없습니다. 무엇이 잘못된 것일까요? 코드를 수정해보세요.

```jsx
class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
//super 가 빠져 있음
 // this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
alert(rabbit.name);
```

- **답**

```jsx
// constructor 생성자에 super()를 쓰지 않았기 때문, 무조건 써야 된다.
// 자식 생성자 안에서 super 를 반드시 호출해야 한다. this가 사용되는 부분 보다 앞에 위치해야함.
// super를 사용하지 않아도 super에서 생성자를 받아서 사용되기 때문
 
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name); 
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
alert(rabbit.name);
```

1. **border-left-width를 borderLeftWidth로 변경하기**
"my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해보세요.
대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.

```jsx
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
```

- **답**

```jsx
function camelize(text) {
    let flag = true;
  
    let array = text.split('');
    while(array.indexOf('-') >-1){
            let index = array.indexOf('-');
            let upperCase = array[index+1].toUpperCase();
            array.splice(index+1, 1, upperCase); // 대문자로 교체
            array.splice(index, 1); // - 문자 제거
    }
    return array.join('');
}

camelize("background-color") == 'backgroundColor'; //true
camelize("list-style-image") == 'listStyleImage'; //true
camelize("-webkit-transition") == 'WebkitTransition'; //true
```

1. **특정 범위에 속하는 요소 찾기**
    
    배열 `arr`의 요소 중 `a`이상 `b` 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 해당 요소를 출력해주는 함수 `filterRange(arr, a, b)`를 작성해봅시다.
    
    새로 작성하는 함수는 기존 배열 `arr`을 변경하면 안 되고, 반환되는 함수는 새로운 배열이어야 합니다.
    

```jsx
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (조건에 맞는 요소)

alert( arr ); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)
```

- **답**

```jsx
function filterRange(array, start, end){
    const tmpArray = [];
    for(let i = 0; i< array.length;i++){
        if( (array[i]>=start) && (array[i]<=end) ){
            tmpArray.push(array[i]);
        }
    }
    return tmpArray;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (조건에 맞는 요소)

alert( arr ); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)
```

1. **확장 가능한 계산기**
    
    기능을 "확장"할 수 있는 계산기 객체를 만들어 주는 생성자 함수 `Calculator`를 작성해봅시다.
    
    `Calculator`는 두 단계를 거쳐 만들 수 있습니다.
    
    첫 번째 단계는 `"1 + 2"` 와 같은 문자열을 받아서 “숫자 연산자 숫자” 형태(공백으로 구분)로 바꿔주는 
    메서드 `calculate(str)` 를 구현하는 것입니다. 이 함수는 `+`와 `-`를 처리할 수 있어야 하고, 연산 결과를 반환해야 합니다.
    
    ```jsx
    // 예시
    let calc = new Calculator;
    
    alert( calc.calculate("3 + 7") ); // 10
    ```
    
    두 번째 단계는 계산기가 새로운 연산을 학습할 수 있도록 해주는 메서드 `addMethod(name, func)`를 추가해 주는 것입니다. 연산자 이름을 나타내는 `name`과 인수가 두개인 익명 함수 `func(a,b)`를 받는 새 메서드를 구현해야 하죠.
    
    구현된 메서드를 이용해 곱셈 `*`과 나눗셈 `/`, 거듭제곱 `**`연산자를 추가해주는 예시는 아래와 같습니다.
    
    ```jsx
    // 예시
    let powerCalc = new Calculator;
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);
    
    let result = powerCalc.calculate("2 ** 3");
    alert( result ); // 8
    ```
    
    - **답**
    
    ```jsx
    class Calculator {
      constructor() {
        this.operatersArray = ["+", "-"];
        this.formulaArray = [
          ["+", (a, b) => +a + +b],
          ["-", (a, b) => a - b],
        ];
      }
    
      calculate(sentence) {
        let [a, operator, b] = sentence.split(" "); // [1, +, 1]
        let index = this.operatersArray.indexOf(operator); // 0
        let formulaFunction = this.formulaArray[index][1]; // (a, b) => +a + +b
        return formulaFunction(a, b);
      }// 
    
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
    ```
    

**하시면서 중간에 이해가 되지 않는 부분을 페이지와 함께 댓글로 남겨주시면, 스터디원 분들께서 답변을 
남겨주셨으면 좋겠습니다!**