//Serving Static Files

// Yhaa Haam baat Karne wale hai ki kaise haam static files ko serve kar sakte hai 
// Abhi taak Hamne Dekh ki kaise haam html code ko render kar sakte hai as response but ho sakta hai agr mujhe html ke sath sath css send karni ho aur Kafhi sara java script ka logic send karn ho 
// jab  bhi App Server Se reponse mangte ho to usme sirfh html  hi nahi ata hai js , css , html ye sari cheje ati hai 
// To basiclaly Static files ko serve karne ka matlb hai ki jab bhi hamare code ke sath me css,js files ko include karna hai response me to  unhe kaise karte wo sikhna hai yaha par

// unhe include karne ke liye haam apne code me ek line likhte hai

app.use( express.static( folder_name))

// folder name hamra wo folder honga jiske andhr hamri sari static files hongi theek hai na  waha pe haam Css , js  , files store karayenge  is taraha ki files ko haam apne ejs empletes ke sath usee kar rahe honge theek hai na

// by default hame "Public name ka hi folder bana honga theek hai na "


app.use(express.static(path.join(_dirname, "public")));