// (function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = { firstName: "Marcus",
                    lastName: "Aguirre"};


        console.log(person.firstName);
        console.log(person.lastName);









    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function(){
        return "Hello from " + person.firstName + " " + person.lastName + "."
    };



    console.log(person.sayHello());
    console.log("\n");






    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */



    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320},
        {name: 'Pluto', amount: 400},
        {name: 'Mickey', amount: 140}

    ];


    shoppers.forEach(function(element, index, array){
        if (element.amount > 200){
            var customerAndDiscount = " ";
            var priceOff = element.amount * .12;
            customerAndDiscount += element.name + ": Original Price: $" + element.amount + ", Discounted 12% Price: $" + (element.amount - priceOff);
            console.log(customerAndDiscount);
            console.log("\n");
        } else {
            console.log(element.name + ": Original Price: $" + element.amount + ", No Discount, Final Price: $" + element.amount);
            console.log("\n");
        }

    });


    console.log("\n");




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {title: "The Indigo Soul", author: {firstName: "Dude", lastName: "Fieri"}},
        {title: "The Burning Eyes of Yesterdays Tomorrow", author: {firstName: "Deeli", lastName: "Delores"}},
        {title: "Infinity's Eventuality", author: {firstName: "Arayamini", lastName: "Arayaminichi"}},
        {title: "Cool-Ade Dude", author: {firstName: "Gordo", lastName: "Santo-Loco"}},
        {title: "The Purple Soul: Shades of Indigo", author: {firstName: "Dude", lastName: "Fieri"}}
    ];


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    books.forEach(function(element, index){
        console.log("Book # " + (index + 1));
        console.log("Title: " + element.title);
        console.log("Author: " + element.author.firstName + " " + element.author.lastName);
        console.log("--------------------------");

    });








    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */



    var books = [
        {title: "The Indigo Soul", author: {firstName: "Dude", lastName: "Fieri"}},
        {title: "The Burning Eyes of Yesterdays Tomorrow", author: {firstName: "Deeli", lastName: "Delores"}},
        {title: "Infinity's Eventuality", author: {firstName: "Aramini", lastName: "Araminichi"}},
        {title: "Cool-Ade Dude", author: {firstName: "Gordon", lastName: "Santo-Loco"}},
        {title: "The Purple Soul: Shades of Indigo", author: {firstName: "Dude", lastName: "Fieri"}}
    ];




function createBook(inTitle, inAuthorFirst, inAuthorLast){
    books.push({title: inTitle, author: {firstName: inAuthorFirst, lastName: inAuthorLast}});
    };

    createBook("Purple Sleet", "Jocohni", "Jaco");

console.log(books);





console.log(Object.keys(books[0].author));


function showBookInfo(lastname){
   for(var i = 0; i < books.length; i++) {
       if (lastname.toLowerCase() === books[i].author.lastName.toLowerCase()) {
           console.log("Book # " + (i + 1));
           console.log("Title: " + books[i].title);
           console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
           console.log("--------------------------");
       }
   }

}

var userRequest = prompt("Are you looking for a certain book? Please enter the last name of the author and we will search our database.");
showBookInfo(userRequest);














})();
