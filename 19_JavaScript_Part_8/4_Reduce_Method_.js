
// Reduce Methode:
// Reduces the array to a single value
// arr.reduce(reducer function with 2 variables for" (accumulator, element)  ");

[1,2,3,4].reduce( (result, el) => (result+el));

//output:  10 

//Note: swal a raha honga bhai yaha pe haam kar kya rahe hai to jawab hai ki yaha pe haam array ke elemets ka sum calulate kar rahe hai bhai
let num = [1,2,3,4,5];
let finalVal = nums.reduce((res,el) => (rel,el));
console.log(finalVal);

// yaha har step pe  sum dekh sakte hai 
let num2 = [1,2,3,4,5];
let finalVal2 = nums.reduce((res,el) =>
    {
        console.log(res);
        return rel+el;
    } );
console.log(finalVal);