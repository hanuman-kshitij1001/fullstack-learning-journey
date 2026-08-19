// Manipulating Style:  Ham apni class ki values ko set karne ke liye use karte hai class values ka ok  hr object ke liye uski list check kar sakte hai 

// using classList


// obj.classList
// classList.add() to add new classes
// classList.remove() to remove classes
// classList.contains() to check if class exists
// classList.toggle() to toggle between add & remove




// let heading = document.querySelector('h1');
// undefined

// heading.classList.add('green');
// undefined

// heading.classList.add('underline');
// undefined

// heading.classList.remove('green');
// undefined

// heading.classList.remove('green');
// undefined

// heading.setAttribute('class', 'green');
// undefined



// heading.classList
//     DOMTokenList ['green', value: 'green']

// heading.toggle("green");
// Uncaught TypeError: heading.toggle is VM6399:1 not a function at <anonymous>:1:9

// heading.classList.toggle("green");
// false

// heading.classList
//   DOMTokenList [value:'']

// heading.classList.toggle("underline");
// true

// heading.classList.toggle("green");
// true

// heading.classList
// DOMTokenList(2) ['underline', 'green', value: 'underline green']

// heading.classList.toggle("underline");
// false

// heading.classList
// DOMTokenList ['green', value: 'green'] 1 0: "green"
// length: 1