function solution(n) {
    const answer = [];
    
    for(let i = 0; i < n / 2; i++) {
        answer.push(2*i + 1);
    }
    
    return answer;
}


// 0. 홀수? 2p-1? 2p+1??
// 0-1. n까지의 홀수?
// 0-2. n=10, [1, 3, 5, 7, 9] answer.length = 5 = n/2
