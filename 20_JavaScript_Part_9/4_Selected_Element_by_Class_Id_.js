// Selecting Elements
// getElementByClassName
// Returns the Elements as an HTML Collection or empty collection (if not found)

// Same Id wala jaisa hi hota hai but yaha pe class  hia id hai
// ye hame array me nahi collection me cheze return karti hai 

let smallImages = document.getElementsByClassName("oldImg");

for(let i=0; i<smallImages.length; i++){
    console.dir(smallImages[i]);
}

// esse kya hua to hmari har line pe images a jayega done 
