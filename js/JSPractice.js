"use strict";

// IS ODD
function isOdd(number){
    return number % 2 === 1;
}

// IS EVEN
function isEven(number) {
    return number % 2 === 0;
}

// IS MULTIPLE OF VAR
function isMultiple(number, multNum){
    return number % multNum === 0;
}


// MINUS VAR IS ODD
function minusIsOdd(number, minusNum){
    var newNum = number - minusNum;
    return newNum % 2 === 1;
}

// MINUS VAR IS EVEN
function minusIsEven(number, minusNum){
    var newNum = number - minusNum;
    return newNum % 2 === 0;
}


