function solution(s){
    const lowercaseStr = s.toLowerCase();                   // 소문자로 변경
    let theNumOfP = 0;                                      // 'p'의 개수
    let theNumOfY = 0;                                      // 'y'의 개수
    for(let i = 0; i < s.length; i++) {                     // 문자열을 순회하면서
        if (lowercaseStr[i] === 'p') theNumOfP++;           // 'p'가 있으면 p의 개수 1씩 더하기
          else if (lowercaseStr[i] === 'y') theNumOfY++;    // 'y'가 있으면 y의 개수 1씩 더하기
    }
    if (theNumOfP === theNumOfY) return true;               // p의 개수 = y의 개수이면 true 반환(0 포함)
      else if (theNumOfP !== theNumOfY) return false;       // 개수 다르면 false 반환
}