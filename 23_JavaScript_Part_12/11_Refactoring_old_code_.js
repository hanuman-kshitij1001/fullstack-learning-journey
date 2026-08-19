// ab haam kya karne wale hai  ki haamne abhi tak jitne bhi promisses ke code sikhe hai un  sab ko color wale matlb hamne jo ek h2 heading banai thi waha pe appy karnge matlb volor wale Callback hell pe apply karne wale hai     



// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//     h1.style.color = color;
// if (nextColorChange) nextColorChange();
//     }, delay);
// }
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => { changeColor("blue", 1000);
//             });
//         });
//     });
// });





h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
            }, delay);
        });
    }

changeColor("red", 1000)
    .then(() => {
        console.log("red color was completed");
            return changeColor ("orange", 1000);
})
    .then(() => {
        console.log("orange color was completed");
            return changeColor("green", 1000);
})
    .then(() => {
        console.log("green color was completed");
            return changeColor("blue", 1000);
})
    .then(() => {
        console.log("blue color was completed");
});