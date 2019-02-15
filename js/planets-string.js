(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */


    planetsArray = planetsString.split('|');

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */


    console.log(planetsArray.join("<br>"));





































    // Write a function that returns the sum of an array of numbers

    function arrayAdd(in1, in2){
        return in1.reduce(array_1[0], array_1.[array_1.length - 1]) + in2.reduce(array_2[0], array_2.[array_2.length - 1]);
    }


    var array_1 = [1, 5, 9, 2, 4, 19, 3, 12, 7];

    var array_2 = [5, 2, 6, 2, 5, 13, 1, 17];

    console.log(arrayAdd(array_1, array_2));













    // Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the user to choose from a menu with the following actions:
    //     1) add a student
    //     2) delete a student
    //     3) view all students in alphabetical order
    //     4) view all students in reverse alphabetical























})();
