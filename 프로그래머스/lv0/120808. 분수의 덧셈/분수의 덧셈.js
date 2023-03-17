// function solution(numer1, denom1, numer2, denom2) {
//     // 0. 분수의 덧셈에서 분모는 분모끼리의 곱, 분자는 상대의 분모*분자끼리의 합
//     // 1. 우선 분수의 덧셈을 하자!
//     const NUMER = numer1*denom2 + numer2*denom1;
//     const DENOM = denom1*denom2;
    
//     // 2-1. 기약분수는 분자분모가 더이상 1이 아닌 정수로 나누어떨어지지 않는 상태의 분수!
//     // 2-2-1-2. 끝까지 나눈다는 뜻은 분자분모의 '최대공약수'로 나눈다는 뜻!
//     let gcd = 1; // 최대공약수는 1보다 크거나 같은 정수!
    
//     // 2-2-1-2-1-1. 가장 간단하게 구하는 건 둘 중 작은 값이 큰 값을 통째로 나눌 수 있으면 된다!
//     // 2-2-1-2-1-1-1. 큰 수가 어떤 수인지 모르니 denom1 > denom2인 경우와 denom2 > denom1인 경우를 찾아야 한다.
//     // 2-2-1-2-1-1-1-1. 굳이 나눌 필요 없이 둘 중 나누어 떨어뜨리는 수(작은 수)가 최대공약수!
    
//     // ! 큰 수를 변수로 따로 설정하면 어떨까!?
//     let bigNum = 0;
//     let smallNum = 0;
//     if(NUMER >= DENOM) {
//         // bigNum = NUMER;
//         smallNum = DENOM;
//     } else { 
//         // bigNum = DENOM; 
//         smallNum = NUMER;
//     }
  
   
//     if (bigNum%smallNum === 0) {
//         gcd = smallNum; 
//     } 
//       // 2-2-1-2-1-2. 둘 중 작은 값으로 나누어떨어지지 않는다면!?
//       else {
//         for (let i = smallNum; i > 0; i--) {
//             if (NUMER%i === 0 && DENOM%i === 0) {
//                 // gcd *= i;
//             }
//         }
//     }
    
//     // 최대공약수를 구했으니 기약분수를 리턴하자
//     return [NUMER/gcd, DENOM/gcd];
// }



// // how to solve?!
// // 0. 분수의 덧셈에서 분모는 분모끼리의 곱, 분자는 상대의 분모*분자끼리의 합
// // 1. 우선 분수의 덧셈을 하자!
// // 1-1. 분자변수 numer = numer1*denom2 + numer2*denom1
// // 1-2. 분모변수 denom = denom1*denom2
// // 2. 기약분수는 무엇이냐!?
// // 2-1. 기약분수는 분자분모가 1이 아닌 정수로 나누어떨어지지 않는 상태의 분수!
// // 2-2. 그럼 나누는 과정이 필요하겠네!
// // 2-2-1. 나눌 수는 어떤 수인가?!
// // 2-2-1-1. 분자분모의 약수로 나눌수 있겠네!
// // 2-2-1-2. 끝까지 나눈다는 뜻은 분자분모의 '최대공약수'로 나눈다는 뜻!
// // 2-2-1-2-1. 두 수의 최대공약수는 어떻게 구하는가!? 최대공약수 변수 gcd 설정.
// // 2-2-1-2-1-1. 가장 간단하게 구하는 건 둘 중 작은 값이 큰 값을 통째로 나눌 수 있으면 된다!
// // 2-2-1-2-1-1-1. 큰 수가 어떤 수인지 모르니 denom1 > denom2인 경우와 denom2 > denom1인 경우를 찾아야 한다.
// // 2-2-1-2-1-1-2. if (denom1 > denom2) { if (denom1%denom2 === 0) 최대공약수 = denom2} => 분자는 numer/denom2, 분모는 denom/denom2
// // 2-2-1-2-1-1-3. if (denom2 > denom1) { if (denom2%denom1 === 0) 최대공약수 = denom1} => 분자는 numer/denom1, 분모는 denom/denom1
// // 2-2-1-2-1-1-4. if (denom2 = denom1) { 분자는 numer1 + numer2, 분모는 denom1||denom2}
// // 2-2-1-2-1-2. 둘 중 작은 값으로 나누어떨어지지 않는다면!?
// // 2-2-1-2-1-2-1. 차근차근 구해야 한다. 
// // 2-2-1-2-1-2-2. 1부터 999까지, if(denom1%i === 0 && denom2%i === 0) gcd *= i;




function solution(numer1, denom1, numer2, denom2) {

    const NUMER = numer1*denom2 + numer2*denom1;
    const DENOM = denom1*denom2;

    let gcd = 1; // 최대공약수는 1보다 크거나 같은 정수!
    let bigNum = 0;
    let smallNum = 0;
    if(NUMER >= DENOM) {
        // bigNum = NUMER;
        smallNum = DENOM;
    } else { 
        // bigNum = DENOM; 
        smallNum = NUMER;
    }
  
   
    // if (bigNum%smallNum === 0) {
    //     gcd = smallNum; 
    // } 
    //   else {
        for (let i = smallNum; i > 0; i--) {
            if (NUMER%i === 0 && DENOM%i === 0) {
                gcd *= i;
                break;
            }
        }
//     }
    
    return [NUMER/gcd, DENOM/gcd];

}

