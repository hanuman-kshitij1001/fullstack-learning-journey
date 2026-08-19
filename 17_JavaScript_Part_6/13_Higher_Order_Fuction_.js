// Higher Order Functions:
//                        A function that does one or both :

// .Takes one or multiple functions as arguments

// .Returns a function



// Higher Order Functions
// Takes one or multiple functions as arguments

function multipleGreet(func, n) {
for(let i=1; i<=n; i++) {
        func();
    }
}
let greet = function() {
    console.log("hello");
}

multipleGreet(greet, 2);
multipleGreet(function() {console.log("namaste")}, 1000);