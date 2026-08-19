// yaha bhi reduce metho hi use ho ga

//Reduce
// Find The Maximum in an Array

let nums = [2,3,4,5,3,4,7,8,1,2];

// ye hamra main syntax hai bhai;
 let result = nums.reduce((max , el) => {
    if(el > max){
        return el;
    } else {
        return max;
    }
    });


    