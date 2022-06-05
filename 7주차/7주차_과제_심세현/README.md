# 7주차_과제_심세현

# 범위

- 37장 Set과 Map ~ 39장 DOM
(p643 ~ p753)

# 주요 개념

- Set
    - 중복 되지 않는 요소들을 가지는 이터러블
    - 인덱스(색인)가 없음. 요소들의 순서가 존재하지 않음.
    - 이터러블이라서 for… of로 순회 가능
    
    ```jsx
    const set = new Set(['apple','banana','other fruits','apple']); //{'apple', 'banana', 'other fruits'}
    ```
    
- Map
    - value 값과 중복 되지 않는 key값을 가지는 요소들로 구성 된 이터러블 객체
    - key값은 boolean, string, number ,funtion, array 어떤 타입의 자료형이든 상관이 없다.
    - 객체와 유사하지만 객체의 key 값은 String과 Symbol 타입으로 한정되어 있다.
    - 이터러블이라서 for… of로 순회 가능
    
    ```jsx
    const map = new Map([[function(){},'value1'], ['key2', 'value2' ]]);
    ```
    

# 과제

1. **배열의 중복 요소 제거하기(Set 사용)**

```jsx
function unique(arr) {
  /* 제출 답안 */
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.
```

- **답**

```jsx
function unique(arr) {
    return [...new Set(arr)];
}
// set에 넣으면 중복이 제거됨
// set 객체를 배열로 전환 한 뒤 출력
```

1. **Set객체의 프로토타입 메서드를 구현해주세요.**
- intersection(set) : 어떤 두 개의 Set 객체의 교집합을 객체로 반환하는 메서드
- union(set) : 어떤 두 개의 Set 객체의 합집합을 객체로 반환하는 메서드
- difference(set) : 어떤 두 개의 Set 객체의 차집합을 객체로 반환하는 메서드
- isSuperset(subset) : 인자로 받은 객체가 상위 객체의 부분집합인지를 알려주는 메서드(Bool 타입 반환)

- **답**
    
    

```jsx
// intersection
// 교집합

// Set.prototype.intersection = function(set){
//     return new Set ( [...this].filter(item => [...set].includes(item) ))  ; 
//  }

Set.prototype.intersection = function(set){
    return new Set ( [...this].filter(item => set.has(item) ); 
 }

const A = new Set([1, 2, 3, 4]);

const B = new Set([1, 3]);

console.log(A.intersection(B));
```

```jsx
//union
// 합집합

Set.prototype.union = function(set){
    return new Set([...set, ...this]); 
 }

const A = new Set([1, 2, 3, 4]);

const B = new Set([1, 5]);

console.log(A.union(B)); // [1,2,3,5]
```

```jsx
//difference
// 차집합

//Set.prototype.differences = function(set){
  // return new Set ( [...this].filter(item =>! [...set].includes(item) ))  ; 
//}

Set.prototype.differences = function(set){
    return new Set ( [...this].filter(item =>!set.has(item) ))  ; 
 }

const A = new Set([1, 2, 3, 4]);

const B = new Set([1, 3]);

console.log(A.differences(B));//set[]
console.log(B.differences(A));//set[1,3]
```

```jsx
//isSuperset
// 인수로 받은 배열이 부분 집합인지 알려주는 함수

// Set.prototype.isSuperset = function(set){
//     return [...[...this].filter(item => set.has(item))].length === [...set].length ;
//  }

Set.prototype.isSuperset = function(subSet){
    const superArr = [...this];
    return [...subSet].every(v => superArr.includes(v)) ;
 }

const A = new Set([1, 2, 3, 4]);

const B = new Set([1, 3]);
const D = new Set([1,3,4,5]);

console.log(A.isSuperset(B)); //true
console.log(A.isSuperset(D)); //false
```

1. **에너그램 걸러내기**

예시

```jsx
nap - pan
ear - are - era
cheaters - hectares - teachers
```

aclean은 배열을 인수로 받고 그 배열 안의 에너그램 단어 중복을 제거 시키는 함수다.

얼핏 보기에는 다른 단어여도 에너그램이 같다면 같은 단어로 취급된다. 

set을 이용해서 중복 제거하기

```jsx
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear"나 "PAN,cheaters,era"이 출력되어야 합니다.
```

- **답**

```jsx
// 문제가 이해가 안가서 답지 보고 풀었음.
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(array){
    const tmpMap = new Map();
    for(const item of array){
        tmpMap.set(item.toLowerCase().split('').sort().join(''), item);

// teachers
// ['t','e','a','c','h','e','r','s']  
// ['a','c','e','e','h','r','s','t']
// 'aceehrst'
// ['aceehrst',teachers]
// 같은 키 값 중복은 제거됨.
    }
    return [...tmpMap.values()];
}

console.log( aclean(arr) );
```

