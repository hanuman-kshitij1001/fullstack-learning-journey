// esem kya hota hai ki yr jab kabhi bhi  haam ye cheje karte hai aur usme bhi error ata hai matb we can use aynsc & wait keywords aur usme error a jata  hai to ye cheeze kaise handle hoti hai wo sun ab 

h1 = document.querySelector("h1");

function getNum(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
let num = Math.floor(Math.random() *5)+1;
     if(num > 3) {
        reject("promise rejected");
     }
    h1.style.color = color;
        console.log(`color changed to ${color}!`);
            resolve("color changed!");
        }, delay);
    });
}


async function demo() {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);


let a = 5;
    console.log(a);
    console.log("new number = ", a + 3);
}


// ess code me ese error aye jab promise complete nahi hota to waha pe wo excute ho raha hai wo to error deta hi hai but baki ke bache huye program wo bhi stop ho jate hai matlb chahre wo sahi ho ya nahi par excute hi nahi ho rahe hai bhai 
// to es traha ke error ke handle karne ke liye haam Kuch kane wale usssebolte hai 
//haam yaha pe promisise rejection ke baad ki bat kar rahe na ki error handling ki  although wo bhi ek erro hi hai but usse ese maat dekho  to ye hota handle niche dekho 

// Handing Recjection with Await


// sun hota kya hai ki jo cheeze hame lagti hai ki  ki error dengi to usse haam try block me daal dete hai 
// aur catch me uska excption likh dete hai 

async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
}   
     catch (err) {
            console.log("error caught");
            console.log(err);
    }
}

// BAKI UPPAR KA CODE SAME RAHEGA BASS YE WALI LINE BADAL DENI HAI TO WO CHEZE BHI HANDLE HO JATI HAI DONE 