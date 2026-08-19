// This Intresting package That In Nodemon
// Abhi taak haam node ke basis pe server start kar rahe the but haam ek Package instal kar lete hai jo esme help karta hai theek hai na  

// Nodemon: 
// To automatically restart server with code changes

// ese instal karne ke liye haamlikhte hai "npm install -g nodemon"(For Globaly Instalation ke liye)
// Genrally ese haam globaly store karte haiclearclear




const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is Listening on Port ${port}`);
});

app.get("/", (req, res) => {
    res.send("My Contacted Root Path");
});

app.get("/home", (req, res) => {
    res.send("You Contacted Home Path");
});

app.get("/search", (req, res) => {
    res.send("You Contacted Search Path");
});

app.use((req, res) => {
    res.status(404).send("This Path Does not exist");
});
