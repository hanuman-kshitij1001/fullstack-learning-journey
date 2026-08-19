// What Is Function  : Important Concept hota hai bhai ye done

// Function : Function is The Important Concept In Js 
// For Example : console.log() , arr.push() etc are called Functions 
// Matlb Jinke Samne Ye () esa dabba Lag Jaye TO samjha jao Ki Ye Function hai 






// Functions in JS
// Function Definition (telling JS)

function funcName() {
//do something
}
// Function Calling (Using the function)
    funcName();     //hello();




//ExAmple
  function hello() {
    console.log("hello");
  }  
  hello();
  hello();
  hello();
  hello();


//  Ex: 2

function printName() {
    console.log("Kshitij Tiwari");
    console.log("Ayush Tiwari");
}
// abhi ye dursa function haam usse functio me hi bana rahe hai bhai 
function print1To5(){
    for(let i=1; i<=5 ;i++){
        console.log(i);
    }
}


function isAdult() {
    let age = 18;
    if(age>=18){
        console.log("ADULT");
    }
    else{
        console.log("NOT ADULT");
    }
}
// isAdult();
// print1To5();
// printName();