//This With Arrow Functions

//bhai esme bahot complecate hota hai kyu ki yaha pe arrao fuction me yaad karu tumne ek cheez padhi thi lexsus scope , fuction scope esee hi yaha use kiya ja raha jaa hai 

const student = {
name: "aman",
marks:
95,
prop: this, //global scope
getName: function () {
console.log(this);
return this.name;
},

getMarks: () => {
    console.log(this); //parent's scope window
    return this.marks;
},

getInfo1: function() {
    setTimeout( () => {
        console.log(this);// Call lagai hai Student ne 
    }, 2000);
},
getInfo2:function() {
    setTimeout( function() {
        console.log(this); // Window 
        }, 2000)
    }
};