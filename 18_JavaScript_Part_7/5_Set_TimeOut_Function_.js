// Matlb :  ab  kai baar hame ese function  ko call karna hota hai jo kamm ko complete karne me time lete hai 
// jaise hamne APIS call Ki jaise suppose hamen usse kuch date mangwane ke liye call kiya done hai na  to ab par wo data ane me time lag raha hai to bhai agr mere mn me ya hai i ye kaam etne time me ho jana chaiye nahi to out ho jana so thats why we can use time out function 

// Ye ek inbuilt function hai already define hai 

// Syntax 
// setTimeout(function,timeout)  // es function ke do argument hai ek fuction jo call back ke liye use kiya jata hai aur dusra time out jo bata hai aap kitne time back hona chahate hai ye hamesa miliseconds me value leta hai done 


console.log("hi there!");
setTimeout(() => {

console.log("It Parul University");

}, 4000); // 4 seconds

console.log("welcome to ABCD");