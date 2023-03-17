function solution(n) {
    var answer = 1;
    // 약수갯수 변수 설정
    let theNumberOfcd = 0;
    // answer가 n보다 작거나 같다면 answer에 1씩 더하면서 while문 반복
    while (answer <= n) {
        // n을 나눈 나머지가 0이면 약수갯수 +1
        if (n % answer === 0) theNumberOfcd += 1;

        answer += 1;
    }
    
    return theNumberOfcd;
}



// n의 약수의 갯수 구하는 문제
// a,b 구할 필요 없음
