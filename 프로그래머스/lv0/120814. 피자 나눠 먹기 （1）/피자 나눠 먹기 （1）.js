function solution(n) {
    if (n%7 === 0) {return Math.trunc(n/7);}
        else {return Math.trunc(n/7) + 1;}
}


// n%7 === 0 이면 result = Math.trunc(n/7);
// n%7 !== 0 이면 result = Math.trunc(n/7) + 1;