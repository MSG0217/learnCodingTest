function solution(cipher, code) {
    let answer = "";
    
    for (let i = code-1; i < cipher.length; i += code) {
        answer += [...cipher].splice(i,1);      
    }
    
    return answer;
}


// 원본배열을 변경하지 않고 code번째 인덱스들만 뽑아내야한다.
// splice를 쓰되 스프레드문법을 쓰면 될듯!?