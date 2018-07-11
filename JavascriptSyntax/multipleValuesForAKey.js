function solve(args) {
    let obj = {};
    for (let i = 0; i < args.length - 1; i++) {
        let currentValue = args[i].split(/\s/);
        let key = currentValue[0];
        let value = currentValue[1];
        if (!obj[key]) {
            obj[key] = [];
        }
        obj[key].push(value);
    }
    let lastArrayIndex = args.length - 1;
    let lastLineKey = args[lastArrayIndex];
    let winner = obj[lastLineKey];
    if (winner) {
        for (let i = 0; i < winner.length; i++) {
            console.log(winner[i]);
        }
    } else {
        console.log("None");
    }
let arr = [];
    //splice()
    //fill()
    //map()
    //forEach()
    //concat()
    //entries()
    arr.entries()
}
//
// solve([
//     'key value',
//     'key eulav',
//     'test tset',
//     'key'
// ]);



solve([
    '3 test',
    '3 test1',
    '4 test2',
    '4 test3',
    '4 test5',
    '4'
]);



// solve([
//     '3 bla',
//     '3 alb',
//     '2'
// ]);
