function solution(array) {
    var answer = 0;
    
    array.sort((a, b) => a - b);
    
    answer = array[(array.length-1)/2];
    
    return answer;
    }
    


// 1. 배열을 오름차순으로 정렬
// 오름차순으로 어떻게 정렬하지?!
// 고차함수를 쓰고 싶진 않는데


// 2. (array - 1)/2 번째 인덱스를 출력





// 라매개발자 ver.















