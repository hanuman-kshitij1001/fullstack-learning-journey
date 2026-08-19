// Delete Operation Karne ke Liye Ham eEk NAya Path Banana Padega Which is my Destroy Route

// Delete Karne Ke Liye Hame Apne Ek NAye Path par request bhejni padegi which is  /posts/:id
// Method : DELETE      
// /posts/:id
// to delete specific post


// Implement :                 /posts/:id

// Destroy Route:
// DELETE      /posts/:id      to delete specific post






const express = require("express");
const app = express();
const port = 5000;

const path = require("path"); 
const methodeOverride = require("method-override");


app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

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

app.patch("/posts/:id", (req, res)=> {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.send("patch request working");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let posts = posts.find((p) => id !== p.id);
    res.render("10_Edit",{post })
    
});

// Kaama Yaha PE ho raha hai 
app.delete("/posts/id:",(req, rep) =>{
    let { id } = req.params;
    posts = posts.filter((p) => id === p.id);  // post.filter hamre liye wo sare post filter karke leke ayega jaha pe  id != p.id hongi
    res.redirect("/posts")  // Last me hamne Yaha PE redirect kar diya hai bass aur kuch nahi 
    // Edhr actually Mermory se cheeje delete ho rahi hai theek hai na 
    })

app .listen(port, () => {
    console.log(`Server running on port ${port}`)
});
