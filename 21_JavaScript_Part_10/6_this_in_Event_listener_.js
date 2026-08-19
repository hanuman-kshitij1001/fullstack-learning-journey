// this in Event Listeners

// When 'this' is used in a callback of event handler of something, it refers to that something.

// jab bhi haam kisi object ya kissi bhi cheej ke liye ek listner create karte hai aur listeners ko hi haam yaha handler bolte hai Which is Handle the Event
//aur Event handeler ke andhr hamre do varibale hote hai (event , callback)
//to hame Chahe to callback ke andhr apne this keyword ko use kar sakte hai aur eske andhr es this ka matlb honga ki ye specific object jiske andr ye create hua hai 


let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    console.dir(this.innerTex);
    this.style.background = "blue";
});

//          NOTE:  This Type Ke keyword ka fayeda tab hota hai jab haam Multiple types ke objects ke upper Ek Single Event Listener ko use karna chahate hai            \\
