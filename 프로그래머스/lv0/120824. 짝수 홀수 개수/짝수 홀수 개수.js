function solution(num_list) {
    // 짝수 개수 변수
    let evenNum = 0;
    // 홀수 갯수 변수
    let oddNum = 0;
    // num_list를 순회하면서
    for (let i = 0; i < num_list.length; i++) {
        // num_list 인덱스를 2로 나눈 나머지가 0이면 짝수갯수+1(true), 아니면 홀수갯수+1(false)
        num_list[i]%2 === 0 ? evenNum++ : oddNum++
    }
    
    return [evenNum, oddNum];
}