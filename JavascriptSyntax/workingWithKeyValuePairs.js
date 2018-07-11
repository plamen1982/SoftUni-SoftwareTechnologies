function solve(args) {
    let obj={};
    let length = args.length - 1;
    let keyToPrint = args[length];
    for (let i = 0; i < length; i++) {
        let tokens = args[i].split(' ');
        let key = tokens[0];
        let value = tokens[1];
        obj[key] = value;
    }
    if(obj[keyToPrint]) {
        console.log(obj[keyToPrint]);
    } else {
        console.log('None');
    }
}
/*
solve([
    'key value',
    'key eulav',
    'test tset',
    'key'
]);

*/
/*
solve([
    '3 test',
    '3 test1',
    '4 test2',
    '4 test3',
    '4 test5',
    '4'
]);
*/

solve([
    '3 bla',
    '3 alb',
    '2'
]);