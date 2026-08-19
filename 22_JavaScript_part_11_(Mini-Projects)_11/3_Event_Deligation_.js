// Event Delegation :

// Hamne Simmilar type Ke Event Listner ko create kiya tha Done  To jo naye Elelent add honge Wo same Event lisner en sab par apply nahi hota hai theek 
// par agr haam chahte hai ki hamre naye emelemts ke liye bhi ye sare evenet apply ho to ussi ke liye haam Evenet deligation ka use karte hai samjha na re tu 

// esme haam bubbleing wali property use karte hai done 

// Event Deigation ke liye haam Enke Child Ke uppar nahi Enke PArenet Ke Uppar Karwate hai Done 


console.log("JS FILE LOADED"); // To check html file load ho rahi hai ki nahi ?

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");


btn.addEventListener("click", function () {

    let item = document.createElement("li");
    item.innerText = inp.value;
    let Delete_btn = document.createElement("button");
    Delete_btn.innerText = "delete";
    Delete_btn.classList.add("delete");
    item.appendChild(Delete_btn);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value="";


});

ul.addEventListener("click", function (event) {
    // console.log(event.target.nodeName); // ye hame ye batata hai ki kon si cheez trigerd hui hai ya press hui hai smjha na  // esme node name hame bata hai kio kya wo div tha pragrph tha ya kuch aur samjha na Re 
    // console.log("button clicked");
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted!");
    }
});







