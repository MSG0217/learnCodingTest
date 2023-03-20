function solution(my_string) {
    return my_string
            .split('')      //매개변수 배열로 변환
            .filter(item => !['a', 'e', 'i', 'o', 'u'].includes(item))      //비교하면서 모음만 빼기
            .join('');       // 배열을 하나의 문자열로 변환하여 리턴
}
