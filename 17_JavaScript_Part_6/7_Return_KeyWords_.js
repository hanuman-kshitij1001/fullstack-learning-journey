// Return : Yad rakha Jaise apne return use kiya wo hamesah wahi ruk jata hai waha se agge nahi jata hai kabi bhi nahi samjha na re 

// return keyword is used to return some value from the function.

// input    ==   Function (does some work)     ==    output

function funcName (arg1, arg2) {
//do something
return val;
}

function sum(a,b){
    let result = a+b;
    return result;
}
sum(10,20);
function sum(a,b){
    
    return a+b;
}
sum(10,20);
sum(sum(1,2),3)  // pahele hamne pahela sum calcultate kiya aur fhir hame usme 3 add akeke dusra sum calculete kiye ye hai sum of three number samja gaya na bhai

let arr = [1,2,3,4,5];
arr.slice(2,4);
let part = arr.slice(2,4);  // ye sare fuction example hai return karen ke khudh hi dekh lo return hi to kar raha hai na bhai

function isAdult(age) {
if(age >= 18) 
return "adult";


else {

return "not adult";
}

console.log("bye bye");
}