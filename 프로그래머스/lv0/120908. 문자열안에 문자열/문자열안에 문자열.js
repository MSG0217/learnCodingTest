function solution(str1, str2) {
    // str1 안에 str2가 있다면 1을 없다면 2를 return
    return str1.includes(str2) === true ? 1 : 2
}