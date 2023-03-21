function solution(dots) {
    let width = 0;          // 가로길이
    let height = 0;         // 세로길이
    for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
            if (dots[i][0] - dots[j][0] > 0) width = dots[i][0] - dots[j][0];
            if (dots[i][1] - dots[j][1] > 0) height = dots[i][1] - dots[j][1];
        }
    }
    return width * height;
}


// 직사각형 = 가로*세로
// 가로 = 