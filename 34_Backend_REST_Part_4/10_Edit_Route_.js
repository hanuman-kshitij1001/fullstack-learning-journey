// Create Form for Update:
// Edit Route

// Serve the edit form                     GET                                   /posts/:id/edit

 


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
    let post = posts.find((p) => id === p.id);
    res.render("10_Edit",{post })
    
})

app .listen(port, () => {
    console.log(`Server running on port ${port}`)
});

// Haam ek Package USe krne Wale Hai Jo ki HAmre POST methode ko cut kar ke PATCH use Overide kar deta hai 
// Matlb Haar Jagha Jaha bhi POST hong Usko PATCH se Replace/Overide Kar deta hai 
// Ye Thoda Jugadu Tarika Hota HAI 
// uske liye ham chahe to jake npm pacakage Serch kar sakte hai Aur Serch Kar lenge ki methode-overiding
