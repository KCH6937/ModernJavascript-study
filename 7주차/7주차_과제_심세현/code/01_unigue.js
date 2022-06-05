function unique(arr) {
    return [...new Set(arr)];
}
// set에 넣으면 중복이 제거됨
// set 객체를 스프레드 문법을 사용해서 배열로 전환 한 뒤 return