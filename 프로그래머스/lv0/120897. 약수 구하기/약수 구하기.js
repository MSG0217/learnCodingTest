function solution(n) {
    const ANSWER = [];
    for (let i = 0; i <= n; i++) {
        if(n%i === 0) ANSWER.push(i);
    }
    return ANSWER;
}


// 1부터 n까지 n%i === 0 이면 푸시