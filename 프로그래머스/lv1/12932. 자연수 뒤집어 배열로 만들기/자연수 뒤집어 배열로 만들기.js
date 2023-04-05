function solution(n) {
    return  n.toString()         // 문자열 변환
             .split('')          // char마다 인덱스로 배열변환
             .reverse()          // 배열 순서 뒤집기
             .map((v) => +v);    // value 숫자값으로 변환
}