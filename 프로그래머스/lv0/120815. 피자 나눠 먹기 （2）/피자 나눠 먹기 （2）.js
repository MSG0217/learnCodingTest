function solution(n) {
    // 최대공약수(greates common divisor)
    let gcd = 0;    
    // 6의 약수 배열
    const divisorOf6 = [1, 2, 3, 6];
    // 6의 약수 중 n을 나눈 나머지가 0인 최댓값은 6과 n의 최대공약수! 
    for (let cd of divisorOf6) {     // divisorOf6의 값을 돌며
        
        if (n % cd === 0) {         // n을 6의 약수로 나누었을 때 나머지가 0이면
            gcd = cd;               // 그 값은 최대공약수 -> 큰 값일 수록 바뀜
        }
    }
    
    let pieceOfPizza = n*6/gcd;     // 공평하게 나눌 수 있는 피자조각 수
    let numberOfPizza = pieceOfPizza/6;      // 공평하게 나눌 수 있는 피자 판 수

    return numberOfPizza;
}


// n과 6의 최소공배수를 구하는 문제
// 최소공배수 구하는 공식?? 
// [6,6]   // 6   n*6/최대공약수
// [6,10]  // 30    
// [6,4]   // 12
// 최대공약수 구하는 공식?
