// Get & Post Requests


// GET:
// > Used to GET some response
// > Used to POST something (for Create/ Write/ Update)


// POST:
// > Data sent in query strings (limited, string data & visible in URL)
// > Data sent via request body (any type of data)

const express = require("express");
const app = express();
const port = 8000;

app.get("/register", (req, res) => {
    let{user, password}= req.query;
    res.send(`standard GET response Welcome ${user}!`);
})
app.post("/register", (req, res) => {
    res.send("standard POST response");
})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});