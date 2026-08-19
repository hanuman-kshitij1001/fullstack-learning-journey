// Slice: Kat dena Matlb ye ek Tukada return karta hai as a new string Done 

// slice
// Returns a part of the original string as a new string.

// let str = "lloveCoding";

// str.slice(5)                 // "Coding"
// 
// str.slice(1, 4)              //  "love"

// str.slice(-num) = str.slice(length-num)



let msg = "Hello";

console.log(msg.slice(0,4))   // (Starting   Ending-1)

console.log(msg.slice(4 ,msg.length-1))

console.log(msg.slice(4));

console.log(msg.slice(-2))   // -2 Ke jagha wo Taolt length Of String to minus number aur jo number ayega wo print ho jayega 
 // hello = 5 words so  .. >> 5-2 that is 3 so jo third postion pe hai to wahi a jata hai 