function solution(my_string) {
    const ARR = my_string.split('');
    
    for( let i = 0; i < ARR.length - 1; i++) {
        for( let j = i + 1; j < ARR.length; j++) {
            if(ARR[i] === ARR[j]) ARR.splice(j, 1, '');
        }
    }
    
    return ARR.join('');
}


// 배열로 전환
// replace