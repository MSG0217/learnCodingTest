function solution(a, b) {
    let answer = 0;
    const maxNum = a > b ? a : b;
    const minNum = a < b ? a : b;
    for (let i = minNum; i <= maxNum; i++) {
        answer += i;
    }
    return answer;
}


// a와 b의 대소관계는 정해져있지 않습니다.