function solution(my_string) {
    const NumArr = my_string.split(/[a-zA-Z]/g).filter(v => v > 0)
    let answer = 0;
    for (let num of NumArr) {
        answer = parseInt(answer) + parseInt(num);
    }
    return answer;
}