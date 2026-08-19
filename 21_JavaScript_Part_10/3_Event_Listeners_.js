// Event Listener : Esse Haam Apne DOM evenet ko Track  kar sakte h hai done Eske Do tarike hote hai
// addEventListener

// element.addEventListener(event, callback)

// btn.addEventListener("click", function () { 
//     console.log("button clicked");
// });



let btns = document.querySelectorAll("button");

for (btn of btns) {
// btn.onclick = sayHello;
// btn.onclick = sayName;
btn.addEventListener("click", sayHello);
}


function sayHello() {
alert("Hello!");
}

// matlb Ek bar alert ayega aur then ye niche wala alert ayega done 

function sayName() {
alert("Apna College");
}


// jada jankai ke liye MDN pe jao 