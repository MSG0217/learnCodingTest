function solution(emergency) {
    // 1. 인수와 같은 길이이며 모든 값이 1인 answer 만들기
    const answer = Array(emergency.length).fill(1);
    // 2. 인수배열의 값을 비교하며 작은 값에 +1하기
    for (let i = 0; i < emergency.length; i++) {
        for (let j = 0; j < emergency.length; j++) {
            if (emergency[i] < emergency[j]) { answer[i] += 1;}
            
        }
    }
    
    return answer;
}


// 1. 인수와 같은 길이의 빈 배열 answer 만들기
// 2. 비교해서 작은 수에 +1씩 더하자!

// 2. 인수배열을 순회하며 가장 큰 값과 같은 answer의 인덱스에 1 대입
// 2-1. 가장 큰 값을 어떻게 구하지?
// 2-1-1. maxNum 변수 설정.
// 2-1-2. 두 값씩 비교하며 maxNum 변경
// 2-1-3. 최종 maxNum과 같은 인덱스에 1 대입?

