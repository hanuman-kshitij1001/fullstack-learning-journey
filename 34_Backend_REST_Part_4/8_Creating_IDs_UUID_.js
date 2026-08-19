// Create id for Posts:
// UUID Package :  Universally unique identifier
// for instaltion :  npm install uuid
// for knowlege : https://www.npmjs.com/package/uuid

const express = require("express");
const app = express();
const port = 5000;

const path = require("path"); 

const { v4: uuidv4 } = require('uuid');
uuidv4();


//Allows Express to read data sent from HTML forms.
app.use(express.urlencoded({extended:true}));   //extended: true allows nested objects (recommended).

// View engine : Ye Batata Express ko ki haam yaha EJS as the Template englin use kar rahe hai
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

let posts = [
        {
            id:uuidv4(),
            username: "Kshitij-Tiwari",
            content : "I Love Coding Sayad ",
        },
        {
            id:uuidv4(),
            username: "Akash Yadav",
            content : "Hard Work Is Imported To Don't get succes  ",
        },
        {
            id:uuidv4(),
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

// app.post("/posts", (req, res) => {
//     let { username, content } = req.body;
//     posts.push({username, content});
//     // res.send("Post Request  Working");
//     res.redirect("/");
// })

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let { content } = req.body;

    let post = posts.find(p => p.id === id);
    post.content = content;

    res.redirect("/");
});


app .listen(port, () => {
    console.log(`Server running on port ${port}`)
});