function solution(s) {
    let answer = 0;
    const Arr = s.split(' ');

    for (let i = 0; i < Arr.length; i++){
        if(Arr[i] === 'Z') answer -= Number(Arr[i-1]);
          else answer += Number(Arr[i]);
    }
    return answer;
}

// 문자열을 공백을 기준으로 split
// 배열을 순회하면서 더하기
// Z이면 전 값을 빼기
