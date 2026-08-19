
// Object Prototypes
// Prototypes are the mechanism by which JavaScript objects inherit features from one another.

// It is like a single template object that all objects inherit methods and properties from without having their own copy.

//          arr._proto_(reference)
//          Array.prototype (actual object)
//          String.prototype


//Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

let arr = [1,2,3];
arr.sayHello = () => {
    console.log("Hello, i am Arr");
}