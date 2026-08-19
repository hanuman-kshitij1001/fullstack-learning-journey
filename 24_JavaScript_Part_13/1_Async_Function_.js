// bAsicly Async Fuction kaam karne ka compact tarika hai ye cheje hame help karti hai ki code ko kaise chota likha ja sakta hai 

// To Async Function ko samjhne wale hai Chalo 
// esme do key words hote hai
//1-async keywords
//2-await keywords


//1- async key words se haam apne async key-word ko create karte hai
// Agr Jo bhi hamne Function banaya hai uske samne agr ham uske samne async likh dete hai to async function ban jata hai 
// Aur ye jitne bhi async function hote hai wo sare ke sarepromise return karte aur bhi promisese return hota hai uske uppar haam apne methods ko apply kar sakte hai hai na  




async function greet() {
    throw "404 page not found";
    return "hello!";
}
greet()
    .then ((result) => {
        console.log("promise was resolved");
        console.log("result was: ", result);
})
.catch((err) => {
    console.log("promise was rejected with err : ", err);
});








// yaha hamne dekha ki haam (=>) eska bhi use kar sakte hai
async function greet() {
    return "hello world!"; //returns a promise     
    }

let hello =  async () => {}; //returns a promise
   



