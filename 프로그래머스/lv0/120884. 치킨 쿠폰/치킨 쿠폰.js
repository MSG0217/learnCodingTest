function solution(chicken) {
    let answer = 0;
    while (chicken >= 10) {                         // 0. 주문치킨 수가 10이 넘어야 서비스 가능하므로 조건설정
        let service = Math.floor(chicken/10);       // 1. 주문한 치킨으로 받을 수 있는 서비스 치킨
        let remainForCoupon = chicken%10;           // 1-1. 서비스 받고 남은 치킨주문 수
        chicken = remainForCoupon + service;        // 1-2. 추가 서비스 치킨을 위한 치킨 주문수(재할당)
        answer += service                           // 1-3. 최종 서비스 치킨 수 = 서비스치킨의 합
    }
    return answer;
}
