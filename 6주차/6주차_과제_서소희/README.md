# [과제] deep dive 스터디 6주차 과제 (5/23 ~ 5/29)

# 범위

- 28장 Number ~ 36장 디스트럭처링 할당
  (p552 ~ p639)

# 과제

## 문제 1

1. **전화번호만 찾아서 반환하는 함수 getPhone(str)를 구현하기 (정규 표현식 사용)**

```jsx
function getPhone(str) {
  // code
}

console.log(getPhone("제 전화번호는 010-1234-5678 입니다.")); // "010-1234-5678"
```

### 풀이

```jsx
function getPhone(str) {
  return str.match(/01[0-9]{1}-[0-9]{4}-[0-9]{4}/g)[0];
}

console.log(getPhone("제 전화번호는 010-1234-5678 입니다.")); // "010-1234-5678"
```

## 문제 2

1. **객체를 이터러블로 변경하기**

- 에러가 나지 않게 수정해주세요!

```jsx
let obj = {
  0: 1,
  1: 5,
  3: 10,
};

for (const item of obj) {
  console.log(item);
}
```

### 풀이

```jsx
let obj = {
  0: 1,
  1: 5,
  3: 10,
};

for (const item in obj) {
  console.log(item, obj[item]);
}
```

## 문제 3

1. **1부터 n까지의 홀수의 합을 구하는 함수 oddSum(n)를 이터러블을 사용해서 구현하기**

```jsx
const oddSum = function (n) {
  // code
};
```

### 풀이

```jsx
const oddSum = function (n = 10) {
  let [sum, cur] = [0, 1];

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      [sum, cur] = [sum + *cur*, cur + 2];
      return { value: sum, done: cur - 2 > n };
    },
  };
};

const iter = oddSum(3);
for (const currentSum of iter) {
  console.log(currentSum);
}
```
