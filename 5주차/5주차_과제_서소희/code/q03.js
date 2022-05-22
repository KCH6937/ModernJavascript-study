function camelize(str) {
  const result = str.split("-").map((elem, index) => {
    return index == 0 ? elem : elem[0].toUpperCase() + elem.substring(1);
  });
  return result.join("");
}

console.log(camelize("background-color") === "backgroundColor");
console.log(camelize("list-style-image") === "listStyleImage");
console.log(camelize("-webkit-transition") === "WebkitTransition");
