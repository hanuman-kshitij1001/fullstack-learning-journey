// Rest : oposite of Spread
// Allows a function to take an indefinite number of arguments and bundle them in an array

function sum(...args) { //arguments ye hamara ek collection hai ;
return args.reduce((add, el) => add + el);
}