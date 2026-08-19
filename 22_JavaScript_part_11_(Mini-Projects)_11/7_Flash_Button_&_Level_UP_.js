let gameSq=[];
let userSq=[];
let btns = ["yellow","red","green","purple"];

let started = false;
let value = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
   // console.log("game started");
   if(started == false){
    console.log("game is started");
    started = true;
   }
})
 function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
 }

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    // when Random button choosen Ok
    let randIdx= Math.floor(Math.random()* 3);
    let randColor = btns [randIdx];
    let randBtn = document.querySelector(`$,{randColor)`);
    //console.log(randombtn)
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    btnFlash(randBtn);
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}