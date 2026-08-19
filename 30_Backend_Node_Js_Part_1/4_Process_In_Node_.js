//Process:

//process: This object provides information about, and control over, the current Node.js process.

//process.argv: returns an array containing the command-line arguments passed when the Node.js process was launched.


// let n = 5;

// for (let i = 0; 1 < n; i++) {
// console.log("hello, ", i);
// }

// console.log("bye!");

let args = process.argv;

for (let i = 2 ;i < args.length; i++) {
console.log("hello to ", args[i]);
}