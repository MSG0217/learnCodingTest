function solution(num1, num2) {
    var answer = 0;
    if (num1 === num2) answer = 1;
      else answer = -1; 
    return answer;
}

// 1. num1과 num2가 같은 지 비교
// 1-1. 비교하려면 '비교연산자' 사용
// 2. 같다면 1 반환, 다르면 -1 반환
// 2-1. 조건에 따라 결과값이 다르다면 조건문(if)문 사용!