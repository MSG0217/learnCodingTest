function solution(array, n) {
    let answer = 0;
    let cnt = 0;
    
    // array.length 길이만큼 반복해서
    while(cnt < array.length) {
        // 배열값이 n과 같으면
        if(array[cnt] === n) {
            answer = answer + 1;
            cnt = cnt + 1;
        } else { cnt = cnt + 1; }
    }        
    return answer;
}
