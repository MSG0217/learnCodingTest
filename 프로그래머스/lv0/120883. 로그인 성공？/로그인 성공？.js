function solution(id_pw, db) {
    // 아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
    // 로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 
    // 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.
    for (let i = 0; i < db.length; i++) {
        if (id_pw[0] === db[i][0]) {
            return id_pw[1] === db[i][1] ? 'login' : 'wrong pw'
        }
    } 
    return 'fail';   
}