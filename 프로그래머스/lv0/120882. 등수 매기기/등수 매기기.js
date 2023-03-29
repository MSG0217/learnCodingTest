function solution(score) {
    const avgArr = [];                              // 평균배열
    const rankingArr = [];                          // 등수배열
    for (let i = 0; i < score.length; i++) {        // score 배열을 순회하면서
        let sum = 0
        for (let j = 0; j < 2; j++) {
            sum += score[i][j];                     // score i번째 인덱스의 값들을 더해서
        }
        avgArr[i] = sum/2;                          // 평균을 낸 값을 avgArr[i]에 할당
    }
    
    for(let i = 0; i < avgArr.length; i++) {        // 평균배열을 순회하면서
        let count = 1;                              // 기본 등수는 1등!
        for(let j = 0; j < avgArr.length; j++) {    
            if(avgArr[i] < avgArr[j]) { count++; }  // avgArr[i]보다 큰 값이 있으면 등수가 내려감
        }
        rankingArr[i] = count;                      // 최종 등수를 등수배열의 인덱스에 할당
    }
    return rankingArr;                              // 등수배열을 반환
}


// score배열을 순회하면서
// value인 배열의 값들의 평균을 구한 뒤
// 그 평균들을 비교하여서
// 등수를 나누어야 함(동점은 같은 순위. 윗 순위에 동점자가 있다면 그 수만큼 뒤로  = 나보다 큰 수가 몇 명 있느냐!?)