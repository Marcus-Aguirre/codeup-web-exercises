"use strict";

var groceryList = [];


function addGroceryList (){

    var x = prompt("How many items would you like to add to the list?");

    var z = "";

    for (var i = 0; i < x; i++){

        var userInput = prompt("Name an item to add to the list?");

        var table = document.getElementById("groceryList");

        z += "<li>" + userInput + "</li>";

        table.innerHTML = z;

        groceryList.push(userInput);

    }

}


addGroceryList();