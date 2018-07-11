function multiplyDivideNumber(args) {
    let arr = args.map(x => Number(x));
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] <= arr[i + 1]) {
            return arr[i] * arr[i + 1];
        } else {
            return arr[i] / arr[i + 1];
        }
    }
}

console.log(multiplyDivideNumber(['2', '3']));
console.log(multiplyDivideNumber(['3', '2']));
console.log(multiplyDivideNumber(['13', '13']));