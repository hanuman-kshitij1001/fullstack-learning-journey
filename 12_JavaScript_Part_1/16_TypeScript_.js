// What is TypeScript?
// Bhai TypeScript basically JavaScript ka upgraded version hai.

//  type Script js ka hi ek short of next version hai jo use hota hai kai sari companes ke andhr en dono me diffrent hota hai bass type  ka 
//  Jiase apne dekh ki Js Me ap ek arviable  ka type chenge karke aap dusra bana sakte ho  ye ek Dynamic Phenomena hai JS ka Thats Why We can say It is Dynamic typed language Matlb esi cheeze jiske value chenge ho saki hai done 
//  but Type-script Thodi esse jada Strict Hoti hai Matlb
//  Matlb ane koi variable define kar diya to baad me aap uske data type ko change nahi kar sakte ho done 

// let a = 5;
// let a = true ;
// Dekh a apne yaha kaise Error aya hai Yahi hai 
// type_script ko microsoft ne design kiya hai ab leking bahot sare log ese use karte hai 

// Static Typed, where JS is dynamic typed
// Designed by Microsoft



//1️⃣ JavaScript me problem kya thi?

//JavaScript dynamically typed language hai.

// Example:
//         let x = 10;
//         x = "hello";
// Yaha error nahi aayega.
// Par kabhi kabhi ye bugs create karta hai.


// 2️⃣ TypeScript me kya hota hai
//     TypeScript me type specify karte hain.

// let x: number = 10;
// x = "hello";   // ❌ error

// Yaha compiler error de dega.



//3️⃣ TypeScript kaise run hoti hai

    //. TypeScript directly browser me nahi chalti.
    //. Pehle compile hoti hai → JavaScript me convert hoti hai

    // Example:
    // app.ts   →   compile   →   app.js

    // Fir browser JavaScript file run karta hai.




//4️⃣ Example:

// TypeScript:

// function add(a: number, b: number): number {
//  return a + b;
// }

// Compile hone ke baad JavaScript ban jata hai:

// function add(a, b) {
//  return a + b;
// }

// 5️⃣  TypeScript kyu use hoti hai    
//      Bade projects me help karti hai:
//      bugs kam hote hain
//      code readable hota hai
//      IDE autocomplete better hota hai
//      Isliye React / Angular projects me zyada use hoti hai.