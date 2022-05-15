const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  function askPassword(ok, fail) {
    let password = input();
    if (password == "rockstar") ok();
    else fail();
  }

  let user = {
    name: "John",
    loginOk() {
      console.log(`${this.name}님이 로그인하였습니다.`);
    },
    loginFail() {
      console.log(`${this.name}님이 로그인에 실패하였습니다.`);
    },
  };
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
};

let line = 0;
const input = () => stdin[line++];

let stdin = [];
console.log("비밀번호를 입력해주세요.");
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  solution();
  process.exit();
});
