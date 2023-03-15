function solution(numbers) {
    var answer = 0;
    
    for (let value of numbers) {
        answer += value;
    }
    
    return answer/numbers.length;
}


// 1. 배열 값들을 다 더한다
// 2. 총합을 배열의 길이로 나눈다