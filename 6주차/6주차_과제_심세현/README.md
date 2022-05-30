# 6주차_과제_심세현

# 범위

- 28장 Number ~ 36장 디스트럭처링 할당
(p552 ~ p639)

# 과제

1. **전화번호만 찾아서 반환하는 함수 getPhone(str)를 구현하기 (정규 표현식 사용)**

```jsx
function getPhone(str) {
	// code
}

console.log(getPhone("제 전화번호는 010-1234-5678 입니다.")); // "010-1234-5678"
```

- 답

```jsx
function getPhone(str) {
// code
return str.match(/\d{3}-\d{3,4}-\d{4}/)[1];
}
```

1. **객체를 이터러블로 변경하기**
- 에러가 나지 않게 수정해주세요!

```jsx
let obj = {
	0: 1,
	1: 5,
	3: 10
}

for (const item of obj) {
	console.log(item);
}
```

- 답

```jsx
// obj를 배열로 만들면 이터럴이됨.
let obj = {
0: 1,
1: 5,
3: 10
}

obj.length = 4;

obj = Array.from(obj).filter(item => item !== undefined);

for (const item of obj) {
	console.log(item);
}

// obj가 객체였는데 배열이 되어 버린다.
```

```jsx
// 이터럴 메서드를 추가시켜서 이터럴로 변환

let obj = {
	0: 1,
	1: 5,
	3: 10
}

obj[Symbol.iterator] = function() {
  return {
    current: 0,
    last: 2,

    next() {
        if(this.current <= this.last){
            return { done: false, value: Object.keys(obj)[current++] };
        };
         return { done: true }; 
    }  
}
}
```

1. **1부터 n까지의 홀수의 합을 구하는 함수 oddSum(n)를 이터러블을 사용해서 구현하기**

```jsx
const oddSum = function (n) {
	// code
}
```

- 답

```jsx
let oddSum = function (n) {
	let max = n;
    let current = 0;
    let sum = 0;
    return{
        [Symbol.iterator](){
            return{
                next(){
                        sum = sum+2*current-1;
                        current++;
                        return {value:sum, done: 2*current > max};
                }
            }
        }
    }
}

for(const num of oddSum(12)){
    console.log(num);
}
```
