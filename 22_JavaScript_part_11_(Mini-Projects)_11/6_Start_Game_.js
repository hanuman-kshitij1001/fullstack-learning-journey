// esko mai wahi html wali file se link  kar deta haun theek hai na 5_0 se 

// .. 1 = key press  -> Game Start
// .. 2 = Button Flash + Level 1
// .. 3 = game squence + User Squence kam karenga 
// .. 4 Checking Sequence

let gameSq=[];
let userSq=[];

let started = false;
let value = 0;

document.addEventListener("keypress", function(){
   // console.log("game started");
   if(started == false){
    console.log("game is started");
    started = true;
   }
})