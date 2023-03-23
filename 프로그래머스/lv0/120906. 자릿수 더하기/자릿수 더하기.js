function solution(n) {
    return String(n)                                // n은 숫자타입이므로 문자열로 바꾸고
            .split('')                              // split('')으로 글자를 배열 인덱스로 쪼개고
            .map((v) => Number(v))                  // map으로 인덱스를 숫자타입으로 바꾸고
            .reduce((acc, cur) => acc + cur, 0);    // reduce()로 누적산
}
