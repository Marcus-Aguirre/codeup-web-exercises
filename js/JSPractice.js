"use strict";

// IS ODD
function isOdd(number){
    return number % 2 === 1;
}
console.log(isOdd(5)); //TRUE
console.log(isOdd(16)); // FALSE
console.log(isOdd(26)); // FALSE



// IS EVEN
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(6)); //TRUE
console.log(isEven(15)); // FALSE
console.log(isEven(24)); // TRUE



// IS MULTIPLE OF VAR
function isMultiple(number, multNum){
    return number % multNum === 0;
}
console.log(isMultiple(10, 2)); // TRUE
console.log(isMultiple(15, 7)); // FALSE
console.log(isMultiple(100, 5)); // TRUE



// MINUS VAR IS ODD
function minusIsOdd(number, minusNum){
    var newNum = number - minusNum;
    return newNum % 2 === 1;
}
console.log(minusIsOdd(10, 2)); // FALSE
console.log(minusIsOdd(10, 3)); // TRUE
console.log(minusIsOdd(100, 52)); // FALSE



// MINUS VAR IS EVEN
function minusIsEven(number, minusNum){
    var newNum = number - minusNum;
    return newNum % 2 === 0;
}
console.log(minusIsEven(10, 2)); // TRUE
console.log(minusIsEven(10, 3)); // FALSE
console.log(minusIsEven(100, 52)); // TRUE


