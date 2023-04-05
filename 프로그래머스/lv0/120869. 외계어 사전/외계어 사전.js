function solution(spell, dic) {
    // dic 배열 순회
    for (let i = 0; i < dic.length; i++) {
        // dic 배열 안에 있는 spell.value 갯수 생성 및 초기화
        let spellsInDic = 0;        
        // dic[i]와 함께 spell 배열 순회
        for (let j = 0; j < spell.length; j++) {
            // dic[i]안에 spell[j]가 있는 경우 spellsInDic 개수 추가
            if (dic[i].indexOf(spell[j]) !== -1) spellsInDic++;        
        }
        // spellsInDic = dic[i]안에 spell배열 값들의 갯수
        // 한 번만 사용했으면 1을 반환하고 끝!
        if(spellsInDic === spell.length) return 1;
            else continue;
    }
    // 반복문 안에 2를 반환하면 끝까지 배열을 순회하지 않으므로 반복문 끝나고 2 반환
    return 2;
}
