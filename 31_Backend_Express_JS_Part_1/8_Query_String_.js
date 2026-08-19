// Query Strings

// req.query

// app.get("/search", (req, res) => {
// let {q} = req.query;
//  if (!q) {
//  res.send("No search query");
//  }
//  res.send(These are the results for: ${q}');
// });



const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is Listening on Port ${port}`);
});

app.get("/", (req, res) => {
    res.send("My Contacted Root Path");
});


app.get("/:username/:id",(req, res)=>{
    let { username } = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}!</h1>`;
    res.send(`Welcome to the page of @${username}.`);
});

app.get("/search", (req, res) => {
    // console.log(req.query);
    let { q } = req.query;
    res.send(`Search result for Query ${q}`);
});