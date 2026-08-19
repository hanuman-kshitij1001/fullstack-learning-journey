// 

//  Change the city to "Mumbai"
//  Add a new property, gender: "Female"
//  Change the marks to "A"

const student = {
    name:"Kshitij",
    age:23,
    marks:100,
    city:"hydrabad"
};
console.log(student);

student.city ;
student.city = "Mumbai"; // yaha se object me city name change ho jayega bhai

student.gender;
student.gender ="Female";

student.marks = "A"; // yaha se hamne sikha ki hamene imteger ko string me update kar diya to js me ye bhi possible hai bahi done 

delete object.age;  // yaha se age wali value object se delete ho  jati hai 