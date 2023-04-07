function solution(my_str, n) {
    // my_str을 길이 n씩 잘라서 저장한 배열을 return
    var answer = [];
    const array = my_str.split('');
    while(array.length > 0) {
        answer.push(array.splice(0,n).join(''));
    }

    return answer;
}