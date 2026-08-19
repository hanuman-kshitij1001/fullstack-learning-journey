// Array Method: Ye method hamare original array ke andhr hi change karta hai 

// splice: removes / replaces / add elements in place 
// splice(start, deleteCount, item0...itemN)

let colors = ["red", "yellow", "blue", "orange", "pink", "white"];

colors.splice(4)     // (2) ['pink', 'white']

colors.splice(0,1); // zero start karke count 1 karke ek eleelmt ko delte kar do  //['red']

colors.splice(0, 1, "black", "grey");   // ['yellow']


