// module.exports:
// requiring files

// require() :         a built-in function to include external modules that exist in separate files.
// module.exports :    a special 

// unhone ese math.js ke name files banai thi aur ese maths ke fuction likha tha kjaise niche likha hai 

const sum = (a,b) => a+b;
const mul = (a,b) => a*b;
const PI = 3.14;
const G = 9.8;

// yaha talk hamne kuch maths ki files bana li ab
// dekh hone wala kya hai ki ye jo maths ke function banaye hai yaha pe ab esko as a module use karnge matb jiss jiss file me hame esi calculation chahiye hongi to es file ko waha pe import kar denge theek hai na Ya BAsicllly bol sakte hai ki import kar denga 


// yaha mai ye bata raha hun ki mai dusre file es file ko kaise use kare theek hai na 
 // chalo dekhte hai 

//to maths wali file me haam  ek esa likhte hai jaise ki 

maodule.export="12345";

// Note 12334 is random value I can take here please put the value accoring to requriment done pk 

// agr haam chate hai ki  ye sari value waha pe bheje to bhaoi ek kaam karnge boject bana lete hai kaise 

let obj = {
    sum  : sum,
    mul:mul,
    G:G,
    PI:PI
};
maodule.export(obj);

// To ayha se ye sari value jab kissi file ye nam ese import hongi to waha apne aap reflect karegi theek hai na 

// Esko import wahi kar sakta ahi jo esi same direcotry me ho samjha abhi haam agr padhge ki kaise haam folder banake import karte 


// dusra tarika  ese object na bana ke direct kaise kare dekh ab


maodule.export = {
    sum  : sum,
    mul:mul,
    G:G,
    PI:PI
};

// ese bhi kar sakte hai bhai samjha na 

// aur ek tarika hai kaise kare dekh na bhai 


maodule.export. sum = (a,b) => a+b;
maodule.export. mul = (a,b) => a*b;
maodule.export. PI = 3.14;
maodule.export. G = 9.8;

// kyu module.export kudh ek object hota hai 

// ek aur tarika  yaha pe bass exports hi likhna padta hai  yad rakhan a exports hota hai 

// but is case hame ek error milta hai kyu ki js es export ko ek normal  ki taraha treat kiya jata hai par waise banane se wo object ki taraha trate hota hai thats why waha work karta hai 
exports. sum = (a,b) => a+b;
exports. mul = (a,b) => a*b;
exports. PI = 3.14;
exports. G = 9.8;