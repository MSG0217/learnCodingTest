function solution(age) {
    const answerArr = [];
    // 1 문자열 0~9로 이루어진 배열, 문자열 a~j로 이루어진 배열 순서 맞춰서 선언
    const NUMBER = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    
    // 2 age를 문자열로 치환 후 쪼개 배열로 변환
    const ageArr = String(age).split('');
    // 3 age[i]와 숫자배열[j]가 같으면 같은 순서인 알파벳배열[j]를 정답배열로 푸시
    for(let i = 0; i < ageArr.length; i++) {
        for(let j = 0; j < NUMBER.length; j++) {
            if (ageArr[i] === NUMBER[j]) {
                answerArr.push(ALPHABET[j]);
            }
        }
    }
    // 4 정답배열을 하나의 문자열로 합쳐 리턴
    return answerArr.join('');
    
}


// 1 문자열 0~9로 이루어진 배열, 문자열 a~j로 이루어진 배열 순서 맞춰서 선언
// 2 age를 문자열로 치환 후 쪼개 배열로 변환
// 3 age[i]와 숫자배열[j]가 같으면 같은 순서인 알파벳배열[j]를 정답배열로 푸시
// 4 정답배열을 하나의 문자열로 합쳐 리턴