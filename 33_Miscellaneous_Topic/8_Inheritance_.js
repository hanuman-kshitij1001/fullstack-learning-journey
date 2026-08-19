// Inheritance:

// class Student extends Person {
//     constructor(name, age, marks) {
//         super(name, age);
//         this.marks = marks;
//     }
//     greet() {
//     return "hello!";
//     }
// }
//     let s1 = new Student("adam", 25, 95);

// Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.








// class Student {
//     constructer(name, age , marks){
//         this.name = name;
//         this.age = age;
//         this.marks - marks;
//     }
//     talk() {
//         console.log(`Hii,I am  ${this.name}`);
//     }
// }

// let stu1 = new Student("Kshitij", 25,100);

// class Teacher {
//     constructer(name, age, subject){
//         this.name = name;
//         this.age = age;
//         this.subject = subject;
//     }
//     talk() {
//         console.log(`Hii I Am ${this.name}`);
//     }
//}

// En Dono Class Me KUch Cheje Common hai OPPS Bana Hi es Liye Hai Ki Repitaion Ho Kaa Kare 
// To haam Kya Karne wale hai Ki  jo bhi cheeje class  ke andhr reapet ho rahi hai unke Liye Ek Aur Nai Class Bana LEnge Aur Un classe ko Jaha Jaha JArurat Honag Waha Use kar Lenge bhai 

class person{
    constructer(name, age) {
        console.log("Person Call Constructor")
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hii I am ${this.name}`);
    }
}

class Student extends person{
    constructer(name, age , marks){
        console.log("Student Call Constructor")
        super(name , age) // Parent class Constructer is being Called 
        this.marks - marks;
    }
}

class Teacher extends person {
    constructer(name, age, subject){
        super(name , age) // Parent class Constructer is being Called 
        this.subject = subject;
    }
}

// Extend Keyword Ko Haam Property inherit karne ke liye use karte hai
// Ek Super KeyWordHota Hai Jisko Haam Constructer ke Andhr Use karte hai  Super Keywords Means Hamri Parent Class Ka Constructer 
// jaise jab super(name, age) ese likhte hai to uska matlb hota hai  ki haam parent class ke Constructor ko  call laga rahe hai theek hai na 