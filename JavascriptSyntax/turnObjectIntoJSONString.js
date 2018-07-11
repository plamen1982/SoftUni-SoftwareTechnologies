function solve(arr) {
    let people = {};
    for (let line of arr) {
        let spl = line.split(' -> ');
        if (!isNaN(Number(spl[1])))
            spl[1] = Number(spl[1]);
        people[spl[0]] = spl[1];
    }
    return JSON.stringify(people);
}