function solution(my_string, num1, num2) {
    let arr = my_string.split('');          // 매개변수 문자열을 배열로 전환
    
    arr.splice(num1, 1, my_string[num2]);   // num1번째 인덱스를 1개 빼고 my_string[num2] 대입
    arr.splice(num2, 1, my_string[num1]);   // num2번째 인덱스를 1개 빼고 my_string[num1] 대입
    
    return arr.join('');                    // 바꾼 배열을 하나의 문자열로 변환하여 리턴
}