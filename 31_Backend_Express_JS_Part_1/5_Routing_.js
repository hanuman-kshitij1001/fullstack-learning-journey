//https://expressjs.com/en/starter/installing.html

// Routing

// It is process of selecting a path for traffic in a network or between or across multiple networks.


// app.get("/apple", (req, res) => {  //dekh yaha pe apple se pahle slash use kiya ahi to path hai
//     res.send({
//         name: "apple",
//         color: "red",
//     });
// });


// Routing Kya hai : hamne kai baar wesite search karne ke baad dekha honga ki multiple rout(routes) hote hai 
// jab koi wesite kholi maan lo Flipkart hai to usme jate hi Men ka section hota hai aur Women ka hota ahi ye rout ki baat ho rahi hai 
// genrally jo hamri badi badi websites hoti hai unpe alag alag cheze alag alag route pe avlable hoti hai yanhi alag alag pages ke upper avilable hoti hai 



const express = require("express");
const app = express()  // ab ye jo aap hai yahi hamre server side me App create karne me help karta hai ese kuch aur bhi name de sakte // Mtlb jo hamri Server side wali web application hongi usse haam esi aap ke through bana rahe honge 
console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log(`app is Listening on Port ${port}`);
});


// main yaha se hai 
app.get("/", (req, res) => {
    res.send("You Contacted Root Path");
});


// yaha hamne router bana ya hai 
app.get("/home", (req, res) => {
    res.send("You Contacted Home Path");
});

// yaha pe bhi 
app.get("/search", (req, res) => {
    res.send("You Contacted Search Path");
});


// Saayd ab ye chalta nahi hai 
// app.get("/*", (req, res) => {
//     res.send("This Path Does not exist");
// });

app.use((req, res) => {
    res.status(404).send("This Path Does not exist");
});



// jaise hamne get use kiya ahi waise hi 
//post use kar  sakte hai last wali line   == app.use((req, res) =>   es wali me 

//Like this

// app.post("/", (req, res) => {
//   res.send("you sent a post request to root");
// });
