
// 변수 호이스팅은 변수가 스코프 최상단으로 이동 한 것처럼 느껴지는 현상.(명백히는 최상단으로 이동하지는 않는다.)
// 자바스크립트 엔진이 변수 선언은 아랫쪽에 위치하더라도 상관없이 다른 코드들보다 변수를 먼저 읽어드리기 때문에 일어나는 현상
// 호이스팅시 값의 할당과 초기화는 일어나지 않는다. 변수 선언부에서 초기화가 이루어지고, 할당이 일어나는 코드에서 값이 할당 된다.
// var로 선언된 변수는 예외적으로 undefined로 초기화된다.
//var myName = undefined;

// let은 재할당은 가능하지만, 재선언은 불가능
console.log(myName) //myName is not defined
let cardName = 'KB';
cardName = '카카오'; // 재할당 가능
let cardName = 'IBK'; //has already been declared, 재선언 불가능


//var로 선언된 변수는 재선언도 가능함.
// 값이 할당 되기도 전에 호이스팅 단계에서 undefined로 값 초기화가 일어남.
console.log(myName) // undefined
var myName = '박민수';
myName = '이민수'; // 재할당 가능
var myName = '김민수'; // 재선언 가능
