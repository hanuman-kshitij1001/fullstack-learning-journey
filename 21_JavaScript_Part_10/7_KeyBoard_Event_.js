// Abhi tak hamne Mouse event Dekh Matlb jab bhi mouse se kuch clik hota hai to kaise cheje reflect ya event create hota hai 


let btn = document.querySelector("button");

btn.addEventListener("click", function (event){ // ese log e bhi likh dete hai 
    console.log(event);
    console.log("button Clicked");
});


btn.addEventListener("dbclick", function (event){ // db means Double Click 
    console.log(event);
    console.log("button Clicked");
});


// bahot acche se nahi padha hai ese please dekh lena kshtij bhai doen na re 
