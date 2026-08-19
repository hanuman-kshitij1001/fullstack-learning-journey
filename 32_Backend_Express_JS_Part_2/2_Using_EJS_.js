//  Using EJS
// Ab Baat kar lete hai EJS ko Exctally use kaise karnge 
// Haame Eske liye Ek Line Likhni padti hhai 
// app.set("view engine", "ejs");
// app.get("/", (req, res) => {
//     res.render("home.ejs");
// });







const express = require("express");
const app = express();

// ye line bhi last me ai thi usko aquicer karne ke liye theek 
const path = require("path")

const port = 8000;

app.set("view engine", "ejs"); // View Ka Matlb haam apne Templete ki baat kar rahe hai to jo Hamre Template ko Rendor ya dikhane kaa kaam karne wala hai wo hai EJS hai 

// Ye line sab kuch hone ke baad likhi gai hai 
app.set("views",Path.join(__dirname, "/views"));  // Sabse badi baat esko hamne likha kyu esa hai ki esse haam apne View Ko Directly Gloaly kahi bhi rah kar excess kar sakte hai theek hai na 


app.get("/", (req , res) => {
    //res.send("this is home");  // ham res.send se response ko send nahi karte hai balki resposese ko render karte hai rendor matlb files ko bhejna , response .rendor me haam apni EJS file bhejte hai 
    //esko comment kyu kiya kyu ki aab yaha pe haam apni home.js wali files bhejne wale hai 
    res.render("home.ejs"); // .ejs likhe to bhi ye code chalega na likhe to bhi ye code chalega 
})
app.listen(port,() =>{
    console.log(`Listening on Port ${port}`);
})


// Note: By Default jab Bhi haam Express ke andhr  view engine ko use karte hai to View Engine Except karta hai ki hamre jitne bhi views hai , hamre jitne bhi templates hai , jo hamare EJS templates Banege wo Sare ke sare ek views name ke views name ke folder me hone chahiye 
//       by default express esi Views wale folders ko search karega hamre Templetes Ko Rendor karne ke liye .

// Haam Chahe to es folder ka name views Se kuch aur bhi rakh sakte hai par abhi genrally yahi sahi hai 

// To Es Views Folder ke andhr haam apne sare ke sare Views Yani Templates ko store karayenge 

//Note 2:

// Templeates kaise create karte hai Haam EJS ke templates Create karenge matlb haam apne View Folder me Ek files banyenge uska name .ejs denge samjha 
// Eske Andhr JS+HTML ka Mixed Code  create karenge 