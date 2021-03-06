# 4주차_과제_심세현

# 범위

- 21장 빌트인 객체 ~ 24장 클로저
(p320 ~ p413)

# 과제

1. **객체 리터럴에서 ‘this’ 사용하기**
함수 `makeUser`는 객체를 반환합니다.
이 객체의 `ref`에 접근하면 어떤 결과가 발생하고, 그 이유는 뭘까요?

```jsx

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // undefined

/*
<예상>
user는 객체다. this는 자신이 속한 객체나 생성될 인스턴스를 가리키는 자기 참조 변수다.(책에 이렇게나옴)
this는 user를 가리키고 있기 때문에 user.ref.name은 user.name와 같다.
ref.name = user.name = John
*/

```

- **this**
    - this는 자신이 속한 객체 또는 자기 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다.
    - this가 가리키는 값은 호출 되는 시점에서 결정된다.
    - 일반 함수에서 호출된 this는 전역 객체에 바인드 된다.
    
- **답**

```jsx
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser(); //let user = {name: "John", ref: this};
alert( user.ref.name ); //''가 출력됨,this는 전역 객체에 바인드 되어 있기 때문 
alert( user.ref); // window

//this는 전역 객체 window를 가리키고 있다.
//user.ref.name === window.name

/*
프로퍼티 값으로 호출 되었기 때문에 this는 전역 객체에 바인드 되어 있다.
*/

/*
프로퍼티 값으로 호출 되면 전역 객체에 바인드 된다.
this는 메서드나 생성자 함수를 통해 호출된 경우에만,
자신이 속한 객체를 가리키는 자기 참조 변수다.
*/
```

```jsx
function makeUser() {
  return {
    name: "John",
    ref(){return this;}
  };// 메서드
};

let user = makeUser();

alert( user.ref().name ); //John 
alert( user.ref()); //{name: 'John', ref: ƒ} 
```

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
  showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    alert( this.step );
  
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

- **답**

```jsx
let ladder = {
  step: 0,
  up() {
    this.step++;
      return this; // 이 this는 ladder 가리키고 있음. ladder안의 어떤 메서드든 상관 없이 호출 가능함..
  },
  down() {
    this.step--;
      return this;
  },
  showStep: function() {
    alert( this.step );
      return this;
  }
};

ladder.up().up().down().showStep(); // 1
ladder.up().up().down().showStep().up().showStep(); //2
```

1. **this 값이 undefined인 함수 고치기**
아래 함수 `askPassword()`는 비밀번호를 먼저 확인하고 
그 결과에 따라 `user.loginOk`나 `user.loginFail`을 호출해야 합니다. 
그런데 함수를 호출하면 에러가 발생합니다. 에러는 왜 발생했을까요?
에러가 발생하지 않도록 색칠된 줄을 고쳐보세요. 다른 줄은 바꾸지 않아야 합니다.
힌트 : bind() 메서드 사용

```jsx
function askPassword(ok, fail) {
  let password = prompt("비밀번호를 입력해주세요.", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  loginOk() {
    alert(`${this.name}님이 로그인하였습니다.`);
  },

  loginFail() {
    alert(`${this.name}님이 로그인에 실패하였습니다.`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); // 색칠된 줄

//this를 user에 바인드 해주면 오류가 발생하지 않는다.
// askPassword()는 일반 함수이기 떄문에 문제가 발상함.

// this가 전역 객체를 가리키고 있기 때문이다.
// this가 가리키는 대상은 호출되는 시점에서 결정된
// 호출 되는 시점에서 this는 일반 함수에서 호출이 되고 있다. 
// 일반 함수에서 호출되는 경우 this는 전역 객체를 가리킨다.

```

- **답**

```jsx
function askPassword(ok, fail) {
  let password = prompt("비밀번호를 입력해주세요.", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  loginOk() {
    alert(`${this.name}님이 로그인하였습니다.`);
  },

  loginFail() {
    alert(`${this.name}님이 로그인에 실패하였습니다.`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); // 색칠된 줄
//this를 user에 바인드 해주면 오류가 발생하지 않는다.
// askPassword()는 일반 함수이기 떄문에 문제가 발상함.

// this가 전역 객체를 가리키고 있기 때문이다.
// this가 가리키는 대상은 호출되는 시점에서 결정된
// 호출 되는 시점에서 this는 일반 함수에서 호출이 되고 있다. 
// 일반 함수에서 호출되는 경우 this는 전역 객체를 가리킨다.
```

1. **클로저를 이용하여 합 구하기**
`sum(a)(b) = a+b`와 같은 연산을 해주는 함수 `sum`을 만들어보세요.
두 개의 괄호를 사용해서 말이죠.

```jsx
// 예시
sum(1)(2) // 3
sum(5)(-1) // 4
```

- **답**

```jsx
function sum(number=0){
    let result = +number; // result 변수는 sum함수가 종료해도 사용 가능.렉시컬 환경에는 남아 있기 때문임
    return function(number=0){
        result += +number;
        return result;
    } 
}
//sum 함수가 종료가 일어나도 result 변수는 사용가능함.
sum(1)(2) // 3
sum(5)(-1) // 4
```

1. **함수를 사용해 군대 만들기**
아래 코드는 `shooters`가 요소인 배열을 만들어줍니다.
모든 함수는 몇 번째 shooter인지 출력해줘야 하는데 뭔가 잘못되었습니다.

```jsx
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // shooter 함수
      alert( i ); // 몇 번째 shooter인지 출력해줘야 함
    };
    shooters.push(shooter);
    i++;
  } // 같은 하나의 i값을 공유함.

  return shooters;
}

let army = makeArmy();

army[0](); // 0번째 shooter가 10을 출력함
army[5](); // 5번째 shooter 역시 10을 출력함
// 모든 shooter가 자신의 번호 대신 10을 출력하고 있음
```

- **답**

```jsx
function makeArmy() {
  let shooters = [];
    
  for(let i=0;i<10;i++){
      let shooter = function() { // shooter 함수
      alert( i ); 
    };
    shooters.push(shooter);
  } // for에서 반복해서 실행 될 때 마다, 매번 새로운 실행 컨텍스트를 생성하기 때문에 각각 다른 i값을 가지게 된다. 서로 다른 i변수 값을 가진다.
    
  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5

```

**하시면서 중간에 이해가 되지 않는 부분을 페이지와 함께 댓글로 남겨주시면, 스터디원 분들께서 답변을 
남겨주셨으면 좋겠습니다!**