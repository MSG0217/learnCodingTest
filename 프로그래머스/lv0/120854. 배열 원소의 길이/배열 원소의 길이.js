function solution(strlist) {
    const ElLength = [...strlist];
    let answer = [];
    for (let i = 0; i < ElLength.length; i++) {
        answer.push(ElLength[i].length);
    }
    
    return answer;
}

// length-2를 푸시한다면?