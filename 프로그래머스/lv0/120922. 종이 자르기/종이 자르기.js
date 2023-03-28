function solution(M, N) {
    const row = M - 1;
    const column = (N - 1) * M;
    return row + column;
}


// 가로 = M-1번
// 세로 = (N-1) * M번
// 가로 + ㅅㅔ로