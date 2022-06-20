# 9주차(6/13 ~ 6/19)

# 범위

- 45장 프로미스 ~ 48장 모듈
(p842 ~ p898)

# 과제

1. **두 번 resolve 하기?**
아래 코드의 실행 결과를 예측해보세요.

```jsx
let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
```

출처: ko.javascript.info

- 실행 결과 예측
    - 즉시 1이 출력될 것이다.
    - `setTimeout(() => resolve(2), 1000);` 는 무시된다.
    
- 실제 실행 결과
    - 예상대로 1이 출력되었고, 2는 출력 되지 않았다.
    - promise 객체는 resolve나 reject 둘 중 하나를 호출하고,
    - resovle를 호출하면 대기(pending) 상태에서 이행(fullfilled)로 바뀌고 reject를 호출하면 거부거부(*rejected*) 상태로 고정된다.   한 번 바뀐 상태는 바뀌지 않는다.
    - 아래의 코드를 실행시키면 1만 계속 출력한다.

```html

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
promise.then(alert);
promise.then(alert);
```

 

1. **프라미스로 지연 만들기**
    
    내장 함수 `setTimeout`은 콜백을 사용합니다. 프라미스를 기반으로 하는 동일 기능 함수를 만들어보세요.
    
    함수 `delay(ms)`는 프라미스를 반환해야 합니다. 반환되는 프라미스는 아래와 같이 `.then`을 붙일 수 있도록 `ms` 이후에 이행되어야 합니다.
    

```jsx
function delay(ms) {
  // 여기에 코드 작성
}

delay(3000).then(() => alert('3초후 실행'));
```

- 답

```jsx
function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(2), ms);
  });
}

delay(3000).then(() => alert('3초후 실행'));
```

```jsx
function delay(ms) {
  return 
    setTimeout(() => Promise.resolve(2), ms);

}

delay(3000).then(() => alert('3초후 실행'));
```

1. **async와 await를 사용하여 코드 변경하기**
다음 코드를 `.then/catch` 대신 `async/await`를 사용해 다시 작성해봅시다.

```jsx
function loadJson(url) {
  return fetch(url)
    .then(response => {
  `
    }
}

loadJson('no-such-user.json')
  .catch(alert); // Error: 404
```

- 답

```jsx
async function loadJson(url) {
  try {
    let response = await fetch(url);
    let user = await response.json();
  } catch (err) {
    alert(err); // TypeError: failed to fetch
  }
}

loadJson('no-such-user.json').catch(alert)
```

[How to catch the status code when fetch fails using async await](https://stackoverflow.com/questions/56974852/how-to-catch-the-status-code-when-fetch-fails-using-async-await)

[Fetch API - Web API | MDN](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)

1. ****async가 아닌 함수에서 async 함수 호출하기****
‘일반’ 함수가 하나 있는데, 여기서 `async` 함수를 어떻게 하면 호출하고, 그 결과를 사용할 수 있을까요?

```jsx
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
	
  return 10;
}

function f() {
  // ...코드...
  // async wait()를 호출하고 그 결과인 10을 얻을 때까지 기다리려면 어떻게 해야 할까요?
  // f는 일반 함수이기 때문에 여기선 'await'를 사용할 수 없다는 점에 주의하세요!
}
```

참고: 문제 자체는 아주 간단하지만, async와 await를 학습한 지 얼마 안 된 개발자들이 쉽게 접하는 상황입니다.

- 답

```jsx

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
	
  return 10;
}

function f() {
  wait().then(alert)
}

//wait도 promise 객체라서, then을 쓰는 것이 가능하다.
```