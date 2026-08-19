// Guessing Game

// User enters a max number & then tries to guess a random generated number between 1 to max.

const max = prompt("Enter The Maximum Number");
// console.log(max);

const random = Math.floor(Math.random() * max)
// console.log(random);

let guess = prompt("Guess The Number ")
while(true){
    if(Guess == "Quite"){
        console.log("User Quit");
        break;
    }
    if(Guess == random){
        console.log("You Are Right! Congurate");
        break;
    }
    else if(Guess < random){
        Guess = prompt("You Guess Is So small Try Again");
    }

        else{
           Guess = prompt("Your Guess was To Large. Please Try Again! ");
        }
    }

