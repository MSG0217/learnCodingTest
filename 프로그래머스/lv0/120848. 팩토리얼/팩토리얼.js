function solution(n) {
    const nFacArr = [];
    
    let nFacEl = 1;
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= i; j++) {
        nFacEl *= j;                    // i! 만들기
      }
      nFacArr.push(nFacEl);             // i!을 nFacArr의 i-1번째 인덱스로 푸시
      nFacEl = 1;                       // i+1번째 진행 전 초기화
    };  
    
    for (let i = 0 ; i < 10; i++) {     // n이 nFacArr[i] 요소((i+1)!)보다 작으면 i출력
        if (n < nFacArr[i]) return i;   
    }    
    return 10;                          // if문 안에서 안 걸러지면 리턴 10
}
