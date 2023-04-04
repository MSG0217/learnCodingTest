function solution(n) {
    const x = Math.sqrt(n);
    if (x % 1 === 0) return (x+1) ** 2;
      else return -1;
}

// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
// n은 1이상, 50000000000000 이하인 양의 정수입니다.