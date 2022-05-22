// constructor 생성자에 super()를 쓰지 않았기 때문, 무조건 써야 된다.
// 자식 생성자 안에서 super 를 반드시 호출해야 한다. this가 사용되는 부분 보다 앞에 위치해야함.
// Animal에서 생성 된 인스턴스를 rabbit에 넘겨주기 때문임.
 
class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Rabbit extends Animal {
    constructor(name) {
      super(name); 
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
  alert(rabbit.name);