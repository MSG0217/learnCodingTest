function solution(hp) {
    
    let answer = 0;     // 몫 변수 
    
    // 5로 나누기
    let generalAnt = Math.trunc(hp / 5);     // 5로 나눈 몫(필요한 장군개미 병력)
    let rest = hp % 5;                  // 장군개미 몫을 뺀 나머지
        
    // 3으로 나누기
    let soldierAnt = Math.trunc(rest / 3); // 장군개미 몫을 뺀 나머지/3(병정개미 병력)
    let workerAnt = rest % 3;       // 일개미 몫           
    
    // 장군개미 + 병정개미 + 일개미
    answer = generalAnt + soldierAnt + workerAnt;
    
    return answer;
}


// 0 장군개미(5) 병정개미(3) 일개미(1)
// 1 5로 나눌 수 있으면(hp >= 5)
// 1-1 5로 나눌수 있을만큼 나누고 몫의 정수분을 더해놓고
// 1-1-1 5로나눈 나머지를 3으로 나누고 몫의 정수분을 더하고 나머지도 더하면!

// 2 5로 못 나누면 
// 2-1 3으로 나눌 수 있을만큼 나누고 몫의 정수분을 더해놓고 나머지도 더하기
// 2-2 3으로 못 나누면 그 수를 반환

