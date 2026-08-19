
const express = require("express");
const app = express();
const port = 5000;

const path = require("path");  // esse haam Apne View Wale Folder Ko yaha pe excess kar rahe hai theek hai na 
// data Ko Express Samjh paye uske liye We can use here 
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.send("Server working well!");
})

app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));
app.set("views",path.join(__dirname, "views"))
app .listen(port, () => {
    console.log(`Server running on port ${port}`)
});