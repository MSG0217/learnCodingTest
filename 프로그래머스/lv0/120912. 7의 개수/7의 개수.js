function solution(array) {
    // array 내에 7이 몇개 있는지
    const without7 = array.join('').split('7');
    console.log(without7);
    return without7.length - 1;
}
// array를 하나의 문자열로 합치고
// 7을 기준으로 split('7')한 뒤
