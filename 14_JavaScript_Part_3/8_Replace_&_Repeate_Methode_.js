// replace: String ke andhar value Search karta hai aur jaise hi wo value hame mil jati to wo to wo us value ko replace kar deta hai aur ek nai string return kar deta hai

// Searches a value in the string & returns a new string with the value replaced.

// let str = "lloveCoding";

// str.slice("love", "do") // "IdoCoding"
 
// str.slice("o", "x")    // "IlxveCoding"


let msg = "IloveCodding";
console.log(msg);
msg.replace("Ilove","do");


let name = "KshitijKshitijKshitij";
name.replace("Kshitij" , "Tiwari");  // Yaha pe ek hi kshitij replaye honga that  means first occrance hi replace karta hai 

// ye basicaly regular expression ke andhr hoti hai 


// repeat:Returns a string with the number of copies of a string

// Kissi Bhi String ke liye agr haam reapet maethode pass karte hai to wo kya karta hai ki  use reapet karne lagta hai ye repaet haam apne arrgument value me dalte hai 

str.repeat(3)     //   "MangoMangoMango"
