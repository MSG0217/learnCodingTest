function solution(keyinput, board) {
    const result = [0, 0];
    keyinput.map((v) => { 
        switch(v) {
         case 'up':
             if (result[1] < Math.trunc(board[1]/2)) {
                   result[1]++;
              };
            break;
         case 'down':
             if ( result[1] > Math.trunc(-board[1]/2)) {
                   result[1]--;
              };
                break;
         case 'left':
             if ( result[0] > Math.trunc(-board[0]/2)) {
                   result[0]--;
              };
                break;
         case 'right':
             if ( result[0] < Math.trunc(board[0]/2)) {
                   result[0]++;
              };
                break;
         };
    });
    return result;
}