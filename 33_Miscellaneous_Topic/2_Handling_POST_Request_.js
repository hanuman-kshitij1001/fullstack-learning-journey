


const express = require("express");
const app = express();
const port = 8000;


// Middleware to parse request body
app.use(express.urlencoded({ extended: true })); // Hamre URL ke Andhr Koi Data AT hai To Encoded To ye Line Express Ko bolegi TUm ese Ese Decode KAr ke Sanjh lo bhai 
app.use(express.json());// Yha Pe Haam esko Esliye Add Kar rahe HAi KI Ho kya raha tha Express Shirf Url coded Padh pa Raha tha But Json Nahi pdh pa raha tha to padhwane ke liye We can Write Here 


app.get("/register", (req, res) => {
    let{user, password}= req.query;
    res.send(`standard GET response Welcome ${user}!`);
});

app.post("/register", (req, res) => {
    let { user, password } = req.body; // now we can access POST data
    res.send("standard POST response");
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});