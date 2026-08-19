//Sending A Response:

// Ab haam Dekhnege ki Kaise Ab Backend Se Kaise Request ke Response ko send ki jati hai
// Abhi Taak hamne kya dekha ki Hamne port banaya uss pe Request bheji aur wo request backend me print hui theek ab Ab Client ko response kaise bhejna hai wo dekhte hai


// To ye Sending Response Do type ki hoti hai 
// 1️⃣- Request object        (req)
// 2️⃣- Response object       (res)

// Express me jab bhi koi request aati hai, To route handler me 2 objects milte hain:

// 1️⃣ req → Request object (client kya bhej raha hai)
// 2️⃣ res → Response object (server kya bhejega)

// http ..> Ek Text based Request hoti hai but express us request ko read karke ek JavaScript object me convert kar deta hai  aur yahi process ko haam  "PARSING" bolte hai 

// Express ke 4 Kaam Hanmne Discussess kiye the 
// 1 - Request ko kaise listen karta hai (Incoming request ko listen karna)
// 2 - Request Ko parse karna  (Request ko parse karna (text → JS object))
//     jitni bhi https request hai ye sari test based hai to kyu ki agr ye Dusri language me likhi ho to inhe samjha ja sake samjha na to sare ese lisen kar paye aur procces kar paye esliye ye Text based hoti hai
//     par express kya karta hai es text based request ko object me convert kar deta hai jo java script samjh pata hai 
// 3. Request ko sahi route se match karna
// 4. Client ko response bhejna




const express = require("express");
const app = express()  // ab ye jo aap hai yahi hamre server side me App create karne me help karta hai ese kuch aur bhi name de sakte // Mtlb jo hamri Server side wali web application hongi usse haam esi aap ke through bana rahe honge 
console.dir(app);

let port = Routing;
app.listen(port, () => {
    console.log(`app is Listning on Port ${port}`);
});


// ab yaha se kya honga ki jab bhi es local host ke uppar yani 8080 par request ayegi waise hi aap.js ye console wali request print kara denga samjha na 
app.use((req, res) =>{    // app.use() kya karta hai  Iska matlab: Server pe koi bhi request aaye Chahe: / , /about , /xyz kuch bhi ho ye function har bar run honga 

    //console.log(req);  
    console.log("request received")   // request ane paar ye prein ho jayega 

    //res.send("This is a Basic response");
    // res.send({
    //     name:"Kshitij Tiwari",
    //     Color:"Black"                   // yaha  hamne kya kiya hai JS me object banai ahai par express js ese json ki object me convert denga theek hai na ~
    // });
    let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Orange</li></ul>"
    res.send(code);
    // haam yaha rep.send me Html code bhi bhej sakte hai theek hai na  jaise 
    
});