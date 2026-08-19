// Scope : // ye hame ye batata hai ki kon se variabel ko kaha use kiya ja  sakta hai aur variable ko kaha use kiya nahi ja sakta hai samjha na re 
// Def:       Scope determines the accessibility of variables, objects, and functions from different parts of the code.

// Kitne tarike ke baat karne wale hai wo niche likha hai 
// Function
// Block
// Lexical
// Global Scope

// 1: Function Scope
//    Variables defined inside a function are not accessible (visible) from outside the function.

function calSum(a,b){
    let sum = a+b;
    console.log(sum); // wahi niche wali cheez yaha kare to excess able hai but waha nahi 
}
console.log(sum);  // ap yaha kuch dkho sum yaha excess hi nahi kiya ja sakta hai jab run karoge to bolege ki sum is not define samjha bhai 
 
// 2: Block Scope:
//    Variables declared inside a {) block cannot be accessed from outside the block.

{
    let a = 25;
}
console.log(a); // Erroe : A is not define


// 3:Lexical Scope
//   A variable defined outside a function can be accessible inside another function defined after the variable declaration.
//   The opposite is NOT true.



function outerFunc() {
let x = 5
let y = 6
function innerFunc() {
    console.log(x);
    }
    innerFunc();
}




//4: Global Scope
let sum = 54;   // Global Scope
function calSum(a,b){
    let sum = a+b;
    console.log(sum); // Function scope
}
console.log(sum); 