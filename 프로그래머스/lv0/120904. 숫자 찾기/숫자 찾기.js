function solution(num, k) {
    if (num.toString().indexOf(String(k)) !== -1) {
        return num.toString().indexOf(String(k))+1;
    } else return -1;
}


// 1. 정수를 문자열로 바꾸고
// 