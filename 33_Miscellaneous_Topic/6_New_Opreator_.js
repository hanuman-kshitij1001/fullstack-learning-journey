// Factory Function Se Accha Tarika Hai YE theek hia  Na 

// New operator:
// The new operator lets developers create an instance(instance ka Matlb new Object) of a user-defined object type or of one of the built-in object types that has a constructor function.

// Contructer : Constructuer Never Return Anything  and Start with Capital Latter
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.talk = function () {
    console.log(`Hi, my name is ${this.name}`);
};

// yaha Pe Hamne Constructer Se Object ko Create kiya hai 
let p1 = new Person("adam", 25);
let p2 = new Person("kshitij", 20);