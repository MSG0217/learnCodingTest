function solution(dot) {
    let answer = 0;
    if ( dot[0] > 0 ) { dot[1] > 0 ? answer = 1 : answer = 4}
      else { dot[1] > 0 ? answer = 2 : answer = 3 }
    
    return answer;
}

// x > 0일때 y>0 ? return 1; : return 4;
// x < 0 일때 y>0 ? return 2; : return 3;