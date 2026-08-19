// Kkaise haam EJS ke Andhr loop ka use kar sakte wo dekhne wale hai

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
    const followers = ["adam", "bob", "steve", "abc"];
    let {username}= req.params;
    res.render("instagram.ejs", { username , followers});
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
