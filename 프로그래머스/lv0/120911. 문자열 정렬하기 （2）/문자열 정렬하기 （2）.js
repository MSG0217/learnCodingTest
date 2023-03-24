function solution(my_string) {
    return my_string.toLowerCase().split('').sort().join('');
}

// 1. 소문자로 바꾸고
// 2. 오름차순 정렬