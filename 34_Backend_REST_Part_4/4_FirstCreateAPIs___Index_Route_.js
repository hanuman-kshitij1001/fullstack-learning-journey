
// Implement: GET /posts
// Index Route
// GET      /posts              to get data for all posts
 






const express = require("express");
const app = express();
const port = 5000;

const path = require("path");  

app.use(express.urlencoded({extended:true}));

// View engine
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

let posts = [
        {
            username: "Kshitij-Tiwari",
            content : "I Love Coding Sayad ",
        },
        {
            username: "Akash Yadav",
            content : "Hard Work Is Imporrted To Don't get succes  ",
        },
        {
            username: "Aman Tiwari",
            content : "Hard Work Is not Imporrted Smart Work Is Important ",
        }
];

// Index Route
app.get("/", (req, res) => {
    res.render("index", {posts}); 
});

app .listen(port, () => {
    console.log(`Server running on port ${port}`)
});