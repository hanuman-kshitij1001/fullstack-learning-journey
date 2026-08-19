//Our First Request

//using Fetch
//fetch(url)


let url = "https://catfact.ninja/fact";
    fetch(url)
        .then((res) => {
            console.log(res);
            res.json().then((data)=>{
                    console.log(res.json());
            });
})
    .catch((err) => {
        console.log("ERROR - " ,err);
});