function solution(sides) {
    sides.sort((a, b) => a - b);        // 오름차순 정렬
    
    if (sides[0] + sides[1] > sides[2]) return 1;
      else return 2;  
}

// 오름차순으로 정렬하고
// [0]+[1] > [2] 이면 1 아니면 2