// LINKING jS File

console.log("Hello Word");
console.log("Kshitij Tiwari");
let a = 10;
let b= 30;
let sum = a+b;
console.log(sum);


// From Here We Can UnderStant About How We can Link Js With Our Html


//1. Using <script> tag inside HTML
<script>
  console.log("JS connected");
</script>

//2. Linking external JS file (most common ✅)
//   <script src="script.js"></script>           👉 Your JS code will be in script.js

//3.   Where to place <script> tag
//     Inside <head> (not recommended)
//     Before closing </body> (best practice ✅)

//<body>
//  <h1>Hello</h1>
//
//  <script src="script.js"></script>
//</body>