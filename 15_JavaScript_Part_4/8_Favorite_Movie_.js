// Favoraite Movie

// const  FavMovie = "Kuch Kuch Hota hai";
// let guess= prompt("guess my favrate moiev");

// while(guess != FavMovie ){
//     console.log("Wrong Guess!")
//     guess = prompt("Wrong guess. Please Try Again");
    
// }

// if (guess == FavMovie) {
//     console.log("Congurate");
// } else {
//     console.log("You Quite");
// }




// Favorite Movie

const favMovie = "kuch kuch hota hai";
let guess = prompt("Guess my favorite movie");

while (guess !== null) {
    if (guess.toLowerCase() === favMovie) {
        console.log("Congratulations! 🎉");
        break;
    } else {
        console.log("Wrong Guess!");
        guess = prompt("Wrong guess. Please try again");
    }
}

if (guess === null) {
    console.log("You quit!");
}
