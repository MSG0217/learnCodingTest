function solution(x) {
    // 각 자리수의 합 sum 을 구하고
    let sum = 0     // 각 자리수 합 구할 변수 선언
    sum = (x+'').split('').reduce((acc, cur) => acc + (+cur), 0);
    // return x % sum === 0 ? true : false
    return x % sum === 0 ? true : false
}

// x는 1 이상, 10000 이하인 정수
// 각 자리수의 합 sum 을 구하고
// return x % sum === 0 ? true : false