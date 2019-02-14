(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["Marcus", "Name_2", "Name_3", "Name_4"];




    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);




    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);





    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for(var i = 0; i < names.length; i++){
        console.log(names[i]);
    }





    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(name, index){
        console.log("Here is a name: " + name + " and index " + index);
    })





    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */




    function first(array){
             return array[0];

    }
    console.log(first(names));





    function second(array){
            return array[1];

    }
    console.log(second(names));






    function last(array){
            return array[array.length - 1];

    }
    console.log(last(names));








    //////////////////////// SHAPES BONUS ////////////////////////


    var shapes = ["triangle", "square", "circle", "oval", "trapezoid", "rectangle"];

    var userGuess = prompt("Pick a shape? Any Shape? Any Shape at all?");

    for(var i = 0; i < shapes.length ; i++){

            if(shapes[i] === userGuess){
                console.log(shapes[i] + " matches your input.");
                break;
            }
            console.log(shapes[i] + " doesn't match, guessing again.");

         }









    //////////////////// RANDOM DAY OF WEEK BONUS ////////////////


    var weekDays = ["pay-day",
            "lazy-day",
            "whatever-day",
            "mongolianBBQ-day",
            "wings-day",
            "spaghetti-day",
            "taco-day",
        "iceCreamSun-day"];


    function randDay(input) {

        var rand = (Math.floor(Math.random() * 8) + 1) - 1;

        return input[rand];


    }

    console.log("Randomly Generated Day: " + randDay(weekDays));
    console.log("Randomly Generated Day: " + randDay(weekDays));
    console.log("Randomly Generated Day: " + randDay(weekDays));








    ///////////////////// SINGLE LETTER BONUS //////////////////////


    var alphabet = ["a",
            "b","c", "d", "e",
            "f", "g", "h", "i",
            "j", "k", "l", "m",
            "n", "o", "p", "q",
            "r", "s", "t", "u",
            "v", "w", "x", "y",
            "z"];


         var userGuess = prompt("Choose a letter in the alphabet?");

    function letterPicker(input) {

        for (var i = 0; i < alphabet.length; i++) {
            if (alphabet[i] === input) {

                console.log("Your letters place in the alphabet is: " + (+i + 1));
                break;
            }
        }
    }

    letterPicker(userGuess);






    /////////////////////// LONGEST STRING BONUS ///////////////////////


    var strings = ["word",
            "words",
            "big word",
            "bigger word",
            "biggest word"];


    function longestString(input){

        var longest = input[0];

        for (var i = 0; i < strings.length; i++) {
            var compared = input[i];

            if (longest.length < compared.length) {
                longest = compared;
            }
        }

        return longest;
    }


    console.log("The longest string is " + longestString(strings).length + " characters and is: " + longestString(strings));






































})();
