function solution(num1, num2) {
    var answer = 0;
    if(num1>0 &&num1<=100 && num2>0 && num2<=100) {     // 제한조건 
        answer = Math.floor(num1/num2);     //num1을 num2로 나눈 몫을 구합니다.
    } 
    return answer;
}