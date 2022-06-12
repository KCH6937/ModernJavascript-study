


// Map 객체는 이터러블 객체이다. 객체로 취급 되며, 배열이 아니다.
// 배열에서만 사용가능한 push는 사용 불가


//Map.prototype.push = function(key, value){
//     this.set(key, value);
// };
let map = new Map();

map.set("name", "John");

let keys = map.keys();
console.log(typeof keys); //Object

keys = [...keys]; // 배열로 전환

keys.push("more"); 