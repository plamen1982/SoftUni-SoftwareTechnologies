function solve(args) {
let arr = args.map(x => Number(x)).reverse();
    for (let i = 0; i < args.length; i++) {
        console.log(arr[i]);
    }
}

solve(['10', '15', '20']);