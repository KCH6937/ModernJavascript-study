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