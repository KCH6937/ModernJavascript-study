function getPhone(str) {
  return str.match(/01[0-9]{1}-[0-9]{4}-[0-9]{4}/g)[0];
}

console.log(getPhone("제 전화번호는 010-1234-5678 입니다.")); // "010-1234-5678"
