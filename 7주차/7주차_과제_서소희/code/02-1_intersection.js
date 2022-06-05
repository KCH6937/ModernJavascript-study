Set.prototype.intersection = function (set) {
  const result = new Set([]);
  for (elem of set) {
    if (this.has(elem)) result.add(elem);
  }
  return result;
};

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([2, 3, 4, 5, 6]);

console.log(setA.intersection(setB));
