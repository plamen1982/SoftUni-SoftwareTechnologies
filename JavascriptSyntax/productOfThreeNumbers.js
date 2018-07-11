function solve(args) {
    let arr = args.map(x => Number(x));
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            count++;
        }
    }
    if(count % 2 == 0) {
        return 'Positive';
    } else {
        return 'Negative';
    }
}

solve(['2', '3', '-3']);