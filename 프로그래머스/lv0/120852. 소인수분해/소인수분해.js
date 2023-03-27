function solution(n) {
    let answer = [];
    
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) { 
            n /= i ;
            answer.push(i);
        } 
    }
    
    const Answer = answer.filter((v, i) => answer.indexOf(v) === i);
    
    return Answer;
}


// 1부터 n까지 나눠야지
// 나눠지면 계속 같은수로 나눠야지
// 더이상 나눠지지 않으면 배열에 푸시하고 +1 
// 그러다 몫이 1이 되면 반복문 종료
