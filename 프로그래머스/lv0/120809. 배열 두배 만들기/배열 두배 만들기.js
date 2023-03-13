function solution(numbers) {
    var answer = [];
    // 인덱스 0번부터 마지막번까지 반복하며
    for(let i = 0; i<numbers.length; i++) {
        // 배열 인덱스마다 두 배 곱한 것을 정답배열에 푸시하기
        answer.push(numbers[i]*2);
    }
    return answer;
}