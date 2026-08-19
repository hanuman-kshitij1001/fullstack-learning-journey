// Call  Stack 

// Basicaly Ye Hame Sare Language Bhi dikhta Hai Ab Js Me samjhte hai Ese kya hai Ye

// Jab Bhi Js Me Fuction / function ko call kiya jata hai to us time JS me ek Call Stack Banta Hai 
// CallStack Me Hamre Do Words Hote hai 
// Call: Jab haam Kisis Function ko Do prantihis Laga Ke Excute karte to use call bolte hai 


function hello() {
    console,log("Hello");
}
hello(); // yahi To hai call bhai Dekha na Theek hai 



//2- // Stack:  Stack is Data Structure last in first out 
//But Why We can Call It Stack call : 

function hello() {
    console.log("inside hello fnx");
    console.log("hello");
}
function demo() {
    console.log("calling hello fnx");
    hello();
}
console.log("Calling demo fnx");
demo();
console.log("Done, Bye!");



// out put 

//1- Calling demo fnx
//2- calling hello fnx
//3- inside hello fnx
//4- hello
//5- Done, Bye!


// Ab Yaha pe samjhne wali baat kya hai ki ye jo calling hai hamri sari wo sab stack ke andhr store hoti hai 