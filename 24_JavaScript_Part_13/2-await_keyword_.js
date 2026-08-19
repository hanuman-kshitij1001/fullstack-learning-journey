// According to this key word name await means Intezar karn amatlb wait karn theek hai na 

// Await Keyword
// pauses the execution of its surrounding async function until the promise is settled (resolved or rejected)
// yahi ya to resole ho jaye  ya fhir reject ho jaye 
// yani ki hamne jis bhi function ke samne likh diya to wo sarre aysnc function ko pause kar denga matlb uhne intezar karwaega kab tak 
// jab tak hamari jo current function call  chal  rahi hai usme promisese setteled nahi ho jata hai tab tak 



function getNum(){
        return new Promise((resolve, reject) => {
        
            setTimeout(() =>{
                let num = Math.floor(Math.random() * 10)+1;
                return num;
            }, 1000);
            
        });
}

async function demo() {
    getNum();
    getNum();
    getNum();
    // yaha pe hamne dekha ki ek sath hi teeno ki teeno cheje print hui to esko rokone ke liye haam await key words use karte 
    await getNum();
    await getNum();
    await getNum();
    getNum();
}


// yaha se haam dekh rahe hai ki cheje ese hoti hai theory ke sath waha lecture se copy paste kiya tha ese mai 
async function show() {
    await colorChange("violet", 1000);
    await colorChange("indigo", 1000);
    await colorChange("green", 1000);
    await colorChange("yellow", 1000);
    await colorChange("orange", 1000);

    return "done";
}

// ab haam Esko apne Previous problem pe lagane wale h 1 heading par 
// esse haam denkenge ki code kita jada chota ho jayega 


h1 = document.querySelector("hl");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
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
    changeColor("blue", 1000);
}

// to hamesa yad rakha na ki jab bhi promese hote hai js Me to waha ayscn aur wait key words use kiye jate  its depend on you ki tum code ko chota rakhna hai ya bada 
