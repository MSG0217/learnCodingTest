// function solution(array) {
//     let answer = 0;
//     let value = 0;
//     let maxValue = 0;
//     // array를 복사한 배열 valueArr 생성
//     const valueArr = array;

//     for (let i = 0; i < array.length-1; i++) {
//         for (let j = i+1; j < array.length; j++) {
//             if (array[i] === array[j]) {
//                 // 중복갯수값 더하기
//                 value = value + 1;
//                 // 중복된 값은 배열에서 중복될 수 없는 값으로 바꾸기
//                 array[j] = 1000;
//                 // valueArr[j]값 0으로 바꾸기
//                 valueArr.splice(j, 0, 0);
//             }
//             // i번째 인덱스와 그 뒷 인덱스들을 비교 후 i인덱스 중복갯수 값을 valueArr[i]에 넣기
//             valueArr.splice(i, 0, value);
//             // value값 초기화
//             value = 0;
//         }        
//     }
//     // valueArr 값끼리 비교해서 최댓값 구하기
//     for (let i = 0; i < valueArr.length-1; i++) {
//         for(let j = i+1; j < valueArr.length; j++) {
//             if (valueArr[i] > valueArr[j]) {
//                 maxValue = valueArr[i];
//             } else if (valueArr[i] < valueArr[j]) {
//                 maxValue = valueArr[j];
//             } else if (valueArr[i] === valueArr[j]) { 
//                 // 같은 값이 최댓값이면 있다면 -1
//                 if(valueArr[i] > maxValue) maxValue = -1;
//             }    
//         }
//     }
       
//     return maxValue;
// }

// 1 중복값 찾아서 갯수 세기
// 1-1 같은 값은 배열에서 1,000으로 치환(제한사항 밖의 값으로 중복될 수 없음)
// 2 갯수 중 최댓값 찾아 인덱스 리턴하기





//라매 개발자 ver.

function solution(array) {
    // 1. 오름차순으로 정렬한 배열 생성
    let sortedArray = array.sort((a,b) => a-b);
    let cnt = 0;
    let mode = 0;           // 최빈값
    let modeRepeatCnt = 0; // 최빈값이 될 때 몇번 반복해서 된 건지
    let repeatCnt = 0 ;     // 현재 똑같은 숫자가 몇번 등장했는지
    let beforeNumber = 0;   // 지금 보고있는 숫자의 이전 숫자
    let isDupMode = false;  // 최빈값 중복여부
    // 2. 앞에서부터 차례대로 원소를 확인하며 갯수를 센다.
    while(cnt < array.length) {
        if (beforeNumber !== array[cnt]) {
            repeatCnt = 1;
        } else {
            repeatCnt = repeatCnt + 1;
        }
        
        if (repeatCnt === modeRepeatCnt) {
            if(mode !== array[cnt]) {
               isDupMode = true; 
            }
        }
        
        if (repeatCnt > modeRepeatCnt) {
            // 3. 최빈값을 그때그때 기록한다.
            mode = array[cnt];
            modeRepeatCnt = repeatCnt;
            isDupMode = false; 
        }
        beforeNumber = array[cnt];        
        cnt = cnt + 1;
    }
    if (isDupMode) return -1;
    return mode;
}


// 1. 오름차순으로 정렬한 배열 생성
// 2. 앞에서부터 차례대로 원소를 확인하며 갯수를 센다.
// 3. 최빈값을 그때그때 기록한다.
// 3-1. 반쪽짜리 코드라도 짜놓고 이후 고민하는 게 낫다.




