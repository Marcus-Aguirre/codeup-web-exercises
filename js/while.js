"use strict";

// var i = 0;
// var x = 1;
//
// while(i < 16){
//     i++;
//     console.log(x *= 2);
// }

////////////////////////////////


var allCones = Math.floor(Math.random() * 50) + 50;
console.log("Total cones available to sell: " + allCones);

do{
    var cones_sold = Math.floor(Math.random() * 5) + 1;

    if(allCones > cones_sold){
        allCones -= cones_sold;
        console.log(cones_sold + " cones sold. " + allCones + " remaining.");

    }else if(allCones === cones_sold){
        allCones -= cones_sold;
        console.log(cones_sold + " cones sold. " + allCones + " remaining.");
        console.log("All the cones have been sold.");
        break;

    }else if(allCones < cones_sold){
        console.log("I don't have enough cones to sell you, sorry.");
    }

} while(allCones >= 0)