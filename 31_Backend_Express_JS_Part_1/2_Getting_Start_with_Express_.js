// To baat Karte hai ki Express ko haam use kaise karte hai 

// Ye Express hai to hamara frame work hi par ye kaha exist karta hai 
// Express Actually NPM ke andhr hamara ek package hota hai jise haam NPM se install kar sakte hai, aur es package ke andhr hamre diffrent-diffrent tools and utility hoti hai jinka kaam hota hai hamari server site programing me help karna 


// Next Haam baat karte hai kaise haam Express use karte hai maltb kaise haam apni web API's Create kar sakte hai Using Express
// Uske liye Haam log Ek Folder bana lete hai express name ka  System ke andhr 

// Step 1: Us folder ke andar terminal open karke project initialize karte hain
// Command:
// npm init -y

// Step 2: Ab Express install karte hain
// Command:
// npm install express

// Isse express package hamare project me install ho jata hai
// aur node_modules folder create ho jata hai.

// Step 3: Ab hum Express ko require karke
// apni web APIs aur server bana sakte hain.


/// theory khatam theek 



//Getting Started with Express


// 1. Express ko import karna
const express = require("express");    // "express" Ye wala "Express"  ese maat likhna warna ❌ Module not found error ayega 


// 2. App object create karna
const app1 = express();


// 3. Port define karna
let port1 = 8080;


// 4. Server ko start karna
app1.listen(port1, () => {
    console.log(`app listening on port ${port}`);
}); 


// Ports are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.

// Ye upar wali line ko mai yaha summrize kar deta hun
// Ports ek tarah ke logical doors (gate) hote hain
// jinke through web server aur client (browser) ek dusre se baat karte hain
// aur data exchange karte hain.


// Yaha pe Hamne Naya FHir Upar wala kaam kiya hai 
const express = require("express");
const app = express()  // ab ye jo aap hai yahi hamre server side me App create karne me help karta hai ese kuch aur bhi name de sakte // Mtlb jo hamri Server side wali web application hongi usse haam esi aap ke through bana rahe honge 
console.dir(app);      // Ye Node.js aur JavaScript me ek function hai  .  Jo bhi object pass karoge, uska detailed view console me print karta hai

let port = 3000;
app.listen(port, () => {
    console.log(`app is Listning on Port ${port}`);
})