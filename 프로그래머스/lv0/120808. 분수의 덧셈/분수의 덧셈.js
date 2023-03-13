function solution(numer1, denom1, numer2, denom2) {
    const answer = [];
    // 통분 후 분자, 분모
    let numer = numer1*denom2 + numer2*denom1;      
    let denom = denom1 * denom2;
    
    let gcd = 0;        //최대공약수 구하기
    
    let minNum = Math.min(numer, denom);
    
    for (let i = minNum; i > 0; i--) {
        if (numer%i === 0 && denom%i === 0) {
            gcd = i;
            break
        }
    }
    
    answer.push(numer/gcd, denom/gcd);
    
    return answer;
}

// 1. 분모덧셈
// 2. 분자분모의 최대공약수로 나누기
// 2-1. 분자분모중 작은 수를 찾기
// 2-2. 작은수로 분자분모를 나눠보기
// 2-2-1. 둘다 나누어 떨어지면 그 나눈 수가 최대공약수
// 2-2-2. 안 나누어떨어지면 작은 수를 1 줄이고 2-2로 돌아가기