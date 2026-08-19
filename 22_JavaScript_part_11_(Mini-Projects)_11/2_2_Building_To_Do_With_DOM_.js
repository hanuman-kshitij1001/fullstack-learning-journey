// Activity
//1.> sabse pahele haam ek input denge input ke ndhr apne task Ko add kar sakte hai aur wo task hamare page ke niche list ke form me a jayenge
// .. Heading Bnaayege 
//... Ek input banayenge 
// uske baad hame ek unordered list  banai padegi jiske andhr hamre kafi sare list items add ho kar ayenge  
// Esme Haam Apne Task Ko Dengen Aur 

console.log("JS FILE LOADED"); // To check html file load ho rahi hai ki nahi ?

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
//To ye aab value to dikh rahi hai mujhe mujhe add karna hai kaise karu ao wo bhi dekh lete hai re 
    let item = document.createElement("li");
    item.innerText = inp.value;
    

// yaha se haam dlete wala Button create kar rahe hai theek hai na 
    let Delete_btn = document.createElement("button");
    Delete_btn.innerText = "delete";
    Delete_btn.classList.add("delete");

    item.appendChild(Delete_btn);

    // yaha pe dono ko add kar diya done 
    ul.appendChild(item);
    console.log(inp.value);

    //eske Baad hamne Dekh a ki haam input me task likh rahe parr bar bar hatna pad raha hai task ko But we want to ki agr ek baar task add kar diya to wo apne aap delete ho jaye kaise kare niche wali line 
    inp.value="";


});


// agr haam chate hai ki jaise hi haam delete clicke kare wo sare ke  sare delte bhi ho jaye samjhna re 

let Delete_btns = document.querySelectorAll(".delete");

for (let Delete_btn of Delete_btns) {
    Delete_btn.addEventListener("click", function () {
        console.log("Element Deleted");

        let parent = this.parentElement;
        console.log(parent);
        parent.remove();

        //“ Jo .delete buttons ABHI PAGE PE HAIN,
        //  un sabko ek list me de do.”
        //  TUM JO PAHELE SE ADD KAR KE RAKHE HO WO DLETE ELEMET WAHI ELEMET DELETE KAR PATA HAI SAMJHNA 
        //  AuR NAYE Elemet add karoge to wo dlete nahi karenga samjhna  re  Tu
        //  Loop na lene se problem solve nahi hoti.

    });
}

// Es Problem ka Solution hamne Naye / next js File me HAi That is Event Del


