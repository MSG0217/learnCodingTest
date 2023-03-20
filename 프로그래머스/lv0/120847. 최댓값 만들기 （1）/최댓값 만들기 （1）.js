function solution(numbers) {
    const Arrlength = numbers.length;    // 배열길이
    let ascArr = numbers.sort((a,b) => a - b)
    return ascArr[Arrlength-1]*ascArr[Arrlength-2];
}

// 오름차순 정렬.맨 뒷 2자리 곱하기
// const Arrlength = numbers.length;    // 배열길이
// let ascArr = numbers.sort((a,b) => a - b)
// return ascArr[Arrlength-1]*ascArr[Arrlength-2];