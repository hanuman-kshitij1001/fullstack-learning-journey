//Promises
// so now promise ke andhr do methode bhi hote hai jaise ki 


//...>//   then() & catch()

// Agr Hamr chate hai ki promis full fill hone ke baad kuch kaam ho to uske liye haam then methode ka use krte hai 
//agr reject hone ke baad haam chate hai ki kuch kama ho to uske liye haam catch methode ka use karte hai 


// let request = saveToDBPromise("apnacollege");
//     request
// .then(() => {
//     console.log("promise resolved");
// }) 
// .catch(() => {
//     console.log("promise rejected"); 
// });



function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success: data was saved");
    } else {
            reject("failure: weak connectio")
    }
});
}

// let request = savetoDb("apna college"); //req = promise object
// request.then(() =>{
//     console.log("Promise was Resolve");
//     consolen.log(request);
// })
// .catch(()=>{
//     console.log("Promise was rejected");
//     consolen.log(request); 
// })


// dursa tarika : compact version 

 savetoDb("apna college") //req = promise object
    .then(() =>{
        console.log("Promise was Resolve");
})
    .catch(()=>{
        console.log("Promise was rejected");
})
