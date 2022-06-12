
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