let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // let inp= document.querySelector("input");
    // console.dir(inp);
    // console.log(inp.InnerText);
    // console.log(inp.value);

    let inp= document.querySelector("#user");
    let pass= document.querySelector("#pass");
    
    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});

