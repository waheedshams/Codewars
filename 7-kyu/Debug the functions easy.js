// Should be easy, begin by looking at the code. Debug the code and the functions should work.

// There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)

function multi(arr) {
    return arr.reduce((acc, c) => acc * c);
}
function add(arr) {
    return arr.reduce((acc, c) => acc + c);
}
function reverse(str) {
    return str.split("").reverse().join("");
}