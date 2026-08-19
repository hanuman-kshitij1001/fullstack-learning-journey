// Functions with Arguments  ==  // Values we pass to the function


function funcName (arg1, arg2 , agr3 , arg4) {

//do something

}

function printName(name , age){
    console.log(`${name}'s age is ${age}.`);
}
printName("Kshitij Tiwari", 20);
printName("Ayush Tiwari",6);
printName("Akash Tiwari",23);
printName("Aman Tiwari",24);

printName("Aman Tiwari");  // Aman Tiwari's age is undefined.


// jis order me hamne argumnet define kiya haiusi order me value dalte ha hai esliye order bahot important hai 

function sum(a,b){
    console.log(a+b);
}
sum(1,2);
sum(100,200);
sum(111,235);