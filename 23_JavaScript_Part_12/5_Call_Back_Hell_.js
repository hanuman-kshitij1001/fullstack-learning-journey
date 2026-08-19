// sabse pahili baat java script ke inhe nature ko haam yaha pe padhte hai theek hamesha yad rakhna ki java Script Ke es nature se kuch proble ati hai 

// Wo jo Problems hai unhe hi haamyaha pe padhne wale hai done 

// Sabse pahli problem ye hai ki 

// 1_ CallBack Hell:

//


h1 = document.querySelector("h1");

// Syncronyes FUnction 
// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "green";
// 1}, 3000);


// tumne dekha yaha pe ki ye sari cheze haam bar likh likh ke rrapet kar rahe hai 


// Ye jo Likh raha hun ye Asynchronus hai 
// function changeColor(color){
//     setTimeout(()=>{

//     h1.style.color = color;

//     },delay);
// }

// changeColor("red",1000);
// changeColor("Orange",1000);
// changeColor("green",3000);


function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
h1.style.color = color;
    nextColorChange();
    }, delay);
}
changeColor("red", 1000, () => {
    changeColor("orange", 1000, ()=> {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, ()=> {
                changeColor("blue", 1000);
            });
        });
    });
});

// yaha pe cll back ke wajha se ye nested baan ja rahi ha 