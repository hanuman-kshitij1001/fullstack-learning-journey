// Axios : Harhri ek libarary hai Jisse haam Apne Https ke request ko create karte hai


// Axios
// Library to make HTTP requests

//Syntax:

// async function getFacts() {
//     try {
//     let res = await axios.get(url);
//         console.log(res);
// } catch (e) {
//         console.log("ERROR", e);
//     }
// }



let btn = document.querySelector("button");
    btn.addEventListener("click",async () => {
        let fact = await getFacts();
            // console.log(fact);
            document.getElementById("result").innerText = fact; 
    });
let url = "https://catfact.ninja/fact";

async function getFacts() {
try {
    let res = await axios.get(url);
    return res.data.fact;
}
    catch (e) {
    console.log("error -", e);
    return "NO Fact Found"

    }
}
