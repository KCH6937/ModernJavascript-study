function makeUser() {
    return {
      name: "John",
      ref: this
    };
  };
  
  let user = makeUser(); //let user = {name: "John", ref: this};
  alert( user.ref.name ); //''가 출력됨,this는 전역 객체에 바인드 되어 있기 때문 
  alert( user.ref); // window
  
  //this는 전역 객체 window를 가리키고 있다.
  //user.ref.name === window.name
  
  /*
  프로퍼티 값으로 호출 되었기 때문에 this는 전역 객체에 바인드 되어 있다.
  */
  
  
  
  /*
  프로퍼티 값으로 호출 되면 전역 객체에 바인드 된다.
  this는 메서드나 생성자 함수를 통해 호출된 경우에만,
  자신이 속한 객체를 가리키는 자기 참조 변수다.
  */