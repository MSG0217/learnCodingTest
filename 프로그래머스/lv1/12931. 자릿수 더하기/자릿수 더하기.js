function solution(n)
{
    let answer = 0;
    while(n > 0) {
        answer += n % 10;           // n의 맨 끝자리 더하기
        n = Math.trunc(n / 10);     // n의 맨 끝자리 버리기
    }
    return answer;
}
