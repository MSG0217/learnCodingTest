function solution(numbers) {
    const multiplyArr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            multiplyArr.push(numbers[i]*numbers[j]);
        }
    }
    return Math.max(...multiplyArr);    
}
