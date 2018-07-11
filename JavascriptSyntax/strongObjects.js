function solve(args) {
    let students = [];
    for (let line of args) {
        let tokens = line.split(' -> ');
        let name = tokens[0];
        let age = tokens[1];
        let grade = tokens[2];
        students.push({Name: name, Age: age, Grade: grade})
    }
    for(const student of students) {
        console.log(`Name: ${student.Name}`);
        console.log(`Age: ${student.Age}`);
        console.log(`Grade: ${student.Grade}`);
    }
}

solve([
    'Pesho -> 13 -> 6.00',
    'Ivan -> 12 -> 5.57',
    'Toni -> 13 -> 4.90',
]);