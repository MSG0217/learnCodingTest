function solution(my_string) {
    // my_string 문자열을 글자 단위로 쪼개 배열 형성
    const array = my_string.split('');
    // 배열 순서를 뒤집을 새로운 배열 선언
    const reverseArr = [];
    // 기존 배열을 0번 인덱스부터 뒤집힌 배열에 unshift로 넣기
    for(let i = 0; i < array.length; i++) {
        reverseArr.unshift(array[i]);
    }
    // 뒤집힌 배열 글자를 붙여 문자열로 리턴
    return reverseArr.join('');
}