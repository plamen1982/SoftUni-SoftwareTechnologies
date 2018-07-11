function solve(args) {
    let arr = [];

    for (let i = 0; i < args.length; i++) {
        let tokens = args[i].split(' ');
        let command = tokens[0];
        let index = Number(tokens[1]);
        if(command === 'add') {
            arr.push(index)
        } else if(command === 'remove'){
            arr.splice(index, 1);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

//solve(['add 3', 'add 5', 'add 7']);
solve(['add 3', 'add 5', 'remove 1', 'add 7']);