1. **반복 가능한 객체의 키**

`map.keys()`를 사용해 배열을 반환받고, 이 배열을 변수에 저장해 `.push`와 같은 배열 메서드를 적용하고 싶다고 해봅시다.

작동하지 않네요.

```jsx
let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
keys.push("more");
//Object.prototype

```

이유가 무엇일까요? `keys.push` 가 작동하게 하려면 어떻게 코드를 고쳐야 할까요?

```jsx

// push는 배열 메서드이다. map.keys는 배열이 아니고 이터러블 객체다. 그래서 push는 사용 불가
// keys를 배열로 변환하면 push도 사용 가능하다.

//Map.prototype.push = function(key, value){
//     this.set(key, value);
// };

let map = new Map();

map.set("name", "John");

let keys = map.keys();
console.log(typeof keys); //Object

keys = [...keys]; // 배열로 전환

keys.push("more"); 

```

1. **객체 Object와 Map의 차이점에 대해 간단히 설명해주세요.**
    - Map 객체는 이터러블이다. (for of로 순회가 가능). Object는 이터러블이 아님 (for of로 순회 불가능)
    - Map의 키 값은 어떤 타입이든 상관 없다. Object의 키 값은 문자열과 Symbol 타입만 사용 가능
    
    ****
2. **this, constructor, static**

 `DailyAram`는 `watch`객체의 프로토타입을 상속하고 있습니다. 

예상 대로면 `console.log(new watch().printAramTime());`  에서 '내일 7시 0분에 알람이 울립니다.’ 라고 출력이 되어야 합니다. 하지만 오류가 발생해서 제대로 출력 되지 않습니다.

 `//이 부분을 고치세요.` 주석이 적힌 코드를 고쳐서 해결해주세요. (두 가지 해결법이 존재하니, 둘 다 찾으신 분들은 두 개다 적어주세요.)

```jsx
function DailyAram(){
};

DailyAram.alarmTime = {
    hours: 7,
    minutes: 0
};
DailyAram.getAlamTime = function (){ return this.alarmTime; }

function watch(){}

watch.prototype = Object.create(DailyAram.prototype);

watch.prototype.constructor = watch;//이 부분을 고치세요.

watch.prototype.printAramTime= function(){
    return `내일 ${this.alarmTime.hours}시 ${this.alarmTime.minutes}분에 알람이 울립니다.`;//이 부분을 고치세요.
}

console.log(new watch().printAramTime());
```

- **답 및 풀이**
    - alarmTime 정적 메서드는 watch객체의 프로토타입 체인 내에 존재하지 않는다.

```jsx

function DailyAram(){
};

DailyAram.alarmTime = {
    hours: 7,
    minutes: 0
}; 
 

DailyAram.getAlamTime = function (){ return this.alarmTime; }

function watch(){}

watch.prototype = Object.create(DailyAram.prototype);

watch.prototype.constructor = DailyAram;

watch.prototype.printAramTime= function(){
		console.log(this); // watch객체가 출력된다.
		console.log(this.constructor); // 위에서 watch.prototype.constuctor를 DailyAram으로 바꿔 놓았기 때문에 DailyAram이 출력된다.
    return `내일 ${this.constructor.alarmTime.hours}시 ${this.constructor.alarmTime.minutes}분에 알람이 울립니다.`;
}

console.log(new watch().printAramTime());

```

```jsx

function DailyAram(){
};

DailyAram.alarmTime = {
    hours: 7,
    minutes: 0
}; 
 

DailyAram.getAlamTime = function (){ return this.alarmTime; }

// alarmTIme 과 getAlamTime 모두 DailyAram 객체의 정적 메서드(static methord)이다. 
// 정적 메서드는 new, Object.create를 통한 프로토타입 상속 없이도 해당 스코프 내에서 선언 되어 있으면 사용 가능하다. 
// console.log(Daily.alaramTime); 

function watch(){}

watch.prototype = Object.create(DailyAram.prototype);

watch.prototype.constructor = DailyAram;

watch.prototype.printAramTime= function(){
    return `내일 ${DailyAram.alarmTime.hours}시 ${DailyAram.alarmTime.minutes}분에 알람이 울립니다.`;
} // DailyAram의 정적 메서드

console.log(new watch().printAramTime());

```

**하시면서 중간에 이해가 되지 않는 부분을 페이지와 함께 댓글로 남겨주시면, 스터디원 분들께서 답변을 
남겨주셨으면 좋겠습니다!**