function solution(balls, share) {
    let numer = 1;
    let denom = 1;
    for (let i = balls; i > balls - share; i--) {
        numer *= i;
    }
    for (let i = share; i > 0; i--) {
        denom *= i;
    }
    
    return numer / denom;
}

// nCm
// 분자 : n * (n-1) * (n-2) * ... * ()
