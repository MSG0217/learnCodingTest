function solution(num1, num2) {
    var answer = 0;
    answer = Math.trunc((num1/num2) * 1000);
    return answer;
}

// 1. num1을 num2로 나눈다.
// 2. 나눈 값에 1,000을 곱한다.
// 3. 그 값의 정수 부분을 구한다.
// 3-1. Math.floor vs. parseInt ?
//      parseInt는 편법 = 문자를 받아서 정수를 반환 = 숫자계산에 적합X
//      if (num < 0) parseInt 오류발생