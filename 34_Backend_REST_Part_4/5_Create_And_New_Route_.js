// Implement: POST Iposts

// Create Route
// POST            /poststo                 add a new post


// 2 routes:
// . Serve the form        GET     /posts/new
// . Add the new post      POST    /posts

// Matlb yaha Pe Do Kaam Hone wala hai 
//1- User se information legnga 
//2- Ab Ye Jo Request hia usko add kar denga to our Data base 
// Waise abhi yaha pe data Base Nahi hai To naye Post ko haam Array Ke Andhr store kara lenge  







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
    res.render("index2", {posts}); 
});

app.get("/post/new", (req, res)=> {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    posts.push({username, content});
    res.send("Post Request  Working");
})

app .listen(port, () => {
    console.log(`Server running on port ${port}`)
});