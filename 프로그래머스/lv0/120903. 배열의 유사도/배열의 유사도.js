function solution(s1, s2) {
    let cnt = 0;        // 같은 원소의 개수
    for(let s1Value of s1) {
        for(let s2Value of s2) {
            if(s1Value === s2Value) cnt++;
        }
    }
    return cnt;
}

// let cnt = 0; 카운트 변수 설정

// s1을 순회하며 s2의 값과 같으면 cnt++;