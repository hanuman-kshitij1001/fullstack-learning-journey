// waise yaha pe haam sikhne wale hai ki DOM evenet Ko Excatly kaise handle kar sakte hai

// DOM Events

//1- onclick (when an element is clicked)
// Tab Trigerd Hota hai jab Haam Kisi bhi Button ko Click Karte hai 

let btn = document.querySelector("button");
console.dir(btn);


// btn.onclick = function () {
//     alert("Button Was Clicked");
//     console.log("button was clicked");
// }

btn.onclick = function () {
    alert("Button Was Clicked");
    console.log("button was clicked");
}

function sayHello()
{
    alert("hello");
}


//2- onmouseenter (when mouse enters an element)
// Actually kya hota hai yaha yaha pe jab hamra cursor kisi button pe jata hai click nahi hua bass gaya hai waha pe to uss time jo event hota hai usse haam ye wala bolte hai done ?

let btns = document.querySelectorAll("button");

for (btn of btns) {
btn.onclick = sayHello;

btr.onmouseenter = function () {
console.log("you entered a button");
console.dir(btn);
        }
console.log(btn);
    }
function sayHello() {
alert("Hello!");
}
