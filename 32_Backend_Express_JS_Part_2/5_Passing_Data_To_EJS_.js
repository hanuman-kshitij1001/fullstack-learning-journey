// Yaha Haam sikhne wale hai ki agr data base se data a raha hi to usse pass kaise karte hai 

const express = require("express");
const app = express();
const path = require("path");

const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home");
});


app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/rolldice", (req, res) => {
    let diceVal=Math.floor(Math.random()*6)+1
    // res.render("rolldice.ejs",{num : diceVal});
    // res.render("rolldice.ejs",{diceVal : diceVal});
    res.render("rolldice.ejs",{ diceVal });
    // res.render("rolldice");
});

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});
