//Map

// Syntax:  let newArr = arr.map(some function definition or name);

//Example: Jo value Store Hoti Waha se naya array bana ta hai aur use return karta ahi done ;


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


let num = [1, 2, 3, 4];
let double = num.map(function(el) {
return el*2;
});





// Filter

// 


let nums1 = [2, 4, 1, 5, 6, 2, 7, 8, 9];
// let even nums.filter((num) (num % 2 == 0));
let ans1 = nums.filter((el) => {
    return el % 2 == 0;
});


let nums2 = [2, 4, 1, 5, 6, 2, 7, 8, 9];
// let even nums.filter((num) (num % 2 == 0));
let ans2 = nums.filter((el) => {
    return el != 2 == 0;
});