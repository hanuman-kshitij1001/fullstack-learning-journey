// ye set time jaisa simall sab kuch hai 

// Set Interval
// setInterval(function, timeout)

// but set interval utne hi inteval ke badd repet karta hai ek baar print karane ke rukta nahi hai bhai smjha na 

let id = setInterval(() => {
 console.log("Apna College");
}, 2000);

console.log(id);

let id2 = setInterval(() => {
console.log("Hello World");
}, 3000);
console.log(id2);


//agr program rokna hai to likhna honga ki clearIntervel(id_name)