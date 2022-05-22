function camelize(text) {
    let flag = true;
  
    let array = text.split('');
    while(array.indexOf('-') >-1){
            let index = array.indexOf('-');
            let upperCase = array[index+1].toUpperCase();
            array.splice(index+1, 1, upperCase); // 대문자로 교체
            array.splice(index, 1); // - 문자 제거
    }
    return array.join('');
}

camelize("background-color") == 'backgroundColor'; //true
camelize("list-style-image") == 'listStyleImage'; //true
camelize("-webkit-transition") == 'WebkitTransition'; //true