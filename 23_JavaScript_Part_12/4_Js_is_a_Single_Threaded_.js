//JS is Single Threaded  : Eska Khana Ka matlb hai agr java Script ke andhr koi code likha hua hai to ek time pe code ki ek hi cheez excute ho paiyegi this Is Called Single Threading 


let a = 25;
console,log(a);
let b = 20;
console.log(b);
console.log(a+b);

// yaha hamne dekha ki line by line code excute ho raha hai samjhna  
// Doubt ese to sab me hota but 

// matlb ek Time Js Ek hi kaam karti hai aur ed=ska hi matlbh hota hai single threaded js ka Theek hai na 

setTimeout(function () {

console.log("apna college"); 
}, 2000);

console.log("hello...");

// doubt agr js single threaded hai to yaha pe Js Ne wait karne ka kaam kaise kiya kyu ki wait karna bhi to ek kaam jaisa hi hota hai na bhai 

// eska kaam hai ye delay rowser karta hai hai aur browser C++ me chalta hai 
// aur esa nhai hai ki ye c++ me hi likha ho kissi bhi languge me likha  ho sakta hai 

// baat ye baat samjha nahi ai na 


// Note Jab Line By Line Code Excute hota hai To usse haam Synchronus nature bolte hai matlb ek sath sari cheeze sink me chal rahi hai lagatar samjha na 
// par jab Timeout jaise cheeze use karte hai waha haam js ko asynchronus bana rahe hote hai 
