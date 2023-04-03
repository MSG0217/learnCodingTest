function solution(n) {
    let sumDivsOfN = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) sumDivsOfN += i;
        continue;
    }
    return sumDivsOfN;
}

// 약수 배열을 만들고
// reduce 이용하면 될 듯(또는 for문)