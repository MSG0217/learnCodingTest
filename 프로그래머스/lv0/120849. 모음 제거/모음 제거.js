function solution(my_string) {
    //모음 배열 
    const gather = ['a', 'e', 'i', 'o', 'u'];
    //매개변수 배열로 변환
    let StringArr = my_string.split('');
    //비교하면서 모음만 빼기 (how to?)
    StringArr = StringArr.filter(item => !gather.includes(item))
    // 배열을 하나의 문자열로 변환하여 리턴
    return StringArr.join('');
}
