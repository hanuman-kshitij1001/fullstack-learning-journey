// Practice Qs
// Qs. For the given start state of an array, change it to final form using methods.

// start: ['january', 'july', 'march', 'august']
// final: ['july', 'june', 'march', 'august']


let start = ['january', 'july', 'march', 'august'];
// start.shift();
// console.log(start);
console.log(start);

start.shift();
start.shift();
console.log(start);

start.unshift("June");
start.unshift("July");
console.log(start);