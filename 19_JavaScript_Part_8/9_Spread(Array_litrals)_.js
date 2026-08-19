// Spread
// with Array Literals


let arr = [1, 2, 3, 4, 5];
let newArr = [...arr];
console.log(newArr);
//(5) [1, 2, 3, 4, 5]

let chars = [..."hello"];
console.log(chars);
//(5) ['h', 'e', '', '', ' 'o']




let arr1 = [1, 2, 3, 4, 5];
let newArr1 = [...arr];
let chars1 = [..."hello"];

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let nums = [...odd,...even];