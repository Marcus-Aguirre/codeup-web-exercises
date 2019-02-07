"use strict";

alert("Welcome to my website");
var fav_color = prompt("What is your favorite color?");
alert("Hey " + fav_color + " is my favorite color also!");


var movie1 = prompt("You have three movies rented, how many days have you rented the first movie?");
var movie2 = prompt("How many days have you rented the second movie?");
var movie3 = prompt("How many days have you rented the third movie?");

var pay_per_day = 3;

var total_days_rented = parseInt(movie1) + parseInt(movie2) + parseInt(movie3);

var total_fee = pay_per_day * total_days_rented;

alert("You have rented movies for a combined total of " + total_days_rented + " days.");



alert("Your total fee for all of your movies is $" + total_fee + ".");



var g_pay = prompt("How much do you get paid at Google?");
var f_pay = prompt("How much do you get paid at Facebook?");
var a_pay = prompt("How much do you get paid at Amazon?");

var g_hours = prompt("How many hours did you work at Google?");
var f_hours = prompt("How many hours did you work at Facebook?");
var a_hours = prompt("How many hours did you work at Amazon?");

var google_total = g_hours * g_pay;
var fbook_total = f_hours * f_pay;
var amzn_total = a_hours * a_pay;

var total_pay = parseInt(google_total) + parseInt(fbook_total) + parseInt(amzn_total);


alert("Your total pay from all your jobs is $ " + total_pay + ", that's a lot of money!!!");





alert("So, it seems like you are trying to enroll in some college courses. Let me ask you some questions to verify that you can be enrolled.");
var class_space = confirm("Is the class you are requesting have space? 'Ok' means yes.");
var schedule_space = confirm("Do you currently have space for it in your personal class schedule? 'Ok' means yes.");

var enrolled = class_space && schedule_space;

if (enrolled) {
    alert("You have been enrolled in the course. Thank you for your time.");

} else {
    alert("The class is either currently full or your schedule has no space. Try again at another time");
}

var number_of_items = prompt("How many items are you going to purchase?");
var valid_offer = confirm("Is the offer currently valid");
var premium_member = confirm("Are you a premium member of your fine establishment");


var discount_applied = premium_member || parseInt(number_of_items) > 2 && valid_offer;

alert("The discount application status is " + discount_applied);



