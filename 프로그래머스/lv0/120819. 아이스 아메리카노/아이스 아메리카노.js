function solution(money) {
    var answer = [];
    const PRICE = 5500;
    let cupsOfAmericano = Math.trunc(money/PRICE);
    let change = money%PRICE;
    return answer = [cupsOfAmericano, change];
}


// 1. money/priceOfAmericano 의 정수 부분은 배열[0], 나머지는 배열[1]