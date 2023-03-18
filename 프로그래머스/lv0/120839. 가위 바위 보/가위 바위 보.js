function solution(rsp) {
    const AnswerArr = [];       // 정답위한 빈 배열 선언
    
    // rep 문자열을 글자 하나씩 배열로 전환
    const rspArr = rsp.split('');
    // rspArr를 순회하며 2이면 0, 0이면 5, 5이면 2를 새배열에 푸시
    for (let i = 0; i < rspArr.length; i++) {
        if (rspArr[i] === '2') AnswerArr.push(0);
          else if (rspArr[i] === '0') AnswerArr.push(5);
          else AnswerArr.push(2);
    }
    // 새 배열을 공백없이 하나의 문자열로 리턴
    return AnswerArr.join('');    
}


// rsp 문자열을 한 글자씩 배열로 바꾸고
// 인덱스가 2이면 0, 0이면 5, 5이면 2를 새 배열에 푸시
// 새 배열을 공백없이 하나의 문자열로 리턴