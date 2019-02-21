"use strict";


var input = document.getElementsByTagName("input");


//////////// BUTTON 1 FUNCTIONALITY ////////////////

var btn1 = document.getElementById("btnOne");

var inputOne = function(e){
    if(input[1].value === "+" || input[1].value === "-" || input[1].value === "x" || input[1].value === "/") {
        input[2].value += "1";
    }else {
        input[0].value += "1";
    }
};

btn1.addEventListener("click", inputOne, false);




//////////// BUTTON 2 FUNCTIONALITY ////////////////

var btn2 = document.getElementById("btnTwo");

   var inputTwo = function(e){
        if(input[1].value === "+" || input[1].value === "-" || input[1].value === "x" || input[1].value === "/") {
            input[2].value += "2";
        }else {
            input[0].value += "2";
        }
};
btn2.addEventListener("click", inputTwo, false);




//////////// BUTTON 3 FUNCTIONALITY ////////////////

var btn3 = document.getElementById("btnThree");

   var inputThree = function(e){
        if(input[1].value === "+" || input[1].value === "-" || input[1].value === "x" || input[1].value === "/") {
            input[2].value += "3";
        }else {
            input[0].value += "3";
        }
};
btn3.addEventListener("click", inputThree, false);





//////////// BUTTON 4 FUNCTIONALITY ////////////////

var btn4 = document.getElementById("btnFour");

var inputFour = function(e){
    if(input[1].value === "+" || input[1].value === "-" || input[1].value === "x" || input[1].value === "/") {
        input[2].value += "4";
    }else {
        input[0].value += "4";
    }
};
btn4.addEventListener("click", inputFour, false);





//////////// BUTTON 5 FUNCTIONALITY ////////////////

var btn5 = document.getElementById("btnFive");

var inputFive = function(e){
    if(input[1].value === "+" || input[1].value === "-" || input[1].value === "x" || input[1].value === "/") {
        input[2].value += "5";
    }else {
        input[0].value += "5";
    }
};
btn5.addEventListener("click", inputFive, false);





//////////// BUTTON 6 FUNCTIONALITY ////////////////

var btn6 = document.getElementById("btnSix");

var inputSix = function(e){
    if(input[1].value === "+" || input[1].value === "-" || input[1].value === "x" || input[1].value === "/") {
        input[2].value += "6";
    }else {
        input[0].value += "6";
    }
};
btn6.addEventListener("click", inputSix, false);






//////////// BUTTON 7 FUNCTIONALITY ////////////////

var btn7 = document.getElementById("btnSeven");

var inputSeven = function(e){
    if(input[1].value === "+" || input[1].value === "-" || input[1].value === "x" || input[1].value === "/") {
        input[2].value += "7";
    }else {
        input[0].value += "7";
    }
};
btn7.addEventListener("click", inputSeven, false);






//////////// BUTTON 8 FUNCTIONALITY ////////////////

var btn8 = document.getElementById("btnEight");

var inputEight = function(e){
    if(input[1].value === "+" || input[1].value === "-" || input[1].value === "x" || input[1].value === "/") {
        input[2].value += "8";
    }else {
        input[0].value += "8";
    }
};
btn8.addEventListener("click", inputEight, false);








//////////// BUTTON 9 FUNCTIONALITY ////////////////

var btn9 = document.getElementById("btnNine");

var inputNine = function(e){
    if(input[1].value === "+" || input[1].value === "-" || input[1].value === "x" || input[1].value === "/") {
        input[2].value += "9";
    }else {
        input[0].value += "9";
    }
};
btn9.addEventListener("click", inputNine, false);








//////////// BUTTON 0 FUNCTIONALITY ////////////////

var btn0 = document.getElementById("btnZero");

var inputZero = function(e){
    if(input[1].value === "+" || input[1].value === "-" || input[1].value === "x" || input[1].value === "/") {
        input[2].value += "0";
    }else {
        input[0].value += "0";
    }
};
btn0.addEventListener("click", inputZero, false);





//////////// CLEAR BUTTON FUNCTIONALITY ////////////////

var btnClear = document.getElementById("btnClear");

var inputClear = function(e){
    input[0].value = "";
    input[1].value = "";
    input[2].value = "";
};

btnClear.addEventListener("click", inputClear, false);





//////////// PLUS BUTTON FUNCTIONALITY ////////////////

var btnPlus = document.getElementById("btnPlus");

var inputPlus = function(e){
    input[1].value = "+";
};

btnPlus.addEventListener("click", inputPlus, false);






//////////// MINUS BUTTON FUNCTIONALITY ////////////////

var btnMinus = document.getElementById("btnMinus");

var inputMinus = function(e){
    input[1].value = "-";
};

btnMinus.addEventListener("click", inputMinus, false);






//////////// MULTIPLY BUTTON FUNCTIONALITY ////////////////

var btnMultiply = document.getElementById("btnMultiply");

var inputMultiply = function(e){
    input[1].value = "x";
};

btnMultiply.addEventListener("click", inputMultiply, false);






//////////// DIVIDE BUTTON FUNCTIONALITY ////////////////

var btnDivide = document.getElementById("btnDivide");

var inputDivide = function(e){
    input[1].value = "/";
};

btnDivide.addEventListener("click", inputDivide, false);







//////////// EQUAL SIGN / TOTAL FUNCTION FUNCTIONALITY ////////////////

var btnEquals = document.getElementById("btnEquals");

var inputSum = function(e){
    var total;
    if(input[0].value === "" || input[1].value === "" || input[2].value === ""){
        input[0].value = "SYNTAX";
        input[1].value = "=";
        input[2].value = "ERROR";
    }
    else if(input[1].value === "+"){
        total = +input[0].value + +input[2].value;
        input[0].value = input[0].value + "   +   " + input[2].value;
        input[1].value = "=";
        input[2].value = total;
    }else if(input[1].value === "-"){
        total = +input[0].value - +input[2].value;
        input[0].value = input[0].value + "   -   " + input[2].value;
        input[1].value = "=";
        input[2].value = total;
    }else if(input[1].value === "x"){
        total = +input[0].value * +input[2].value;
        input[0].value = input[0].value + "   x   " + input[2].value;
        input[1].value = "=";
        input[2].value = total;
    }else if(input[1].value === "/"){
        total = +input[0].value / +input[2].value;
        input[0].value = input[0].value + "   /   " + input[2].value;
        input[1].value = "=";
        input[2].value = total;
    }

};

btnEquals.addEventListener("click", inputSum, false);











