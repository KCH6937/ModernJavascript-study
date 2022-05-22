class Car {
    constructor(name, color) {
        this.color = color;
        this.name = name;
    } // 생성자

    static brands = ['HYUNDAI', 'KIA', 'CHEVROLET']; // 정적 프로퍼티 변수

    move(){
        console.log(`Car ${this.name} is move now`);
    }// 메서드 
}

Car.brands.push('TESLA'); // ['HYUNDAI', 'KIA', 'CHEVROLET', 'TESLA']

const car2 = new Car('teslaModelS', 'red');

car2.move(); //Car teslaModelS is move now
car2.color