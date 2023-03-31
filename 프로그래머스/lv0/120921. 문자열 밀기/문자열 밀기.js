function solution(A, B) {
    const arr = [...A];                         // 배열 메서드 사용위해 배열로 바꾸기
    
    if (A === B) return 0;                      // 애초에 일치하면 0 반환
    
    for(let i = 1; i <= A.length; i++){         // 문자열 길이만큼(1 ~ A.length) 동작해서 확인하면 알아서 정지
        let value = arr.pop();                  // 맨 뒷 값을 빼서
        arr.unshift(value);                     // 맨 앞에 넣기
        if (arr.join('') === B) return i;       // arr를 문자열로 변환했을 때 B와 일치하면 민 횟수(i) 반환
    } 
     
    return -1;                                  // 문자열 길이만큼 반복해도 일치하지 않으면 -1 반환
}
