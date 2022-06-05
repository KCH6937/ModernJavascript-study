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
