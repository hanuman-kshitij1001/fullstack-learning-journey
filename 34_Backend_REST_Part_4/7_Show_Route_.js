// Implement: GET /posts/:id
// Show Route:
// GET         /posts/:id              to get one post (using id)



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
            id:"1a",
            username: "Kshitij-Tiwari",
            content : "I Love Coding Sayad ",
        },
        {
            id:"2b",
            username: "Akash Yadav",
            content : "Hard Work Is Imported To Don't get succes  ",
        },
        {
            id:"3c",
            username: "Aman Tiwari",
            content : "Hard Work Is not Imporrted Smart Work Is Important ",
        }
];

// Index Route
app.get("/", (req, res) => {
    res.render("6_index2", {posts}); 
});

app.get("/posts/new", (req, res)=> {
    res.render("6_new");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show");
    // console.log(id);
    //res.send("request working");
})

app .listen(port, () => {
    console.log(`Server running on port ${port}`)
});