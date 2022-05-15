# [과제] deep dive 스터디 4주차 과제 (5/9 ~ 5/15)

# 범위

- 21장 빌트인 객체 ~ 24장 클로저
  (p320 ~ p413)

# 과제

# 문제 01

1. **객체 리터럴에서 ‘this’ 사용하기**
   함수 `makeUser`는 객체를 반환합니다.
   이 객체의 `ref`에 접근하면 어떤 결과가 발생하고, 그 이유는 뭘까요?

```jsx
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // 결과가 어떻게 될까요?
```

출처 : ko.javascript.info

### 내 풀이

- makeUser 함수는 함수 내부 영역을 참조하는 닫힌 객체를 새롭게 생성해서 반환한다. 따라서 이때 this는 가 가리키는 함수 내부 영역의 name을 반환한다. 함수 내부 영역에 name은 존재하지 않으므로 undefined이다.

# 문제 02

1. **체이닝**
   올라가기(`up`)와 내려가기(`down`) 메서드를 제공하는 객체 `ladder` 가 있습니다.

```jsx
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    alert(this.step);
  },
};
```

메서드를 연이어 호출하고자 한다면 아래와 같이 코드를 작성할 수 있습니다.

```jsx
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
```

`up`, `down`, `showStep` 을 수정해 아래처럼 메서드 호출 체이닝이 가능하도록 해봅시다.

```jsx
ladder.up().up().down().showStep(); // 1
```

출처 : ko.javascript.info

### 내 풀이 02-1

```jsx
const ladder = (function () {
  let step = 0;
  return {
    up() {
      ++step;
      return this;
    },
    down() {
      step--;
      return this;
    },
    showStep() {
      console.log(step);
    },
  };
})();

// 실행
ladder.up().up().up().up().showStep(); // 4
ladder.down().down().down().down().showStep(); // 0
ladder.up().up().down().showStep(); // 1
```

### 내 풀이 02-2

```jsx
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

// 실행
const ladder = new Ladder();
ladder.up().up().up().up().showStep(); // 4
ladder.down().down().down().down().showStep(); // 0
ladder.up().up().down().showStep(); // 1
```

# 문제 03

1. **this 값이 undefined인 함수 고치기**
   아래 함수 `askPassword()`는 비밀번호를 먼저 확인하고
   그 결과에 따라 `user.loginOk`나 `user.loginFail`을 호출해야 합니다.
   그런데 함수를 호출하면 에러가 발생합니다. 에러는 왜 발생했을까요?
   에러가 발생하지 않도록 색칠된 줄을 고쳐보세요. 다른 줄은 바꾸지 않아야 합니다.
   힌트 : bind() 메서드 사용

```jsx
function askPassword(ok, fail) {
  let password = prompt("비밀번호를 입력해주세요.", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  loginOk() {
    alert(`${this.name}님이 로그인하였습니다.`);
  },

  loginFail() {
    alert(`${this.name}님이 로그인에 실패하였습니다.`);
  },
};

askPassword(user.loginOk, user.loginFail); // 색칠된 줄
```

출처: ko.javascript.info

### 풀이

```jsx
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  function askPassword(ok, fail) {
    let password = input();
    if (password == "rockstar") ok();
    else fail();
  }

  let user = {
    name: "John",
    loginOk() {
      console.log(`${this.name}님이 로그인하였습니다.`);
    },
    loginFail() {
      console.log(`${this.name}님이 로그인에 실패하였습니다.`);
    },
  };
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
};

let line = 0;
const input = () => stdin[line++];

let stdin = [];
console.log("비밀번호를 입력해주세요.");
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  solution();
  process.exit();
});
```

# 문제 04

1. **클로저를 이용하여 합 구하기**
   `sum(a)(b) = a+b`와 같은 연산을 해주는 함수 `sum`을 만들어보세요.
   두 개의 괄호를 사용해서 말이죠.

```jsx
// 예시
sum(1)(2); // 3
sum(5)(-1); // 4
```

출처: ko.javascript.info

### 풀이 ⭐️⭐️⭐️⭐️⭐️

```jsx
const counter = (function counter() {
  let sum = 0;
  return function (first) {
    return function (second) {
      sum += first + second;
      return sum;
    };
  };
})();

console.log(counter(5)(3));
```

# 문제 05

1. **함수를 사용해 군대 만들기**
   아래 코드는 `shooters`가 요소인 배열을 만들어줍니다.
   모든 함수는 몇 번째 shooter인지 출력해줘야 하는데 뭔가 잘못되었습니다.

```jsx
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function () {
      // shooter 함수
      alert(i); // 몇 번째 shooter인지 출력해줘야 함
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0번째 shooter가 10을 출력함
army[5](); // 5번째 shooter 역시 10을 출력함
// 모든 shooter가 자신의 번호 대신 10을 출력하고 있음
```

왜 모든 shooter가 동일한 숫자를 출력하는 걸까요? 제대로 된 번호가 출력될 수 있게 코드를 수정해 보세요.

출처: ko.javascript.info

### 풀이 ⭐️⭐️⭐️

```jsx
function makeArmy() {
  let shooters = [];
  let i = 0;
  while (i < 10) {
    let shooter = (function (i) {
      return function () {
        return console.log(i);
      };
    })(i);
    shooters.push(shooter);
    i++;
  }
  return shooters;
}

let army = makeArmy();
for (let i = 0; i < 10; i++) army[i]();
```
