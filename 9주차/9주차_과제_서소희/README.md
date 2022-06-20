# [과제] deep dive 스터디 9주차 과제 (6/13~19)

# 범위

- 45장 프로미스 ~ 48장 모듈
  (p842 ~ p898)

**Promise, async/await 강의 추천드립니다!**

- promise-1(생활코딩): [https://www.youtube.com/watch?v=Sn0ublt7CWM](https://www.youtube.com/watch?v=Sn0ublt7CWM)
- promise-2(생활코딩): [https://www.youtube.com/watch?v=PasFh_t1mhY](https://www.youtube.com/watch?v=PasFh_t1mhY)
- async/await(생활코딩): [https://www.youtube.com/watch?v=1z5bU-CTVsQ](https://www.youtube.com/watch?v=1z5bU-CTVsQ)

# 과제

## 문제 1

1. **두 번 resolve 하기?**
   아래 코드의 실행 결과를 예측해보세요.

```jsx
let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
```

출처: ko.javascript.info

### 풀이

1. 틀린 풀이: 프로미스 생성자 함수에 전달한 콜백 함수에는 resolve 함수와 비동기 함수인 setTimeout 함수가 있다. 첫 번째 함수인 resolve는 실행되어도 반환하는 값이 없다. 이어지는 setTimeout 비동기 함수는 1초 후 콜백 함수로 2를 값으로 갖는 resolve 를 반환하므로, then 프로퍼티로 체이닝된 alert 콜백 함수에서 2를 알린다.
2. 답: 이미 resolve(1) 에서 처리가 완료되므로 뒤에 있는 resolve는 실행되지 않는다.

## 문제 2

2. **프라미스로 지연 만들기**

   내장 함수 `setTimeout`은 콜백을 사용합니다. 프라미스를 기반으로 하는 동일 기능 함수를 만들어보세요.

   함수 `delay(ms)`는 프라미스를 반환해야 합니다. 반환되는 프라미스는 아래와 같이 `.then`을 붙일 수 있도록 `ms` 이후에 이행되어야 합니다.

```jsx
function delay(ms) {
  // 여기에 코드 작성
}

delay(3000).then(() => alert("3초후 실행"));
```

### 풀이

```jsx
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

delay(3000).then(() => console.log("3초후 실행"));
```

## 문제 3

3. **async와 await를 사용하여 코드 변경하기**
   다음 코드를 `.then/catch` 대신 `async/await`를 사용해 다시 작성해봅시다.

```jsx
function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson("no-such-user.json").catch(alert); // Error: 404
```

### 풀이

```jsx
async function loadJson(url) {
  return await fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson("http://localhost:3001/places").catch(alert); // Error: 404
```

# 문제 4

4. \***\*async가 아닌 함수에서 async 함수 호출하기\*\***
   ‘일반’ 함수가 하나 있는데, 여기서 `async` 함수를 어떻게 하면 호출하고, 그 결과를 사용할 수 있을까요?

```jsx
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...코드...
  // async wait()를 호출하고 그 결과인 10을 얻을 때까지 기다리려면 어떻게 해야 할까요?
  // f는 일반 함수이기 때문에 여기선 'await'를 사용할 수 없다는 점에 주의하세요!
}
```

참고: 문제 자체는 아주 간단하지만, async와 await를 학습한 지 얼마 안 된 개발자들이 쉽게 접하는 상황입니다.

### 풀이

```jsx
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 10;
}

async function f() {
  return await wait();
}

console.log(f());
```
