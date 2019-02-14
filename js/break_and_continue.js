"use strict";





function oddNumbers (input) {

    do{
        var user_num = prompt("Choose a number between 1 and 50.");
    }while(user_num % 2 === 0 || user_num > 50 || user_num < 1 || isNaN(user_num));

    for (var i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            continue;
        } else if (i === input) {
            console.log("Continuing after: " + i);
        }
        console.log("Here is an odd number: " + i);
    }
}

oddNumbers(21);










