
// //  Todo App
// // 1 -list - to show all todos
// // 2 -add - to add a todo
// // 3 -delete - to delete a task
// // 4 -quit - to exit the todo

// let todo = [];

// let req =prompt("Please Enter your Request")
// while(true){
//     if(req=="quite"){
//     console.log("Quiting App");
//     break;
//     }
//     if(req == "list"){
//         console.log("----------------");
//         for(task of todo){
//             console.log(task);
//         }
//         console.log("----------------");
//     }
//     else if(req=="add"){
//         let task = prompt("Please enter the Task You Want to add");
//         todo.push(task);
//         console.log("task added");
//     }
//     else if(req == "delete"){

//     }
// }


let todo = [];

let req = prompt("Please Enter your Request");

while (true) {
    if (req === "quit") {
        console.log("Quitting App");
        break;
    }

    if (req === "list") {
        console.log("-------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("-------------");
    } 
    else if (req === "add") {
        let task = prompt("Enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    } 
    else if (req === "delete") {
        let idx = prompt("Enter index of task to delete");
        todo.splice(idx, 1);
        console.log("Task deleted");
    } 
    else {
        console.log("Invalid request bhai 😤");
    }

    req = prompt("Please Enter your Request");
}

//
