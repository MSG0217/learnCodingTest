function solution(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

// 배열을 다 더하고
// length로 나누면 될듯?