function solution(letter) {
    // morse 객체 설정
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }      
    // 인수를 공백(' ')을 기준으로 나눠 배열로 할당
    const letterArr = letter.split(' ');
    // 알파벳을 받을 새 배열 선언
    const AlphabetArr = [];
    // letterArr[0] 부터 끝까지 순회하며
    for (let i = 0; i < letterArr.length; i++) {
        // letterArr[i]가 morse객체의 키와 같다면
        for (const MorseKey in morse) {
            // 알파벳배열에 morse 객체의 MorseKey의 프로퍼티 값을 푸시
            if(letterArr[i] === MorseKey) AlphabetArr.push(morse[MorseKey]);
        }
    }
    // 알파벳 배열을 공백없이 하나의 문자열로 합해서 리턴
    return AlphabetArr.join('');
    
}

// letter를 공백을 기준으로 나눠 배열로 바꾸고
// 인덱스별로 일치하는 알파펫을 찾아 새 배열에 넣고
// 새 배열을 공백없이 하나의 문자열로 바꾸면!