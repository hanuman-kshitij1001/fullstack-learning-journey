// Factory Functions
// A function that creates objects
// Sayad aab Ye Jada Use Nahi Hoti hai But jaan lo Ye Kyu Fail Hui Theek hai

function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hii my Name is ${this.name}`);
        },
};
    return person;
}  

//  ye hamara factory function baan gaya hai 

/// Disadvatege : Jab Bhi haam factory function se objects se banate hai to haar object ke paass apni khud ki copy jati hai  jo common hai uski bhi copy ye khud create karta hai