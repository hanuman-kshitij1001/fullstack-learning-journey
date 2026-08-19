// String are Immutable in JS

// No changes can be made to strings.
// Whenever we do try to make a change, a new string is created and old one remains same.

let msg = "Kshitij     ";
msg.trim();

let str = msg.trim();

str // kshitij hi ayega 

// but ham jab khud se change karte hai to 

msg = "Hello "
msg // Output me Hello ayega samjha na bhai tu 

