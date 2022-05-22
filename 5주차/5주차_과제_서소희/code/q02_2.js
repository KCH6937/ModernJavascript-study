class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {}

let rabbit = new Rabbit("White Rabbit");
console.log(rabbit.name);
