function add(a, b){
    return a + b;
}

let total = add(34, 5);
console.log(total);

function subtract(a, b){
    return a - b;
}

let minus = subtract(56, 20);
console.log(minus);


function divide(a, b){
    return a / b;
}

let division = divide(200, 40);
console.log(division);


function multiply(a, b){
    return a * b;
}

let multiplication = multiply(20, 40);
console.log(multiplication);

function increment(n) {
    return n + 1;
} 
console.log(increment(n))

function decrement(n) {
    return n - 1;
} 
console.log(decrement(n))

function makeInt(n) {
    return parseInt(n, 10);
} 
console.log(makeInt(n))

function preserveDecimal(n){
    return parseFloat(n);
}
console.log(preserveDecimal(n))