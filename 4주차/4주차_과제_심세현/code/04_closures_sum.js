function sum(number=0){
    let result = +number; // result 변수는 sum함수가 종료해도 사용 가능.렉시컬 환경에는 남아 있기 때문임
    return function(number=0){
        result += +number;
        return result;
    } 
}
//sum 함수가 종료가 일어나도 result 변수는 사용가능함.
sum(1)(2) // 3
sum(5)(-1) // 4