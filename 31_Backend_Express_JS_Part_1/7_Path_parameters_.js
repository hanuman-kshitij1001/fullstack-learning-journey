// Path Parameters
// req.params

// app.get("/ig/:username", (req, res) {
//     let { username } = req.params;
//     res.send(`This account belongs to @${username}`);
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
    // html code bhi bhej sakte hai koi dikkat nahi bhai ji 
    let htmlStr = `<h1>Welcome to the page of @${username}!</h1>`;
    console.log(req.params);
    console.log(htmlStr);
    res.send(`Welcome to the page of @${username}.`);
});
