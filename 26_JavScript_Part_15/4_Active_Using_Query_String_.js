// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     // input se country read karo
//     let country = document.querySelector("input").value;
//     console.log("Searching for country:", country);

//     // call function with updated country
//     await getColleges(country);
// });

// // async function me country as parameter
// async function getColleges(country) {
//     try {
//         let res = await axios.get(url + country);
//         console.log(res.data); // ✅ API response me data property
//     } catch (e) {
//         console.log("error: ", e);
//         return [];
//     }
// }

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log("Searching for:", country);

    let colArr = await getColleges(country);
    show(colArr);
});

// show function outside event listener
function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = ""; // clear previous results

    for (let col of colArr) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li); // append to ul
    }
}

// async function to fetch colleges
async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data; // returns array of colleges
    } catch (e) {
        console.log("error: ", e);
        return [];
    }
}
