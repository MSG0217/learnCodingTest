function solution(common) {
    const d = common[1] - common[0];
    const r = common[1] / common[0];
    
    if (d === common[2] - common[1]) {          // 등차수열
        return common[common.length - 1] + d;
    } else if (r === common[2] / common[1]) {   // 등비수열
        return common[common.length - 1] * r;
    }
}

// 1. 등차수열인지
// 1-1. [1] - [0] === [2] - [1]
// 2-2. return [.length-1]+d
// 2. 등비수열인지
// 2-1. [1]/[0] === [2]/[1]
// 2-2. return [.length-1]*r