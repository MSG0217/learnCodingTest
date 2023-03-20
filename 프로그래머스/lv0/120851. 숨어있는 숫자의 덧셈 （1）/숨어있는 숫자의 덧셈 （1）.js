function solution(my_string) {          
    return my_string.match(/[0-9]/g)    // 정규표현식으로 숫자만 찾아 배열로 바꾸고
                    .reduce((acc, cur) => acc + Number(cur), 0); // 인덱스를 숫자타입으로 바꾸고 누적산하기
}


