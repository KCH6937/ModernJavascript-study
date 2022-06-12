function DailyAram(){
};


DailyAram.alarmTime = {
    hours: 7,
    minutes: 0
}; 
 

DailyAram.getAlamTime = function (){ return this.alarmTime; }


function watch(){}

watch.prototype = Object.create(DailyAram.prototype);

watch.prototype.constructor = DailyAram;

watch.prototype.printAramTime= function(){
		console.log(this); // watch객체가 출력된다.
		console.log(this.constructor); // 위에서 watch.prototype.constuctor를 DailyAram으로 바꿔 놓았기 때문에 DailyAram이 출력된다.
    return `내일 ${this.constructor.alarmTime.hours}시 ${this.constructor.alarmTime.minutes}분에 알람이 울립니다.`;
}

console.log(new watch().printAramTime());
