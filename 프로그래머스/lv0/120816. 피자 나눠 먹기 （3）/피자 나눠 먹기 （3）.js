function solution(slice, n) {
    let pizza = 1;
    // 조각 수 * 피자 판수가 인원 수보다 적으면 while문 반복하여 피자 수 증가
    while (slice*pizza < n) {
        pizza++;
    }
    // 조각 수 * 피자 판수가 인원 수보다 크면 피자 판수 리턴
    return pizza;
}

// slice*answer/n >= 1 