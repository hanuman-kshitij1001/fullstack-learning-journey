// truthy & falsy:

// Everything in JS is true or false (in boolean context).
// This doesn't mean their value itself is false or true, but they are treated as false or true if taken in boolean context.

// Falsy values:
// Java ke Andhar Bydefault en sab Ki false value hoi hai  baki sab ki true Abe Niche wale ka bat kar raha hun Ab Ye Maat bhul jana ki kon kaise kiski 
// false, 0, -0, On(BigInt value), "" (empty string), null, undefined, NaN

// Truthy values:
// Everything else

   
if (true) {
    console.log("it has true value");
} 
else {
    console.log("it has false value");

}



// Boolean Me Truly value 1 hoti hai  but  False Value 0 Hoti hai
if (0) {
    console.log("it has true value");
} 
else {
    console.log("it has false value");

}


// Boolean Me Truly value 1 hoti hai  but  False Value 0 Hoti hai
if (1) {
    console.log("it has true value");
} 
else {
    console.log("it has false value");

}


//truthy & falsy  : Ye True Aur False bane huye hai JS me sari value Boolean ke associate Hoti hai Ya To True Ya Fhir False

//Everything in JS is true or false (in boolean context).

//This doesn't mean their value itself is false or true, but they are treated as false or true if taken in boolean context.


// Falsy values:
// false, 0, -0, On(BigInt value), " "(empty string), null, undefined, NaN
// Yadh Rakhna Ki JS me Insab ki False Value Hoti hai aur Jitne bhi aprt from this Hai Unsab ki True VAlue Value Hoti hai 

//  ^ 
// Truthy values:
// Everything else


//Ex:1
if (true) {
    console.log("it has true value");
}
else {
    console.log("it has false value");
}

//Ex:2
if (false) {
    console.log("it has true value");
}
else {
    console.log("it has false value");
}

//Ex:3
if (0) {
    console.log("it has true value");
}
else {
    console.log("it has false value");
}

//Ex:4
let string ="";

if(string){
    console.log("String is Empty: ");
}
else{
    console.log("String is Not Empty: ")
}

//Ex:5
let num=0;
if(num){
    console.log("num is Not equal to zero")
}else{
    console.log("nums is Eeqaul to zero")
}