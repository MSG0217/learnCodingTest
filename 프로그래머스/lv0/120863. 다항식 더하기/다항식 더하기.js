
function solution(polynomial) {
    const splited = polynomial.split(' + ');                        // ' + '을 기준으로 나누면 정수항과 x항을 개별로 쪼갤 수 있고
   
    const xArr = splited.filter(v => v.includes('x'));              // ['3x', 'x']  ['x', 'x', 'x']
    const numArr = splited.filter(v => +(v));                       // ['7']        []
    
    // 일차 항부터!
    let countX = 0;
    for(let i = 0; i < xArr.length; i++) {
        // 'x'와 앞의 숫자를 분리하여 앞의 숫자만 더해야 한다.
        // (예외) 'x'인 경우 앞의 숫자 1이 없으므로 예외처리
        if (xArr[i] === 'x') countX++;                              // countX에 1 더하기
          else countX += Number(xArr[i].split('x')[0]);             // 'x'로 나눈 배열의 0번째 인덱스 타입을 숫자로 바꾼후 더하기
    }
    // (예외) countX가 없으면 '' 빈 문자열로 바꾸기 
    countX = (countX) ? countX: '';           
    
    // 상수항!
    let constant = 0;
    for (let i = 0; i < numArr.length; i++) {
        // numArr.value를 숫자타입으로 바꾼 후 더하기
        constant += Number(numArr[i]);
    }
    // (예외) 상수항이 없는 []인 경우 ''빈 문자열로 바꾸기 -> 0도 출력되면 안 됨
    constant = (constant) ? constant : '';
    
    console.log(countX);
    console.log(constant);
    
    // 예외처리
    if (countX && !constant) {                              // countX 값만 있는 경우
        if (countX === 1) return `x`;                       // (예외) 계수 1은 생략
          else return `${countX}x`;
        }   
      else if (!countX && constant) return `${constant}`;   // constant 값만 있는 경우
      else if (!countX && !constant) return ;               // countX와 constant 둘 다 없는 경우
    // 정석
    
      else {                                                // countX와 constant 둘 다 있는 경우
          if (countX === 1) return `x + ${constant}`;       // (예외) 계수 1은 생략
            else return `${countX}x + ${constant}`;
      }               
}
    

    // 여기서 막혀서 포기했습니다...
    
    // 여러분의 코드를 보니
    // 포기하지 않아야 답을 구할 수 있다는 것을 깨달았습니다.
    // 오늘 포기하지 않고 답을 구해내보겠습니다.