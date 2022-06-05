function unique(arr) {
  const temp = new Set(arr);
  return new Array(...temp).join(", ");
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.
