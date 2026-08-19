//1-:: Every:
// Returns true if every element of array gives true for some function. Else returns false.
// arr.every(some function definition or name);

[1,2,3,4,5].every(
    (el)=>
el%2==0    // return false
)
//false
//every wala ye jo methode ha ye true tabhi return karta ai jab sare ke sare element ke liye liye true ata hai samjha na 

[4,2,6,4,10].every(   // dekh bhai ye function hamara matlb arra ke pass sare even number hai to ye true return karenga 
    (el)=>
el%2==0
)
// true

//2-::Some
// Returns true if some elements of array give true for some function. Else returns false.

// arr.some (some function definition or name);
// [1, 2, 3, 4].some( (el) (el%2 == 0));
// true
// [1, 3].some( (el) => (el%2 == 0));
// false