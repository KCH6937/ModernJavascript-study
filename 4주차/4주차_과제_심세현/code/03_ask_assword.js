let ladder = {
    step: 0,
    up() {
      this.step++;
        return this; // 이 this는 ladder 가리키고 있음. ladder안의 어떤 메서드든 상관 없이 호출 가능함..
    },
    down() {
      this.step--;
        return this;
    },
    showStep: function() {
      alert( this.step );
        return this;
    }
  };
  
  ladder.up().up().down().showStep(); // 1
  ladder.up().up().down().showStep().up().showStep(); //2