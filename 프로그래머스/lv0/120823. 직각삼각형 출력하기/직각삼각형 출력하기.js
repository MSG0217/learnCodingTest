const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    for (let i = 1; i <= line; i++ ) {
        let floor = "";
        for (let j = 1; j <=i; j++) {
            floor += '*';   
        }
        input.push(floor);
    }
    console.log(input.join('\n'));
}).on('close', function () {

});