function solution(n) {
    for (let i = 1; i < n; i++) {
        if (n / i > 1) {
            if ( n % i === 1) return i;
              else continue;
        }
    }
}

// n % i === 1
// n / i > 1