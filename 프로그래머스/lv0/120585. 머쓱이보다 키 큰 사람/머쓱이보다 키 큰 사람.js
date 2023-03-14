function solution(array, height) {
    let answer = 0;
    let cnt = 0;
    while (cnt < array.length) {
        if (array[cnt] > height) {
            answer = answer + 1;
            cnt = cnt + 1;
        } else { cnt = cnt + 1;}
    }    
    return answer;
}


// 1. array[i]와 height 비교
// 1-1. array[i]가 height보다 크면 answer + 1; cnt + 1;
// 1-2. 작거나 같으면 cnt + 1