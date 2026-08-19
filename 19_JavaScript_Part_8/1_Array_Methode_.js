// Array Methods

//1-  forEach
//2-  map
//3-  filter
//4-  some
//5-  every
//6-  reduce


//1- forEach:
//          arr.forEach(some function definition or name);

let arr1 = [1, 2, 3, 4, 5];
function print(el) {
console.log(el);
}
arr1.forEach(print);

// OR

arr1.forEach(function(el) {
console.log(el);
});




// object wali array 

let arr2 = [
    {
        name: "Ayush",
        marks: 95,
        },

        {
        name: "shradha",
        marks: 94.4,
        },

        {
        name: "Kshitij",
        marks: 92,
    },

];

arr2.forEach((student) => {
    console.log(student);
})
arr2.forEach((student) => {
    console.log(student.marks); // sare ke sare marks print honke a jayenge done 
})