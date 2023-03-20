function solution(n) {
    let compositNum = 0     // 합성수
    // 합성수는 1과 자기자신 외에 약수가 있는 수이므로 2~n까지 순회하며 약수체크
    for (let i = 3; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i%j === 0) {
                compositNum += 1;
                break;
            }
        }
    }
    return compositNum;
}

// 합성수 = 약수의 개수가 3개 이상인 수 = 1과 자신 외의 약수가 있는 수