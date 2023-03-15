function solution(my_string, n) {
    const arr = my_string.split('');
    const repeatArr = [];
    for (let i = 0; i < my_string.length; i++) {
        repeatArr.push(arr[i].repeat(n));
    }
    return repeatArr.join('');
}