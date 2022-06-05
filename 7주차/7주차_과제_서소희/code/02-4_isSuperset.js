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
