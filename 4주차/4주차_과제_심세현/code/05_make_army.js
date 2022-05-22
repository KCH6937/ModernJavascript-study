function makeArmy() {
    let shooters = [];
      
    for(let i=0;i<10;i++){
        let shooter = function() { // shooter 함수
        alert( i ); 
      };
      shooters.push(shooter);
    } // for에서 반복해서 실행 될 때 마다, 매번 새로운 실행 컨텍스트를 생성하기 때문에 각각 다른 i값을 가지게 된다. 서로 다른 i변수 값을 가진다.
      
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // 0
  army[5](); // 5