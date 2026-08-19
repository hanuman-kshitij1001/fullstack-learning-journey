//Chat Gpt 

// 1️⃣ Request kya hai?

// Jab client (browser, Postman, mobile app , kahi pe bhi bheje) server ko kuch bhejta hai, use request kehte hain.
// Request me 3 main cheeze hoti hain:
// URL/Path → kaunse resource ke liye request hai
// Method → HTTP methods: GET, POST, PUT, DELETE
// Body / Query params / Headers → extra data jo client bhejta hai

// GET http://localhost:3000/users?id=5
// Domain:  →     localhost:3000
// URL      →     /users
// Method   →     GET
// Query    →     id=
//Query parameters: sab ? ke baad


// copy paste from lecture

// app.use

// app.use((req, res) => {
// console.log("new incoming request");
// });




const express = require("express");
const app = express()                                            // ab ye jo aap hai yahi hamre server side me App create karne me help karta hai ese kuch aur bhi name de sakte // Mtlb jo hamri Server side wali web application hongi usse haam esi aap ke through bana rahe honge 
console.dir(app);                                               // Ye app object ki sari details console me print karta hai.

let port = 8080;
app.listen(port, () => {
    console.log(`app is Listning on Port ${port}`);
});


// ab yaha se kya honga ki jab bhi es local host ke uppar yani 8080 par request ayegi waise hi aap . js ye console wali request print kara denga samjha na 
app.use((req, res) =>{
    console.log("request recived");
})

// console.log vs console.dir
// Dono similar lagte hain, par:

//1️⃣ console.log(app) → simple print

//2️⃣ console.dir(app) → object ko detail me expand karke dikhata hai