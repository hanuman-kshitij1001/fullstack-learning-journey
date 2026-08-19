// Esme Bhi Promis hi padh rahe haam 

// Promises
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// ek kaam ho pa raha hai tabhi dusra kaam honga samjha na re its like a promise na ek honga malik tabhi dusri karunga 
// that is that object to say ya koi kaam succes full honga ya fail hoga 



// promise object ke andhr hamre pass do cheze hoti hai  "( resolve nad reject )"

// Resolve : Its Is Our Success Call back 
// Reject: it is Our Failer call back 






function savetoDb(data){
    return new Promise((resolve, reject) => {
let internetSpeed = Math.floor(Math.random() * 10) + 1;
if (internetSpeed > 4) {
    resolve("Succes : Data was saved");
} else {
    reject("Failer : Weak Connection");
        }
    });
}
savetoDb("apna College");
