// Instagram page with EJS
// const instaData = require("./data.json");



const express = require("express");
const app = express();
const path = require("path");

const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home");
});




// app.get("/ig/:username",(req,res)=>{
//     const instaData = require("./data.json");
//     console.log(instaData);
//     res.render("instagram.ejs", );
// });


app.get("/ig/:username", (req, res) => {
    const instaData = require("./data.json");
    const user = instaData[req.params.username];

    if (!user) {
        return res.send("User not found");
    }

    res.render("instagram", {
        username: user.name,
        followers: user.followers,
        following: user.following,
        posts: user.posts
    });
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
