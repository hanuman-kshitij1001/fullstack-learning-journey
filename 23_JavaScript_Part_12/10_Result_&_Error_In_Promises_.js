// Promises
// promises are rejected and resolved with some data (valid results or errors
// yaha pe dekhna sikhte hai ki kiss kiss line of code se haam error apna dekh sakte hai  samjhna re tu 

saveToDBPromise("apnacollege")
    .then((result) => {
        console.log("promisel resolved");
            console.log("result", result);
return saveToDBPromise("hello world");
})
    .then((result) => {
        console.log("promise2 resolved");
            console.log("result", result);
})
    .catch((erroг) => {
        console.log("some promise rejected");
            console.log("error: ", error);
});


// is traha ke satutaion ko haam promisse ke helps se hi control karte hai aur ye saab haam tab usse karnge jaab API call lagyenge ok 