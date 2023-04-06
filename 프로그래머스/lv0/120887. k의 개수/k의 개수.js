function solution(i, j, k) {
    // i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return
    let number = '';
    for (let q = i; q <= j; q++) {
        number += q;
    }
    const withoutK = number.split(k);
    return withoutK.length - 1;
}