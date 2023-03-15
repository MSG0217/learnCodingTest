function solution(slice, n) {
    let pizza = 1;
    while (slice*pizza/n < 1) {
        pizza++;
    }
    return pizza;
}

// slice*answer/n >= 1 