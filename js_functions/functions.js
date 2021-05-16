let val = 'Testing val in global';
let num = 0;

function tester() {
    let val = 'Val inside the function';
    console.log(`${val} ${num}`);
    num++;
}

console.log(`${val} ${num}`); //runs val in global
tester();
console.log(`${val} ${num}`); //runs val in global 2
tester();
console.log(`${val} ${num}`); //runs val in global 3


// the JavaScript Functions are used to create reusable pieces of code for further usage.
/*
let type2 = () => {
    num++;
};

console.log(`${val}${num}`);
type2();
console.log(`${val}${num}`);
type2();

*/

//Simple mathematical operations
let a, b, c, d = 1;

function add(a, b, c, d) {
    let result = a + b + c + d;
    return result;
}

let addResult = add();
console.log(addResult);

function sub(a, b, ) {
    let result = a - b;
    return result;
}
console.log(sub());

function multiply(a, b, c, d) {
    let result = a * b * c * d;
    return result;
}
console.log(multiply());

function divide(a, b) {
    let result = a / b;
    return result;
}
console.log(divide());

// Function Declaration (i.e., the functions are declared before they are called,
// Because 'let' is used)
let val3 = funDec(70);
console.log("The Function declaration ", val3);

function funDec(e) {
    return e * e;
}

// Function Expression (i.e., the functions are expressed before they are called, 
// Because 'const' is used.)
const funExp = function(f) {
    return f * f;
};
let val4 = funExp(10);
console.log("The Function expressed ", val4);

// Function Closures

let gkey = 1100; // Normal value named Gkey Global Key

function closure1() { //Step 3- closure1 returns function inner()
    const secretNum = 123456;
    return function inner() { // Step 4- inner() o/p the value of secretNum which is locally scoped
        console.log(`The Secret Number is, ${secretNum}`);
    };
}

const outputClosure = closure1(); // Step 2- store the return of closure1()
outputClosure(); // Step 1- This calls the const value above for o/p

//Step 5- end result will be value/ output given by the inner(),
// Where the secretNum in it is not accessible outside it due Local Scope