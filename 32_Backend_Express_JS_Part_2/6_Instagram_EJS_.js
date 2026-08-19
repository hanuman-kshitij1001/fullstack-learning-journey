// Instagram EJS
// Create a basic template for instagram page based on following route :

        // /ig/:username

// Yaha Haam Instgram EJS create karne Wale Hai Jisse haam Alag Alga Routes ya user ke hisab se Pages create karne wale hai


const express = require("express");
const app = express();
const path = require("path");

const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/ig/:username",(req,res)=>{
    let {username}= req.params;
    //console.log(username); print karne ke liye kiya tha backende me 
    res.render("instagram.ejs", { username });
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/rolldice", (req, res) => {
    let diceVal=Math.floor(Math.random()*6)+1
    res.render("rolldice.ejs",{ diceVal });
});

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});
