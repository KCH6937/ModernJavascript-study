function makeArmy() {
  let shooters = [];
  let i = 0;
  while (i < 10) {
    let shooter = (function (i) {
      return function () {
        return console.log(i);
      };
    })(i);
    shooters.push(shooter);
    i++;
  }
  return shooters;
}

let army = makeArmy();
for (let i = 0; i < 10; i++) army[i]();
