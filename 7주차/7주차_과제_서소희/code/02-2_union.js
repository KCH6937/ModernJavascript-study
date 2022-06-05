// solution 1
Set.prototype.union = function (set) {
  return new Set([...this, ...set]);
};

// solution 2
Set.prototype.union02 = function (set) {
  const result = new Set([...this]);
  for (elem of set) result.add(elem);
  return result;
};

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([2, 3, 4, 5, 6]);

console.log(setA.union(setB));
console.log(setA.union02(setB));
