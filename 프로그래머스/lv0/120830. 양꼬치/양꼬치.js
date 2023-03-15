function solution(n, k) {
    // 양꼬치 1인분 가격 
    const priceOfSheep = 12000;
    // 음료수 가격
    const priceOfDrink = 2000;
    
    // 서비스 음료 개수
    let service = Math.trunc(n / 10);
    
    return priceOfSheep*n + priceOfDrink*(k-service)
       
}

// 12,000 * n + 2000*k 는 할인 전 가격
// 10인분당 k에 1씩 빼기