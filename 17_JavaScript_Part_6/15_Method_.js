// Methods:Actions that can be performed on an object.
// jo functions objects ke andhr define hote hai unko haam methode bolte hai done ?

const calculator = {
add: function(a, b) {
            return a + b;
    },
    sub: function(a, b) {
        return a -b;
    },
    mul: function(a, b) {
            return a * b;
    }

    };



// Methods (Shorthand)
const calculator2 = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a-b; 
    }
};