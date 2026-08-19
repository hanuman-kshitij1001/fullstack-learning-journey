// Array Methods

// 1 - Push: add to end
// 2 - Unshift: add to start
// 3 - Pop: delete from end & returns it
// 4 - Shift: delete from start & returns it

let car = ["A","B","C"];
console.log(car);   // ["A","B","C"]
car.push("Bolero ");  // ["A","B","C","Bolero"];
console.log(car);
car.pop();  ["A","B","C"] ;
console.log(car);
car.unshift("Fortuner");
console.log(car);
car.shift();
console.log(car);


// Jaise hamre pass ek follwer hai haam use block bhi karna chate hai hai usse unfolloe bhi karna chahte hai to fhir kya 

let follower= ["a", "b" , "c"];
let blocked= follower.shift()  // Hamen yaha pe followe a block kiya hai 