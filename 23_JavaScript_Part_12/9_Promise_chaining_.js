// promise chaining : ek ke baad ek bahot sare promisese ka chaining karna 

// pahele save ho jaye then dusra karda kahi pe agr weak connection aye waha stop kar do 
// first kab save hota jab then excute hota hai  hai na re 


// Promises
// Improved Version


// saveToDBPromise("apnacollege")
//     .then(() => {
//         console.log("promisel resolved");
//         return saveToDBPromise("hello world");
// }) 
    
//     .then(() => {
//         console.log("promise2 resolved");
// }) 
    
// .catch(() => {
//         console.log("some promise rejected");
//  });




savetoDb("apna college")
.then(() => {
    console.log("datal saved. promise was resolved. ");
        savetoDb("helloworld")
        .then(() => {
            console.log("data2. Was saved.");
    })
})

.catch(() => {
console.log("promise was rejected");

});



// this is called Promise chaining  hame jiss traha ka code likhna hai woo esa hi honga theek hai na 
savetoDb ("apna college")
    .then(() => {
        console.log("datal saved");
            return savetoDb("helloworld");
            })

    .then(() => {
        console.log("data2 saved");
})
    .catch(() => {
        console.log("promise was rejected");
});