function solution(my_string, letter) {
    // 1 my_string을 배열로 바꾸기
    const arr = my_string.split('');
    const answerArr = [];
    // 2 배열을 순회하며 letter와 같지 않으면 정답배열에 푸시
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== letter) {
            answerArr.push(arr[i]);
        }
    }
    // 정답배열을 하나의 문자열로 리턴
    return answerArr.join('');
}


// 1 my_string을 배열로 바꾸기
// 2 배열을 순회하며 letter와 같지 않으면 정답배열에 푸시