"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


var message = confirm("Would you like to enter a number");


if (message){
    var number = prompt("Choose a number?");

    if(!isNaN(number)) {

        if (number % 2 === 0) {
            alert("Your number is even")
        } else {
            alert("Your number is odd")
        }


        alert("Here is your number " + (+number + 100));


        if (number > 0) {
            alert("Your number is positive");
        } else {
            alert("Your number is negative");
        }
    }else{
        alert("Your input is not a number");
    }

} else {
    alert("Fine, mortal, maybe next time.");
}







/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


var color_name = prompt("Pick a color, either blue, red, or cyan");


function analyzeColor(color) {

    if (color_name === "blue") {
    console.log("Blue is the color of the sky");
    } else if (color_name === "red") {
        console.log("Red is the color of Strawberries.");
    } else if (color_name === "cyan") {
        console.log("I'm not too sure about the color cyan.");
    } else {
        console.log("You chose incorrectly, mortal.");
    }

}

analyzeColor(color_name);





// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)


var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', "smaragdine"];
var randomColor = colors[Math.floor(Math.random() * colors.length)];


/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

analyzeColor(randomColor);





/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */


function analyzeColor(color){

    switch (color) {
        case "blue":
            console.log("Blue is the color of the sky");
            break;
        case "red":
            console.log("Red is the color of Strawberries.");
            break;
        case "cyan":
            console.log("I'm not too sure about cyan");
            break;
        default:
            console.log("You chose incorrectly, mortal");

    }
}








/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


var color_name = prompt("Pick a color, either blue, red, or cyan");


function analyzeColor(color) {

    if (color_name === "blue") {

        return "Blue is the color of the sky";

    } else if (color_name === "red") {

        return "Red is the color of Strawberries.";

    } else if (color_name === "cyan") {

        return "I'm not too sure about the color cyan.";

    } else {

        return "You chose incorrectly, mortal.";

    }

}

alert(analyzeColor(color_name));







/* ########################################################################## */





/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(lucky_num, total_price){

     var discount;

    switch(lucky_num) {

        case 1:
            discount = .10;
            break;

        case 2:
            discount = .25;
            break;

        case 3:
            discount = .35;
            break;

        case 4:
            discount = .50;
            break;

        case 5:
            discount = 1;
            break;

        default:
            alert("The numbers you put in aren't accurate");
            break;
    }

    var discounted_price = total_price - (discount * total_price);

    return discounted_price.toFixed(2);

}


alert("Your new price after your discount: $" + calculateTotal(1,100));







/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */




// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
alert("Your Lucky Number is: " + luckyNumber);


calculateTotal(luckyNumber, 100);








////////////// CONDITIONAL BONUS WORK ///////////////








// function makeJustinMessage(name){
//     if (name.toLowerCase() === "justin"){
//         return "It's Justin!";
//     } else {
//         return "It's not Justin!";
//     }
// }
//
// alert(makeJustinMessage("Justin"));






// function streetLightProcedures(lightColor){
//
//         if (lightColor.toLowerCase() === "green"){
//
//             return "The light is Green, you can go.";
//
//         } else if(lightColor.toLowerCase() === "red") {
//
//             return "The light is red, you should prepare to stop.";
//
//         } else if(lightColor.toLowerCase() === "yellow") {
//
//             return "The light is Yellow, you should prepare to stop.";
//
//         } else {
//
//             return "I've never seen a traffic light turn that color before.";
//         }
//
// }
//
// var color = prompt("What color is the traffic light?");
//
// alert(streetLightProcedures(color));















