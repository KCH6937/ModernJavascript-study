# [과제] deep dive 스터디 5주차 과제 (5/16 ~ 5/22)

# 범위

- 25장 클래스 ~ 27장 배열
  (p417 ~ p551)

# 과제

## 문제 01

1. **생성자 함수를 클래스로 바꾸기**

```jsx
const Car = (function () {
  function Car(name, color) {
    this.name = name;
    this.color = color;
  }

  Car.brands = ["HYUNDAI", "KIA", "CHEVROLET"];

  Car.prototype.move = function () {
    console.log(`Car ${this.name} is move now`);
  };

  return Car;
})();
```

### 풀이

```jsx
class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  static brands = ["HYUNDAI", "KIA", "CHEVROLET"]; // 인스턴스 접근 불가
  move() {
    console.log(`Car ${this.name} is moving`);
  }
}

const car = new Car("붕붕", "white");
console.log("Car.brands", Car.brands);
console.log("car.brands", car.brands); // undefined, 인스턴스에서는 접근 불가
car.move();
```

## 문제 02

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
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
alert(rabbit.name);
```

출처: ko.javascript.info

### 풀이

> 서브클래스에서 constructor 를 생략하지 않는 경우 서브클래스의 constructor 에서는 반드시 super를 호출해야 한다.

**방법 1**

```jsx
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super();
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
console.log(rabbit.name);
```

**방법 2**

```jsx
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {}

let rabbit = new Rabbit("White Rabbit");
console.log(rabbit.name);
```

## 문제 03

1. **border-left-width를 borderLeftWidth로 변경하기**
   "my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해보세요.
   대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.

```jsx
camelize("background-color") == "backgroundColor";
camelize("list-style-image") == "listStyleImage";
camelize("-webkit-transition") == "WebkitTransition";
```

출처: ko.javascript.info

### 풀이

```jsx
function camelize(str) {
  const result = str.split("-").map((elem, index) => {
    return index == 0 ? elem : elem[0].toUpperCase() + elem.substring(1);
  });
  return result.join("");
}

console.log(camelize("background-color") === "backgroundColor");
console.log(camelize("list-style-image") === "listStyleImage");
console.log(camelize("-webkit-transition") === "WebkitTransition");
```

## 문제 04

1. **특정 범위에 속하는 요소 찾기**

   배열 `arr`의 요소 중 `a`이상 `b` 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 해당 요소를 출력해주는 함수 `filterRange(arr, a, b)`를 작성해봅시다.

   새로 작성하는 함수는 기존 배열 `arr`을 변경하면 안 되고, 반환되는 함수는 새로운 배열이어야 합니다.

```jsx
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (조건에 맞는 요소)

alert(arr); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)
```

출처: ko.javascript.info

### 풀이

```jsx
const filterRange = (arr, min, max) =>
  arr.filter((elem) => elem >= min && elem <= max);

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (조건에 맞는 요소)
console.log(arr); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)
```

## 문제 05

1. **확장 가능한 계산기**

   기능을 "확장"할 수 있는 계산기 객체를 만들어 주는 생성자 함수 `Calculator`를 작성해봅시다.

   `Calculator`는 두 단계를 거쳐 만들 수 있습니다.

   첫 번째 단계는 `"1 + 2"` 와 같은 문자열을 받아서 “숫자 연산자 숫자” 형태(공백으로 구분)로 바꿔주는
   메서드 `calculate(str)` 를 구현하는 것입니다. 이 함수는 `+`와 `-`를 처리할 수 있어야 하고, 연산 결과를 반환해야 합니다.

   ```jsx
   // 예시
   let calc = new Calculator();

   alert(calc.calculate("3 + 7")); // 10
   ```

   두 번째 단계는 계산기가 새로운 연산을 학습할 수 있도록 해주는 메서드 `addMethod(name, func)`를 추가해 주는 것입니다. 연산자 이름을 나타내는 `name`과 인수가 두개인 익명 함수 `func(a,b)`를 받는 새 메서드를 구현해야 하죠.

   구현된 메서드를 이용해 곱셈 `*`과 나눗셈 `/`, 거듭제곱 `**`연산자를 추가해주는 예시는 아래와 같습니다.

   ```jsx
   // 예시
   let powerCalc = new Calculator();
   powerCalc.addMethod("*", (a, b) => a * b);
   powerCalc.addMethod("/", (a, b) => a / b);
   powerCalc.addMethod("**", (a, b) => a ** b);

   let result = powerCalc.calculate("2 ** 3");
   alert(result); // 8
   ```

   출처: ko.javascript.info

### 풀이

```jsx
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
```
