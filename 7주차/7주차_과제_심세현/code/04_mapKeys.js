


// Map 객체는 이터러블 객체이다. 배열이 아니다. push는 사용 불가

//Map.prototype.push = function(key, value){
//     this.set(key, value);
// };
let map = new Map();

map.set("name", "John");

let keys = map.keys();
console.log(typeof keys); //Object

keys = [...keys]; // 배열로 전환

keys.push("more"); 