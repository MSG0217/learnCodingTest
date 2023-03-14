// function solution(array) {
//     var answer = 0;
    
//     array.sort((a, b) => a - b);
    
//     answer = array[(array.length-1)/2];
    
//     return answer;
//     }
    


// 1. 배열을 오름차순으로 정렬
// 오름차순으로 어떻게 정렬하지?!
// 고차함수를 쓰고 싶진 않는데


// 2. (array - 1)/2 번째 인덱스를 출력





// 라매개발자 ver.
function solution(array) {   
    // // 제한사항에 의해 주어질 수 있는 수의 최댓값보다 큰 값
    // let minNumber = 1000;
    // // arry(3)[9, -1, 0]
    // if(minNumber > array[0]) {  // true
    //     minNumber = array[0];   // minNumber = 9
    // }
    // if(minNumber > array[1]) {  // true
    //     minNumber = array[1];   // minNumber = -1
    // }
    // if(minNumber > array[2]) {  // false
    //     minNumber = array[2];   // 실행안함
    // }
    // ... // too much!! 개선하고 싶다!!! 죄를 지은 느낌을 받아야 합니다
    // // minNumber = -1
    

    // 개선ver. (이해 안되는 게 당연. 익숙해질 것!)

    // 비효율적이지만 스스로 짜낼 수 있다면 코딩 실력이 기하급수적으로 오를 것!
     
    let arrayCnt = 0;
    let newArray = [];
    // 1-4 만약 원래배열 길이만큼 반복했으면 끝낸다. 아니면 1-1로 돌아간다.
    while(arrayCnt < array.length) {
        let minNumber = 1000;
        // 1-1 배열 중 가장 작은 값을 찾는다
        let cnt = 0; 
        while(cnt < array.length) {
            if(minNumber > array[cnt]) {  
                minNumber = array[cnt];
            }
            cnt = cnt + 1
        }
        // minNumber <- 최솟값
        // 1-2 찾으면 새 배열에 넣는다
        newArray.push(minNumber);

        let cnt2 = 0;
        while (cnt2 < array.length) {
            // 1-3 원래 배열에 찾은 값은 지운다.
            if(minNumber === array[cnt2]) {
                // 제한사항에 의해 절대 코드흐름에 걸리지 않을 큰 수를 설정
                array[cnt2] = 1000; 
                // 반복문을 끝내는 키워드
                break;
            }
            cnt2 = cnt2 + 1;
         }
                
        arrayCnt = arrayCnt + 1;
    }
    
    // 2 가운데 값 꺼내기
    
    
    return newArray[Math.floor(array.length/2)];
}



// 일단 무식하게 만든 다음 예쁘게 만들면 된다(초보자 입장)
// 코드를 짜 놓고 내가 컴퓨터가 되었다고 생각하고 코드를 돌려보기
// JavaScript에서 지원하는 기능을 처음부터 사용하면 코딩실력이 늘지 않으므로 스스로 생각해보자!

// 1 정렬
// 1-1 배열 중 가장 작은 값을 찾는다
// 1-2 찾으면 새 배열에 넣는다
// 1-3 원래 배열에 찾은 값은 지운다.
// 1-4 만약 원래배열 길이만큼 반복했으면 끝낸다. 아니면 1-1로 돌아간다.

// 2 가운데 값 꺼내기
// 배열 길이가 5
// array[2]
// 배열 길이가 3
// array[1]
// 배열 길이가 n
// array[(n-1)/2]
// array(Math.floor(n/2))













