function Accumulator(startingValue){

    if(!new.target){
        return new  Accumulator(startingValue);
    } // new 없이 일반 함수로 호출된 함수는 인스턴스로 반환시킨다.
    
		this.value = startingValue;
    this.read = function(){
        this.value += +prompt("저장 된 값에 입력하신 숫자를 더합니다."); 
    }
}
let accumulator = new Accumulator(1); // 최초값: 1
let accumulator2 = Accumulator(2); // 최초값: 2

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

accumulator2.read(); // 사용자가 입력한 값을 더해줌
accumulator2.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); 
alert(accumulator2.value); 