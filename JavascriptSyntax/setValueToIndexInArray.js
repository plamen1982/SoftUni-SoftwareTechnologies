function solve(args) {
    let lengthOfArray = Number(args[0]);
    let arr = [];
    arr.length = lengthOfArray;
    arr.fill(0, 0, lengthOfArray);
    for (let i = 1; i < args.length; i++) {
        let keyValue = args[i].split(' - ');
        let key = keyValue[0];
        let value = keyValue[1];
        arr[key] = value;
    }
    for (let i = 0; i < lengthOfArray; i++) {
        console.log(arr[i]);
    }
}

//solve(['3', '0 - 5', '1 - 6', '2 - 7']);
solve(['2',
    '0 - 5',
    '0 - 6',
    '0 - 7',
]);