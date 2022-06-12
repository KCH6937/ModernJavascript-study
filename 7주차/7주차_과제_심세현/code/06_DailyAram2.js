
function DailyAram(){
};


DailyAram.alarmTime = {
    hours: 7,
    minutes: 0
}; 
 

DailyAram.getAlamTime = function (){ return this.alarmTime; }

// alarmTIme 과 getAlamTime 모두 DailyAram 객체의 정적 메서드(static methord)이다. 
// 정적 메서드는 new, Object.create를 통한 프로토타입 상속 없이도 해당 스코프 내에서 선언 되어 있으면 사용 가능하다. 
// console.log(Daily.alaramTime); 

function watch(){}

watch.prototype = Object.create(DailyAram.prototype);

watch.prototype.constructor = DailyAram;

watch.prototype.printAramTime= function(){
    return `내일 ${DailyAram.alarmTime.hours}시 ${DailyAram.alarmTime.minutes}분에 알람이 울립니다.`;
} // DailyAram의 정적 메서

console.log(new watch().printAramTime());
