// Call Hell Ke wajahh se bachne ke liye haa ye Promise padhte hai Jo inhe thoda aur smooth banate hai 

// Promises
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


// function savetoDb(data){
//     let internetSpeed = Math.floor(Math.random() * 10)+1;
//     if(internentSpeed>4){
//         console.log("you data was saved : ",data);
//     }else{
//         console.log("weak connection. data not seed")
//     }
// }


function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

savetoDb(
    "apna college",
    () => {
        console.log("success1: data1 saved");

        savetoDb(
            "hello world",
            () => {
                console.log("success2: data2 saved");

                savetoDb(
                    "shradha",
                    () => {
                        console.log("success3: data3 saved");
                    },
                    () => {
                        console.log("failure3: weak connection");
                    }
                );
            },
            () => {
                console.log("failure2: weak connection");
            }
        );
    },
    () => {
        console.log("failure1: weak connection");
    }
);
