class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  static brands = ["HYUNDAI", "KIA", "CHEVROLET"]; // 인스턴스 접근 불가
  move() {
    console.log(`Car ${this.name} is moving`);
  }
}

const car = new Car("붕붕", "white");
console.log("Car.brands", Car.brands);
console.log("car.brands", car.brands); // undefined, 인스턴스에서는 접근 불가
car.move();
