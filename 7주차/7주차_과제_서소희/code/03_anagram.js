Set.prototype.isSuperset = function (set) {
  return [...set].every((elem) => this.has(elem));
};

function aclean(arr) {
  let result = new Set();
  let temp = [];

  arr.forEach((word) => {
    const wordSet = new Set(word.toLowerCase().split(""));
    temp.forEach((item) => {
      const itemSet = new Set(item.toLowerCase().split(""));
      if (itemSet.isSuperset(wordSet)) result.delete(item);
    });
    temp.push(word);
    result.add(word);
  });
  return result;
}

const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
