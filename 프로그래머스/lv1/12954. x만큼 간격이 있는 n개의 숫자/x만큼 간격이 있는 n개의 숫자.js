function solution(x, n) {
    var answer = [];
    for(let i = 1; i <= n; i++) {
        answer.push(x * i)
    }
    return answer;
}

// n은 반복횟수
// x는 등비이며 [0] 값