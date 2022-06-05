# [과제] deep dive 스터디 7주차 과제 (5/30 ~ 6/5)

# 범위

- 37장 Set과 Map ~ 39장 DOM
  (p643 ~ p753)

# 과제

## 문제 1

1. **배열의 중복 요소 제거하기(Set 사용)**

```jsx
function unique(arr) {
  /* 제출 답안 */
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(values)); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.
```

출처: ko.javascript.info

### 풀이

```jsx
function unique(arr) {
  const temp = new Set(arr);
  return new Array(...temp).join(", ");
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.
```

## 문제 2

2. **Set객체의 프로토타입 메서드를 구현해주세요.**

- intersection(set) : 어떤 두 개의 Set 객체의 교집합을 객체로 반환하는 메서드
- union(set) : 어떤 두 개의 Set 객체의 합집합을 객체로 반환하는 메서드
- difference(set) : 어떤 두 개의 Set 객체의 차집합을 객체로 반환하는 메서드
- isSuperset(subset) : 인자로 받은 객체가 상위 객체의 부분집합인지를 알려주는 메서드(Bool 타입 반환)

### 풀이

intersection

```jsx
Set.prototype.intersection = function (set) {
  const result = new Set([]);
  for (elem of set) {
    if (this.has(elem)) result.add(elem);
  }
  return result;
};

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([2, 3, 4, 5, 6]);

console.log(setA.intersection(setB));
```

union

```jsx
// solution 1
Set.prototype.union = function (set) {
  return new Set([...this, ...set]);
};

// solution 2
Set.prototype.union02 = function (set) {
  const result = new Set([...this]);
  for (elem of set) result.add(elem);
  return result;
};

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([2, 3, 4, 5, 6]);

console.log(setA.union(setB));
console.log(setA.union02(setB));
```

difference

```jsx
// solution 1
Set.prototype.difference = function (set) {
  const result = new Set([...this]);
  for (elem of set) {
    if (this.has(elem)) result.delete(elem);
  }
  return result;
};

// solution 2
Set.prototype.difference02 = function (set) {
  return new Set([...this].filter((elem) => !set.has(elem)));
};

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([2, 3, 4, 5, 6]);

console.log(setA.difference(setB));
console.log(setB.difference(setA));

console.log(setA.difference02(setB));
console.log(setB.difference02(setA));
```

isSuperset

```jsx
// solution 1
Set.prototype.isSuperset = function (set) {
  for (elem of set) {
    if (!this.has(elem)) return false;
  }
  return true;
};

// solution 2
Set.prototype.isSuperset02 = function (set) {
  return [...set].every((elem) => this.has(elem));
};

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([2, 3, 4, 5, 6]);
const setC = new Set([2, 3, 4, 5]);
const setD = new Set([2, 3, 4]);

console.log(setA.isSuperset(setB));
console.log(setC.isSuperset(setD));

console.log(setA.isSuperset02(setB));
console.log(setC.isSuperset02(setD));
```

## 문제 3

3. **에너그램 걸러내기**

예시

```jsx
nap - pan;
ear - are - era;
cheaters - hectares - teachers;
```

애너그램으로 만든 단어를 걸러내는 함수 `aclean(arr)`을 만들어보세요.

예시

```jsx
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear"나 "PAN,cheaters,era"이 출력되어야 합니다.
```

출처: ko.javascript.info

### 풀이

```jsx
Set.prototype.isSuperset = function (set) {
  return [...set].every((elem) => this.has(elem));
};

function aclean(arr) {
  let result = new Set();
  let temp = [];

  arr.forEach((word) => {
    const wordSet = new Set(word.toLowerCase().split(""));
    temp.forEach((item) => {
      const itemSet = new Set(item.toLowerCase().split(""));
      if (itemSet.isSuperset(wordSet)) result.delete(item);
    });
    temp.push(word);
    result.add(word);
  });
  return result;
}

const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
```

## 문제 4

4. **반복 가능한 객체의 키**

`map.keys()`를 사용해 배열을 반환받고, 이 배열을 변수에 저장해 `.push`와 같은 배열 메서드를 적용하고 싶다고 해봅시다.

작동하지 않네요.

```jsx
let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
keys.push("more");
```

이유가 무엇일까요? `keys.push` 가 작동하게 하려면 어떻게 코드를 고쳐야 할까요?

출처: ko.javascript.info

### 풀이

```jsx
let map = new Map();
map.set("name", "John");

let keys = [...map.keys()];
keys.push("more");

console.log(keys);
```

## 문제 5

5. **객체 Object와 Map의 차이점에 대해 간단히 설명해주세요.**

### 풀이

- Object와 Map은 키와 값으로 구성되는 자료구조라는 공통점을 갖는다.
- 차이점으로,

1. Map은 객체를 포함한 모든 값을 키로 사용 가능하며
2. 이터러블이고,
3. map.size를 통해 요소의 개수를 확인한다.

## 문제 6

6. **this, constructor, static**

`DailyAram`는 `watch`객체의 프로토타입을 상속하고 있습니다.

예상 대로면 `console.log(new watch().printAramTime());` 에서 '내일 7시 0분에 알람이 울립니다.’ 라고 출력이 되어야 합니다. 하지만 오류가 발생해서 제대로 출력 되지 않습니다.

`//이 부분을 고치세요.` 주석이 적힌 코드를 고쳐서 해결해주세요. (두 가지 해결법이 존재하니, 둘 다 찾으신 분들은 두 개다 적어주세요.)

```jsx
function DailyAram() {}

DailyAram.alarmTime = {
  hours: 7,
  minutes: 0,
};
DailyAram.getAlamTime = function () {
  return this.alarmTime;
};

function watch() {}

watch.prototype = Object.create(DailyAram.prototype);

watch.prototype.constructor = watch; //이 부분을 고치세요.

watch.prototype.printAramTime = function () {
  return `내일 ${this.alarmTime.hours}시 ${this.alarmTime.minutes}분에 알람이 울립니다.`; //이 부분을 고치세요.
};

console.log(new watch().printAramTime());
```

### 풀이

```jsx
// 풀이 중
```
