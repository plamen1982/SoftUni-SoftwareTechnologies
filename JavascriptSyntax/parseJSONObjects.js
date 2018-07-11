function solution(lines) {
    let people = [];
    for (let line of lines) {
        people.push(JSON.parse(line));
    }

    for(let person of people) {
        console.log(`Name: ${person.name}`);
        console.log(`Age: ${person.age}`);
        console.log(`Date: ${person.date}`);
    }
}
