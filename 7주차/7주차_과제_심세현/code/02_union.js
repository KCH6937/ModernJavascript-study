

//union
// 합집합

Set.prototype.union = function(set){
    return new Set([...set, ...this]); 
 }

const A = new Set([1, 2, 3, 4]);

const B = new Set([1, 5]);

console.log(A.union(B)); // [1,2,3,5]