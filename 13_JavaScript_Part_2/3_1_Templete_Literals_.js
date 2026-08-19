// Template Literals  :  They are used to add embedded expressions in a string.

let a = 5
let b = 10
console.log('Your pay $(a + b) rupees');  //( ` = back tick) 

// console.log("Price is", a+b, "rupees");

let pencilePrice = 10;
let erasorPrice = 5 ;
console.log("The total price is: " +pencilePrice + erasorPrice," Rupees. ");
let output =`The Total Price Is : ${pencilePrice}  Rupees`; // esse kya hota ha ki cheezo ko bahot concatinate nahi karna padta hai bhai 
console.log(output);
console.log(`The Total Price Is : ${pencilePrice}  Rupees`);